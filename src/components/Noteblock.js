import bin from "../assets/bin.svg";

const Noteblock = ({ title, date }) => {
  return (
    <>
      <p className="text-xl text-slate-500 ml-5">{title}</p>
      <div className="flex flex-row justify-between items-center mr-2">
        <p className="text-xl text-slate-500">{date}</p>
        <img src={bin} alt="bin" className="w-12" />
      </div>
    </>
  );
};

export default Noteblock;
