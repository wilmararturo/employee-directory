import React from "react";

function Table(props) {
  return (
    <div className="table-responsive-md" id="employeeTableContainer">
      <table className="table table-striped">
        <caption>List of users</caption>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {props.employeeList.map((item, index) => (
            <tr key={index}>
              <td>
                <img alt={item.email} src={item.picture.thumbnail} />
              </td>
              <td>
                {item.name.first} {item.name.last}
              </td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.dob.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
