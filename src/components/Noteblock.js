import bin from "../assets/bin.svg";
import { Link } from "react-router-dom";

const Noteblock = ({ title, date, id, user, updateDashboard }) => {
  return (
    <>
      <Link
        to={`/editor/${user}/${id}`}
        className="flex flex-row w-10/12 justify-between items-center"
      >
        <p className="text-xl text-slate-500 ml-5">{title}</p>
        <p className="text-xl text-slate-500">{date}</p>
      </Link>
      <img
        src={bin}
        alt="bin"
        className="w-12 rounded-full hover:bg-slate-200 mr-2"
        onClick={async () => {
          await fetch(
            `https://dolphin-back.onrender.com/dashboard/${user}/delete/${id}`,
            {
              method: "DELETE"
            }
          );
          updateDashboard();
        }}
      />
    </>
  );
};

export default Noteblock;
