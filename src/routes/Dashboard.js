import Noteblock from "../components/Noteblock";
import { Link, useNavigate } from "react-router-dom";
import add from "../assets/add.svg";
import { Suspense, useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  const user = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    // é preciso buscar o usuário e suas notas
    const getDashboard = async () => {
      const responseDashboard = await fetch(
        `http://localhost:3000/notes/${user}`
      );
      const jsonData = await responseDashboard.json();
      setNotes(jsonData);
      setIsLoading(false);
    };
    getDashboard();
  }, []);

  const handleCreateNote = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/${user}/new`,
      {
        method: "POST"
      }
    ).then((res) => res.json());
    navigate(`/editor/${user}/new/${response}`);
  };

  return (
    <div className="h-screen bg-blue-900 pt-20 flex flex-col items-center overflow-y-scroll">
      <h1 className="z-[51] absolute top-5 right-5 text-xl text-white">{localStorage.getItem("name")}</h1>
      {isLoading ? (
        <h1 className="text-xl text-white">Loading...</h1>
      ) : (
        <div className="flex flex-row justify-between items-center mb-20 w-8/12">
          <h1 className="text-3xl text-white">Your Documents</h1>
          <Link onClick={handleCreateNote}>
            <button
              className="rounded-full p-2 transition duration-300 ease-in-out bg-black py-2 text-white hover:bg-slate-900"
              title="Create new document"
            >
              <img src={add} alt="add document" className="w-10" />
            </button>
          </Link>
        </div>
      )}
      {!isLoading &&
        notes.length > 0 &&
        notes.map((note) => (
          <Link
            to={`/editor/${user}/${note._id}`}
            className="bg-white flex flex-row justify-between items-center w-8/12 rounded-xl mb-5"
            key={note._id}
          >
            <Noteblock key={note._id} title={note.title} date={note.date} />
          </Link>
        ))}
      {!isLoading && notes.length === 0 && (
        <p className="text-xl text-white">You don't have any documents</p>
      )}
    </div>
  );
};

export default Dashboard;
