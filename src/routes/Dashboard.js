import Noteblock from "../components/Noteblock";
import { Link } from "react-router-dom";
import add from "../assets/add.svg";
import { useEffect } from "react";

const Dashboard = () => {
  const user = localStorage.getItem("username");

  const usernotes = [
    { id: 1, title: "Teste1", date: "13/03/2024" },
    { id: 2, title: "Moby Dick", date: "13/03/2024" },
    { id: 3, title: "draft", date: "13/03/2024" },
    { id: 4, title: "lista de afazeres", date: "13/03/2024" },
    { id: 5, title: "importante", date: "13/03/2024" },
    { id: 6, title: "note_test", date: "13/03/2024" },
    { id: 7, title: "aaaaaa", date: "13/03/2024" },
    { id: 8, title: "aaababababbaa", date: "13/03/2024" }
  ]; //Get notes id from api

  useEffect(() => {
    // é preciso buscar o usuário e suas notas
    const getDashboard = async () => {
      const responseDashboard = await fetch(
        `http://localhost:3000/dashboard/${user}`
      );
      const jsonData = await responseDashboard.json();
      console.log("------------------------------------");
      console.log(jsonData);

      // dashboard doesnt return notes yet
    };
    getDashboard();
  });

  const handleCreateNote = async () => {
    return await fetch(`http://localhost:3000/dashboard/${user}/new`, {
      method: "POST"
    });
  };

  return (
    <div className="h-screen bg-blue-900 pt-20 flex flex-col items-center overflow-y-scroll">
      <div className="flex flex-row justify-between items-center mb-20 w-8/12">
        <h1 className="text-3xl text-white">Your Documents</h1>
        <Link to={`/editor/${user}/new`} onClick={handleCreateNote}>
          <button
            className="rounded-full p-2 transition duration-300 ease-in-out bg-black py-2 text-white hover:bg-slate-900"
            title="Create new document"
          >
            <img src={add} alt="add document" className="w-10" />
          </button>
        </Link>
      </div>
      {/* Every note is a react router dom link to their editor */}
      {usernotes.length > 0 ? (
        usernotes.map((note) => (
          <Noteblock key={note.id} title={note.title} date={note.date} />
        ))
      ) : (
        <p className="text-xl text-white">You don't have any documents</p>
      )}
    </div>
  );
};

export default Dashboard;
