import { useRef, useEffect, useState } from "react";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  linkPlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CodeToggle,
  ListsToggle,
  toolbarPlugin,
  InsertThematicBreak,
  Separator,
  ButtonWithTooltip,
  ButtonOrDropdownButton
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import leftarrow from "../assets/leftarrow.svg";

const EditorPage = () => {
  const id = useParams().id;

  const [disabled, setDisabled] = useState(false);

  const user = localStorage.getItem("username");

  const mdxRef = useRef(null);
  const titleRef = useRef(null);

  const handleSave = async () => {
    setDisabled(true);
    const content = mdxRef.current.getMarkdown();
    const title = titleRef.current.value;

    return await fetch(`https://dolphin-back.onrender.com/notes/${user}/save`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: title, content: content, noteId: id })
    }).then((res) =>
      res.status === 200
        ? Swal.fire({
            icon: "success",
            title: "Success",
            text: "Document saved",
            timer: 2000,
            confirmButtonColor: "rgb(59, 130, 249)"
          }).then((value) => setDisabled(false))
        : Swal.fire({
            icon: "error",
            title: "Error",
            text: "Could not save document",
            timer: 2000
          }).then((value) => setDisabled(false))
    );
  };

  useEffect(() => {
    mdxRef.current.focus();
    if (!window.location.pathname.includes("new")) {
      setDisabled(true);
      const getNote = async () => {
        return await fetch(
          `https://dolphin-back.onrender.com/notes/${user}/${id}`
        )
          .then((res) => res.json())
          .then((data) => {
            mdxRef.current.setMarkdown(data.content);
            titleRef.current.value = data.title;
            setDisabled(false);
          });
      };
      getNote();
    }
  }, [id, user]);

  return (
    <div className="h-full bg-blue-900 flex flex-col justify-center items-center">
      <h1 className="z-[51] absolute top-3 right-5 text-xl text-white m-auto">
        {localStorage.getItem("name")}
      </h1>
      <Link to={`/dashboard/${user}`} className="absolute top-24 left-10">
        <button className="rounded-full transition duration-300 ease-in-out bg-black text-white hover:bg-slate-900" title="Return to Dashboard">
          <img src={leftarrow} alt="return to dashboard" className="w-10" />
        </button>
      </Link>
      <input
        type="text"
        className="text-4xl text-white text-center font-bold mt-20 bg-transparent border-none hover:bg-blue-800 transition-all py-2 rounded-xl placeholder:text-white"
        defaultValue={"Document Title"}
        ref={titleRef}
      />
      <div className="w-[52em] min-h-[69.3em] mt-10 bg-white border-2 border-gray-300 shadow-lg p-[10px] mb-10 rounded-md">
        <MDXEditor
          placeholder="Write something here..."
          markdown="Write something here..."
          plugins={[
            toolbarPlugin({
              toolbarContents: () => (
                <>
                  {""}
                  <UndoRedo />
                  <Separator />
                  <BoldItalicUnderlineToggles />
                  <Separator />
                  <CodeToggle />
                  <InsertThematicBreak />
                  <ListsToggle />
                  <BlockTypeSelect />
                  <Separator />
                  <ButtonWithTooltip
                    onClick={handleSave}
                    title="Save document"
                    disabled={disabled}
                  >
                    <span className="text-xl p-1 select-none">&#128426;</span>
                  </ButtonWithTooltip>
                  <ButtonOrDropdownButton
                    items={[
                      { label: "PDF (.pdf)", onClick: handleSave },
                      { label: "OpenDocument (.odt)", onClick: handleSave },
                      { label: "Word Document (.docx)", onClick: handleSave }
                    ]}
                    title="Export document as..."
                  >
                    <span className="p-1 select-none">Export as...</span>
                  </ButtonOrDropdownButton>
                </>
              )
            }),
            headingsPlugin(),
            listsPlugin(),
            linkPlugin(),
            quotePlugin(),
            thematicBreakPlugin(),
            markdownShortcutPlugin()
          ]}
          className="w-full h-full"
          contentEditableClassName="prose lg:prose-xl max-w-none max-h-[69em] overflow-y-auto"
          ref={mdxRef}
        />
      </div>
    </div>
  );
};

export default EditorPage;
