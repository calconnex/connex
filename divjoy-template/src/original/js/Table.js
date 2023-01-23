import { Link } from 'react-router-dom';
// import { useAuth } from './../util/auth.js';
// import { useItemsByOwner } from './../util/db.js';

import '../css/Table.css';

const Table = ({ data, column }) => {
  //const auth = useAuth();
  // const uid = auth.user ? auth.user.uid : undefined;
  // const { data: items, status } = useItemsByOwner(uid);
  
  return (
      <table class="table">
        <thead>
          <tr>
            {column.map((item) => item.display && <TableHeadItem item={item}/>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => <TableRow item={item} column={column}/>)}
        </tbody>
      </table>
    )
  }
  
  const TableHeadItem = ({ item }) => (<th>{item.heading}</th>)
  
  const TableRow = ({ item, column }) => (
    <tr>
      <Link to={`/applicants/${item.id}`}>
        {column.map((columnItem) => {
          return columnItem.display && <td>{item[`${columnItem.value}`]}</td>
        })}
      </Link>
    </tr>
  )
  
  export default Table