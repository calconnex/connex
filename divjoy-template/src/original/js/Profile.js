import Navbar from "./Navbar";
import NotFound from "./NotFound";
import { useAuth } from "../../util/auth";


const Profile = () => {
    const auth = useAuth();
  
    return (
      auth.user ? (
      <div className="profile">
        <Navbar/>
      </div>
      ) : (<NotFound/>)
    );
  }
   
  export default Profile;