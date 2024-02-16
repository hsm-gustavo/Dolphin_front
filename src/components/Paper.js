import { useState } from "react";

const Paper = () => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.innerHTML);
  };

  return (
    <div className="h-[73.5em] w-[52em] p-[1.6em] m-auto">
      <div
        className="min-h-[69.3em] border-[1px] border-black p-[1.6em] bg-white"
        contentEditable
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(e) => handleChange}
      />
    </div>
  );
};

export default Paper;
