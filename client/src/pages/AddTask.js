import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const AddTask = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: ""
  });
  const fetchTasks = async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/task`);
    const data = await res.json();
    setTasks(data);
  };
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/task/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        const updatedTasks = tasks.filter((task) => task._id !== id);
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [tasks, setTasks] = useState();
  useEffect(() => {
    fetchTasks();
  }, []);
  const handleChange = (name) => (e) => {
    const value = e?.target?.value;
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
        fetchTasks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="d-flex flex-row justify-content-around">
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
      <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
      </button>
      </div>
     
      <div className="text-center">
       
        <Home tasks={tasks} handleDelete={handleDelete}></Home>
      </div>
    </div>
  );
};

export default AddTask;
