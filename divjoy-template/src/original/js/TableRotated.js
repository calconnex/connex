import { Link } from 'react-router-dom';
import '../css/TableRotated.css';

const TableRotated = ({ data, column }) => {
    return (
      <table className="rotated">
        <tbody>
          {column.map((item) => item.display && <TableRow item={item} data={data}/>)}
        </tbody>
      </table>
    )
  }
    
  const TableRow = ({ item, data }) => (
    <tr>
      <th>{item.heading}</th>
      {data.map((dataItem) => { return <td>{dataItem[`${item.value}`]}</td> })}
    </tr>
  )
  
  export default TableRotated