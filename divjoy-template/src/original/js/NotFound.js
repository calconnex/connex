import { Link } from "react-router-dom"
import Navbar from "./Navbar";

const NotFound = () => {
  return (
    <div className="not-found">
      <Navbar/>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}
 
export default NotFound;