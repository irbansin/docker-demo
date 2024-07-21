import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: ""
  });
  const handleChange = (name) => (e) => {
    const value =  e?.target?.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/task`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: data.name }),
      });
      if (res.ok) {
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
          placeholder="Enter task name"
          type="text"
          name="name"
          autocomplete="off"
          value={data.name}
          onChange={handleChange("name")}
        />
      </div>
     
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTask;
