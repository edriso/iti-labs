import { useState } from "react";

function StudentRegister({ handleAddStudent }) {
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newStudent.name.length < 3) {
      return setNameError(true);
    }
    setNameError(false);

    if (!(newStudent.age > 20 && newStudent.age < 40)) {
      return setAgeError(true);
    }
    setAgeError(false);

    if (!validateEmail(newStudent.email)) {
      return setEmailError(true);
    }
    setEmailError(false);

    newStudent.id = new Date().valueOf();

    handleAddStudent(newStudent);

    alert(`Welcome on board, ${newStudent.name}!`);

    setNewStudent({
      name: "",
      age: "",
      email: "",
    });
  };

  return (
    <>
      <h4>Add new student</h4>

      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="form-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="form-name"
            value={newStudent.name}
            onChange={(e) =>
              setNewStudent({ ...newStudent, name: e.target.value })
            }
          />
          {nameError && (
            <div className="form-text text-danger">
              Name must be at least 3 characters.
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="form-age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="form-age"
            value={newStudent.age}
            onChange={(e) =>
              setNewStudent({ ...newStudent, age: e.target.value })
            }
          />
          {ageError && (
            <div className="form-text text-danger">
              Age must be greater than 20, and less than 40.
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="form-email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="form-email"
            value={newStudent.email}
            onChange={(e) =>
              setNewStudent({ ...newStudent, email: e.target.value })
            }
          />
          {emailError && (
            <div className="form-text text-danger">
              Please provide a valid email.
            </div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default StudentRegister;
