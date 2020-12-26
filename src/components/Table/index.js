import React from "react";

function Table({ employeeList, onClick }) {
  return (
    <div className="table-responsive-md" id="employeeTableContainer">
      <table className="table table-hover table-striped">
        <caption className="topCaption">Click the Name header to sort</caption>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th
              scope="col"
              className="headerSortDown"
              onClick={onClick}
              data-value="name"
            >
              Name
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((item, index) => (
            <tr key={index}>
              <td>
                <img alt={item.email} src={item.picture.thumbnail} />
              </td>
              <td>
                {item.name.first} {item.name.last}
              </td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{new Date(item.dob.date).toLocaleDateString("en-US")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
