import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditTask = ({ match }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const taskid = pathname.substring(pathname.lastIndexOf("/") + 1);

  const [data, setData] = useState({
    name: ""
  });
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/task/${taskid}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleChange = (name) => (e) => {
    const value =  e?.target?.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/task/${taskid}`,
        {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: data?.name }),
        }
      );
      if (res.ok) {
        setData({ name: "" });
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
      </div>
     
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditTask;
