import { useEffect, useState } from "react";

const Done = () => {
  const [done, setDone] = useState([]);
  useEffect(() => {
    fetch("https://thawing-island-05654.herokuapp.com/completed")
      .then((res) => res.json())
      .then((data) => setDone(data));
  }, [done]);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">All Finished Task</h1>
      <div className="overflow-x-auto">
        <table className="table w-full my-6">
          <thead>
            <tr>
              <th>Completed</th>
              <th>Date</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {done.map((tasks, index) => {
              const { _id, date, task } = tasks;
              return (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>{date}</td>
                  <td>{task}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Done;
