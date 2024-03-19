import Noteblock from "../components/Noteblock";
import { Link, useNavigate } from "react-router-dom";
import add from "../assets/add.svg";
import bin from "../assets/bin.svg";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  const user = localStorage.getItem("username");
  const navigate = useNavigate();

  const getDashboard = async () => {
    const responseDashboard = await fetch(
      `http://localhost:3001/notes/${user}`
    );
    const jsonData = await responseDashboard.json();
    setNotes(jsonData);
    setIsLoading(false);
  };

  const updateDashboard = async () => {
    setIsLoading(true);
    await getDashboard();
  };

  useEffect(() => {
    const fetchDashboard = async () => {
      const responseDashboard = await fetch(
        `http://localhost:3001/notes/${user}`
      );
      const jsonData = await responseDashboard.json();
      setNotes(jsonData);
      setIsLoading(false);
    };
    fetchDashboard();
  }, [user]);

  const handleCreateNote = async () => {
    return await fetch(
      `http://localhost:3001/dashboard/${user}/new`,
      {
        method: "POST"
      }
    ).then((res) => res.json()).then((data) => navigate(`/editor/${user}/new/${data}`));
  };

  return (
    <div className="h-screen bg-blue-900 pt-20 flex flex-col items-center overflow-y-scroll">
      <h1 className="z-[51] absolute top-5 right-5 text-xl text-white">
        {localStorage.getItem("name")}
      </h1>
      {isLoading ? (
        <div className="flex flex-row justify-between items-center mb-20 w-8/12 animate-pulse">
          <span className="bg-gray-200 rounded-lg">
            <h1 className="text-3xl invisible">Your Documents</h1>
          </span>
          <span>
            <div
              className="rounded-full p-2 bg-gray-200 py-2"
              title="Create new document"
            >
              <img src={add} alt="add document" className="w-10 invisible" />
            </div>
          </span>
        </div>
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
          <div
            className="bg-white flex flex-row justify-between items-center w-8/12 rounded-xl mb-5"
            key={note._id}
          >
            <Noteblock
              key={note._id}
              title={note.title}
              date={note.date}
              id={note._id}
              user={user}
              updateDashboard={updateDashboard}
            />
          </div>
        ))}
      {isLoading && (
        <>
          <div className="bg-gray-200 flex flex-row justify-between items-center w-8/12 rounded-xl mb-5 animate-pulse">
            <>
              <div className="flex flex-row w-10/12 justify-between items-center">
                <p className="text-xl ml-5 invisible">Text</p>
                <p className="text-xl invisible">Date</p>
              </div>
              <img
                src={bin}
                alt="bin"
                className="w-12 rounded-full mr-2 invisible"
              />
            </>
          </div>
          <div className="bg-gray-200 flex flex-row justify-between items-center w-8/12 rounded-xl mb-5 animate-pulse">
            <>
              <div className="flex flex-row w-10/12 justify-between items-center">
                <p className="text-xl ml-5 invisible">Text</p>
                <p className="text-xl invisible">Date</p>
              </div>
              <img
                src={bin}
                alt="bin"
                className="w-12 rounded-full mr-2 invisible"
              />
            </>
          </div>
          <div className="bg-gray-200 flex flex-row justify-between items-center w-8/12 rounded-xl mb-5 animate-pulse">
            <>
              <div className="flex flex-row w-10/12 justify-between items-center">
                <p className="text-xl ml-5 invisible">Text</p>
                <p className="text-xl invisible">Date</p>
              </div>
              <img
                src={bin}
                alt="bin"
                className="w-12 rounded-full mr-2 invisible"
              />
            </>
          </div>
        </>
      )}
      {!isLoading && notes.length === 0 && (
        <p className="text-xl text-white">You don't have any documents</p>
      )}
    </div>
  );
};

export default Dashboard;
