import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  const usersData = [
    { id: 1, race: "10km", fname: "Tania", lname: "Harding", gender: "Female", age: "33", code: "504", idnum: "" },
    { id: 2, race: "10km", fname: "Paul", lname: "Scott", gender: "Male", age: "45", code: "1554", idnum: "7212295403087" },
    { id: 3, race: "5km", fname: "Mark", lname: "Turner", gender: "Male", age: "40", code: "8632", idnum: ""}
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, race: "", fname: "", lname: "", gender: "", age: "", code: "", idnum: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);
    
    setUsers(users.filter(user => user.id !== id));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, race: user.race, fname: user.fname, lname: user.lname, gender: user.gender, age: user.age, code: user.code, idnum: user.idnum });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h2>Participant Details</h2>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit participant</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h3>Add participant</h3>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h3>Details</h3>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
