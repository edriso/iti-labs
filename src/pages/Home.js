import { useState } from "react";
import { Link } from "react-router-dom";
import StudentRegister from "../components/StudentRegister";
import StudentUpdate from "../components/StudentUpdate";

function Home() {
  const [students, setStudents] = useState([
    {
      id: new Date().valueOf(),
      name: "Ahmed Shoqery",
      age: 40,
      email: "test@gmail.com",
    },
  ]);

  const [updateStudent, setUpdateStudent] = useState({});

  const handleDelete = (id) => {
    const newStudents = students.filter((student) => student.id !== id);

    setStudents(newStudents);
  };

  const showUpdate = (student) => {
    setUpdateStudent(student);
  };

  const handleUpdate = (UpdatedStudent) => {
    const newStudents = students.map((student) => {
      if (student.id === UpdatedStudent.id) {
        return UpdatedStudent;
      } else {
        return student;
      }
    });

    setStudents(newStudents);

    setUpdateStudent({});
  };

  return (
    <>
      {updateStudent.id ? (
        <StudentUpdate student={updateStudent} handleUpdate={handleUpdate} />
      ) : (
        <StudentRegister />
      )}

      <hr />

      <div className="mt-3">
        <h4>All Students</h4>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr key={student.id}>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                  <td>
                    <button
                      onClick={() => showUpdate(student)}
                      className="btn btn-outline-success btn-sm mx-2"
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(student.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
