import { useParams } from "react-router";

function JoinRetro() {

  const { id } = useParams();
  return (
    <div>
      {id}
    </div>
  );
}

export default JoinRetro;