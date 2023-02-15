import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  return (
    <>
      <h2>details</h2>
      <p>
        Dynamic parameter is: <span className="text-danger">{id}</span>
      </p>
    </>
  );
}

export default Details;
