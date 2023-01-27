import ApplicantList from "./ApplicantList";
import Navbar from "./Navbar";
import { useAllApplicants, useAllColumns, useAllURMApplicants, useAllURMColumns } from "../../util/db";
import { useAuth } from "../../util/auth";
import NotFound from "./NotFound";

const Home = () => {
  const newData = useAllURMApplicants();
  const column = useAllURMColumns();
  const auth = useAuth();
  console.log(newData.data);

  return (
    auth.user ? (
    <div className="home">
      <Navbar/>
      { newData.data && column.data && <ApplicantList applicants={newData.data} column={column.data}/> }
    </div>
    ) : (<NotFound/>)
  );
}
 
export default Home;