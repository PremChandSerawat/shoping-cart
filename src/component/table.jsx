import React, {Component} from 'react';
import TableData from './tableData.json'
class Table extends Component {
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">First</th>
            <th scope="col">Midle</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((tabledata,index)=>{
            return(<tr>
              <td>{index+1}</td>
              <td>{tabledata.fnane}</td>
              <td>{tabledata.mname}</td>
              <td>{tabledata.lname}</td>
              </tr>)
          })}
            </tbody>
      </table>

    );
  }
}
export default Table;
