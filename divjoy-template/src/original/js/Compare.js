import ApplicantCompare from "./ApplicantCompare";
// import useFetch from "./useFetch";
import data from "../data/db.json";
import Navbar from "./Navbar";
import { useAllApplicants } from "../../util/db";
import { useAuth } from "../../util/auth";
import NotFound from "./NotFound";

const Compare = () => {
  // const { error, isPending, data: applicants } = useFetch('http://localhost:8000/applicants')
  const newData = useAllApplicants();
  const auth = useAuth();

  return (
    auth.user ? (<div className="compare">
      <Navbar/>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> } */}
      { data.applicants && <ApplicantCompare applicants={newData.data} /> }
    </div>
    ) : (<NotFound/>)
  );
}
 
export default Compare;
