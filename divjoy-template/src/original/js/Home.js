import ApplicantList from "./ApplicantList";
// import useFetch from "./useFetch";
import data from "../data/db.json";
import Navbar from "./Navbar";
import { useAllApplicants } from "../../util/db";

const Home = () => {
  const newData = useAllApplicants();

  return (
    <div className="home">
      <Navbar/>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> } */}
      { newData.data && <ApplicantList applicants={newData.data} /> }
      {/* { data.applicants && <ApplicantList applicants={data.applicants} /> } */}
    </div>
  );
}
 
export default Home;