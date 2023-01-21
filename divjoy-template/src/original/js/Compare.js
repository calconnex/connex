import ApplicantCompare from "./ApplicantCompare";
// import useFetch from "./useFetch";
import data from "../data/db.json";
import Navbar from "./Navbar";
import { useAllApplicants } from "../../util/db";

const Compare = () => {
  // const { error, isPending, data: applicants } = useFetch('http://localhost:8000/applicants')
  const newData = useAllApplicants();

  return (
    <div className="compare">
      <Navbar/>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> } */}
      { data.applicants && <ApplicantCompare applicants={newData.data} /> }
    </div>
  );
}
 
export default Compare;
