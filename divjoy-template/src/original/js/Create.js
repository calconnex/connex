import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [major, setMajor] = useState('');
  const [year, setYear] = useState('');
  const [essay, setEssay] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { first, last, major, year, essay };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input 
          type="text" 
          required 
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <label>Last Name:</label>
        <input
          required
          value={last}
          onChange={(e) => setLast(e.target.value)}
        ></input>
        <label>Major:</label>
        <input
          required
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        ></input>
        <label>Year:</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
        <label>Why XYZ Club:</label>
        <textarea
          required
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
        ></textarea>
        <button>Submit Application</button>
      </form>
    </div>
  );
}
 
export default Create;