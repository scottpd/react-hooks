import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [props]
  );

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
    <div className="container">
      <div className="flex-row">
        <div className="flex-small">
          <label>Race:</label>
          <label>
            <input type="radio" name="race" value="10km" />
            10km
          </label>
          <label>
            <input type="radio" name="race" value="5km" />
            5km
          </label>
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-small">
          <label>Firstname</label>
          <input
            type="text"
            name="fname"
            value={user.fname}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-small">
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={user.lname}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-small">
          <label>Gender:</label>
          <label>
            <input type="radio" name="gender" value="Male" />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" />
            Female
          </label>
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-small">
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={user.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-small">
          <label>Timing chip number</label>
          <input
            type="text"
            name="code"
            value={user.code}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-small">
          <label>ID / Passport Nr. (For Vitality points)</label>
          <input
            type="text"
            name="idnum"
            value={user.idnum}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button className="square-button">Update entrant</button>
      &nbsp;
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button square-button"
      >
        Cancel
      </button>
      </div>
    </form>
  );
};

export default EditUserForm;
