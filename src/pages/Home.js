import StudentRegister from "../components/StudentRegister";
import { useState } from "react";

function Home() {
  const [students, setStudents] = useState([]);

  return (
    <>
      <StudentRegister />

      <hr />

      <div className="mt-3">
        <h4>All Students</h4>
      </div>
    </>
  );
}

export default Home;
