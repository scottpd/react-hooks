import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = { id: null, race: "", fname: "", lname: "", gender: "", age: "", code: "", idnum: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  
  const handleSelectChange = event => {
    console.log(event.target);
    console.log(event.target.value);
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        console.log(user);
        if (!user.race || !user.fname || !user.lname || !user.gender || !user.age || !user.code) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
    <div className="container">
      <div className="flex-row">
        <div className="flex-small">
          <label>Race:</label>
          <label>
            <input name="race" type="radio" value="10km" checked={user.race === '10km'} onChange={handleInputChange} />
            10km
          </label>
          <label>
            <input name="race" type="radio" value="5km" checked={user.race === '5km'} onChange={handleInputChange}  />
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
            <input name="gender" type="radio" value="Male" checked={user.gender === 'Male'} onChange={handleInputChange}/>
            Male
          </label>
          <label>
            <input name="gender" type="radio" value="Female" checked={user.gender === 'Female'} onChange={handleInputChange}/>
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

      <button className="square-button">Add new entrant</button>
      </div>
    </form>
  );
};

export default AddUserForm;
