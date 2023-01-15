import { Link } from "react-router-dom"
import Navbar from "./Navbar";

const NotFound = ({toggleSignedIn}) => {
  return (
    <div className="not-found">
      <Navbar toggleSignedIn={toggleSignedIn}/>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}
 
export default NotFound;