import bin from "../assets/bin.svg";

const Noteblock = ({ title, date }) => {
  return (
    <div className="bg-white flex flex-row justify-between items-center w-8/12 rounded-xl mb-5">
      <p className="text-xl text-slate-500 ml-5">{title}</p>
      <div className="flex flex-row justify-between items-center mr-2">
        <p className="text-xl text-slate-500">{date}</p>
        <img src={bin} alt="bin" className="w-12" />
      </div>
    </div>
  );
};

export default Noteblock;
