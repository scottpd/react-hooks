import React from "react";

const UserTable = props => (
  <table className="striped-table">
    <thead>
      <tr>
        <th>Race</th>
        <th>Participant</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.race}</td>
            <td>
              {user.fname} {user.lname}
            </td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
    <tfoot>
      <tr>
      <td colSpan="2"></td>
        <td >
          <button className="button square-button accent-button">Save these details</button>
        </td>
      </tr>
    </tfoot>
  </table>
);

export default UserTable;
