import ApplicantList from "./ApplicantList";
import Navbar from "./Navbar";
import { useAllApplicants, useAllColumns } from "../../util/db";

const Home = () => {
  const newData = useAllApplicants();
  const column = useAllColumns();

  return (
    <div className="home">
      <Navbar/>
      { newData.data && column.data && <ApplicantList applicants={newData.data} column={column.data}/> }
    </div>
  );
}
 
export default Home;