import { useState } from "react";

function StudentUpdate({ student, handleUpdate }) {
  const [selectedStudent, setSelectedStudent] = useState(student);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdate(selectedStudent);
  };

  return (
    <>
      <h4>Update student</h4>

      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="form-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="form-name"
            value={selectedStudent.name}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, name: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="form-age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="form-age"
            value={selectedStudent.age}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, age: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="form-email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="form-email"
            value={selectedStudent.email}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, email: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="btn btn-outline-success"
          onClick={handleSubmit}
        >
          Update
        </button>
      </form>
    </>
  );
}

export default StudentUpdate;
