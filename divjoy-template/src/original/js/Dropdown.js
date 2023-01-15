import "../css/Dropdown.css";

const Dropdown = ({column, id, label}) => {
    return ( 
        <div className="dropdown">
            <div className="title">
                {label}
            </div>
            <select name="selectList" id={id}>
                <option value="none">--select one--</option>
                {column.map((item) => <option value={item.heading}>{item.heading}</option>)}
            </select>
        </div>
    );
}
 
export default Dropdown;