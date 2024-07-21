import { Link } from "react-router-dom";

const Home = ({tasks, handleDelete}) => {

  return (
    <div className="row center">
      {tasks?.map((task) => (
        <div className="card me-3 mt-2 p-0" key={task._id}>
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center">
              <Link
                to={`/edit/${task._id}`}
                style={{ textDecoration: "none" }}
                className="btn-edit"
              >
                Edit
              </Link>            
              <h4 className="text-center">{task.name}</h4>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(task._id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
