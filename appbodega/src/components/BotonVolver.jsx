import { useNavigate } from "react-router-dom";

export const BotonVolver = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)} className="btn btn-success m-1">
        Volver
      </button>
    </>
  );
};
