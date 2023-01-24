import {
  useQuery,
  hashQueryKey,
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
} from "react-query";
import {
  getFirestore,
  onSnapshot,
  doc,
  collection,
  query,
  where,
  orderBy,
  getDoc,
  setDoc,
  updateDoc,
  addDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase";


// Initialize Firestore
const db = getFirestore(firebaseApp);

// React Query client
const client = new QueryClient();

/**** USERS ****/

// Subscribe to user data
// Note: This is called automatically in `auth.js` and data is merged into `auth.user`
export function useUser(uid) {
  // Manage data fetching with React Query: https://react-query.tanstack.com/overview
  return useQuery(
    // Unique query key: https://react-query.tanstack.com/guides/query-keys
    ["user", { uid }],
    // Query function that subscribes to data and auto-updates the query cache
    createQuery(() => doc(db, "users", uid)),
    // Only call query function if we have a `uid`
    { enabled: !!uid }
  );
}

// Fetch user data once (non-hook)
// Useful if you need to fetch data from outside of a component
export function getUser(uid) {
  return getDoc(doc(db, "users", uid)).then(format);
}

// Create a new user
export function createUser(uid, data) {
  return setDoc(doc(db, "users", uid), data, { merge: true });
}

// Update an existing user
export function updateUser(uid, data) {
  return updateDoc(doc(db, "users", uid), data);
}

/**** ITEMS ****/
/* Example query functions (modify to your needs) */

// Subscribe to item data
export function useItem(id) {
  return useQuery(
    ["item", { id }],
    createQuery(() => doc(db, "items", id)),
    { enabled: !!id }
  );
}

// Fetch item data once
export function useItemOnce(id) {
  return useQuery(
    ["item", { id }],
    // When fetching once there is no need to use `createQuery` to setup a subscription
    // Just fetch normally using `getDoc` so that we return a promise
    () => getDoc(doc(db, "items", id)).then(format),
    { enabled: !!id }
  );
}

// Subscribe to all items by owner
export function useItemsByOwner(owner) {
  return useQuery(
    ["items", { owner }],
    createQuery(() =>
      query(
        collection(db, "items"),
        where("owner", "==", owner),
        orderBy("createdAt", "desc")
      )
    ),
    { enabled: !!owner }
  );
}

// Gets all applicants
export function useAllApplicants() {
  return useQuery(
    ["Applicants"],
    createQuery(() =>
      query(
        collection(db, "Applicants")
      )
    )
  );
}
//Gets all acceptances
export function useAllAcceptances() {
  return useQuery(
    ["Acceptances"],
    createQuery(() =>
      query(
        collection(db, "Acceptances")
      )
    )
  );
}

// Gets one applicant based on the id
export function useOneApplicant(id) {
  return useQuery(
    ["Applicants"],
    createQuery(() =>
      query(
        collection(db, "Applicants"),
        where("id", "==", id)
      )
    )
  );
}

// export function WriteApplicant(){
//   return use qw
// }


// Gets all columns
export function useAllColumns() {
  return useQuery(
    ["Columns"],
    createQuery(() =>
      query(
        collection(db, "Columns")
      )
    )
  );
}

export async function getPDF() {
  const pdfRef = doc(db, "Applicants", "hKvpTUv1QqJLRHh44EM2")
  const docSnap = await getDoc(pdfRef)
  console.log(docSnap.data())
}

// Create a new acceptances item
export function createItem(data, bool) {
  const user = getAuth().currentUser;
  setDoc(doc(db,"Applicants",data.id), {accepted: bool});
  return addDoc(collection(db, "Acceptances"), {
    ...data,
    accpeted: bool,
    createdAt: serverTimestamp(),
    acceptedBy : user.displayName,
    acceptedEmail : user.email
  });
}

// Update an item
export function updateItem(id, data) {
  return updateDoc(doc(db, "items", id), data);
}

// Delete an item
export function deleteItem(id) {
  return deleteDoc(doc(db, "items", id));
}

//Delete an item from acceptances
export function deleteAccept(id, bool) {
const user = getAuth().currentUser;
const comp = doc(db, "Acceptances", id); 
  if (comp.exists){
  if (user.email === doc(db, "Acceptances", id).acceptedBy){
    setDoc(doc(db, "Applicants",id), {accepted: bool})
    return deleteDoc(doc(db, "Acceptances", id));
  } 
} else {
  return setDoc(doc(db, "Applicants",id), {accepted: bool});
}
}

/**** HELPERS ****/

// Store Firestore unsubscribe functions
const unsubs = {};

function createQuery(getRef) {
  // Create a query function to pass to `useQuery`
  return async ({ queryKey }) => {
    let unsubscribe;
    let firstRun = true;
    // Wrap `onSnapshot` with a promise so that we can return initial data
    const data = await new Promise((resolve, reject) => {
      unsubscribe = onSnapshot(
        getRef(),
        // Success handler resolves the promise on the first run.
        // For subsequent runs we manually update the React Query cache.
        (response) => {
          const data = format(response);
          if (firstRun) {
            firstRun = false;
            resolve(data);
          } else {
            client.setQueryData(queryKey, data);
          }
        },
        // Error handler rejects the promise on the first run.
        // We can't manually trigger an error in React Query, so on a subsequent runs we
        // invalidate the query so that it re-fetches and rejects if error persists.
        (error) => {
          if (firstRun) {
            firstRun = false;
            reject(error);
          } else {
            client.invalidateQueries(queryKey);
          }
        }
      );
    });

    // Unsubscribe from an existing subscription for this `queryKey` if one exists
    // Then store `unsubscribe` function so it can be called later
    const queryHash = hashQueryKey(queryKey);
    unsubs[queryHash] && unsubs[queryHash]();
    unsubs[queryHash] = unsubscribe;

    return data;
  };
}

// Automatically remove Firestore subscriptions when all observing components have unmounted
client.queryCache.subscribe(({ type, query }) => {
  if (
    type === "observerRemoved" &&
    query.getObserversCount() === 0 &&
    unsubs[query.queryHash]
  ) {
    // Call stored Firestore unsubscribe function
    unsubs[query.queryHash]();
    delete unsubs[query.queryHash];
  }
});

// Format Firestore response
function format(response) {
  // Converts doc into object that contains data and `doc.id`
  const formatDoc = (doc) => ({ id: doc.id, ...doc.data() });
  if (response.docs) {
    // Handle a collection of docs
    return response.docs.map(formatDoc);
  } else {
    // Handle a single doc
    return response.exists() ? formatDoc(response) : null;
  }
}

// React Query context provider that wraps our app
export function QueryClientProvider(props) {
  return (
    <QueryClientProviderBase client={client}>
      {props.children}
    </QueryClientProviderBase>
  );
}
