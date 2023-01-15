import ApplicantCompare from "./ApplicantCompare";
// import useFetch from "./useFetch";
import data from "../data/db.json";
import Navbar from "./Navbar";

const Compare = ({toggleSignedIn}) => {
  // const { error, isPending, data: applicants } = useFetch('http://localhost:8000/applicants')

  return (
    <div className="compare">
      <Navbar toggleSignedIn={toggleSignedIn}/>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> } */}
      { data.applicants && <ApplicantCompare applicants={data.applicants} /> }
    </div>
  );
}
 
export default Compare;
