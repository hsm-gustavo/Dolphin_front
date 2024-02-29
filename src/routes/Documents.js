import { useState } from "react";
import { Link } from "react-router-dom";

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  /* fetch and add list of documents to usestate */

  return (
    <div className="h-screen bg-blue-900 flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl font-bold mb-3">Your documents</h1>
      {documents.length > 0 ? (
        <ul>
          {documents.map((document) => (
            <li key={document.id}>{document.title}</li>
          ))}
        </ul>
      ) : (
        <p>No documents found</p>
      )}
      <button className="rounded-lg bg-white p-2 text-black transition duration-300 ease-in-out hover:bg-slate-200">
        <Link to={"/editor"}>Create a new document</Link>
      </button>
    </div>
  );
};

export default Documents;
