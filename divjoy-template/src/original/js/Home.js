import ApplicantList from "./ApplicantList";
// import useFetch from "./useFetch";
import data from "../data/db.json";
import Navbar from "./Navbar";

const Home = ({toggleSignedIn}) => {
  // const { error, isPending, data: applicants } = useFetch('db.json')

  return (
    <div className="home">
      <Navbar toggleSignedIn={toggleSignedIn}/>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> } */}
      { data.applicants && <ApplicantList applicants={data.applicants} /> }
    </div>
  );
}
 
export default Home;
