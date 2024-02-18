import { Editor, EditorState, RichUtils } from "draft-js";
import { useState } from "react";
import "draft-js/dist/Draft.css";
import bold from "../assets/bold.svg";
import italic from "../assets/italic.svg";
import underline from "../assets/underline.svg";
import strikethrough from "../assets/strikethrough.svg";


const EditorPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const INLINE_STYLES = [
    { label: "Bold", img: bold, style: "BOLD" },
    { label: "Italic", img: italic, style: "ITALIC" },
    { label: "Underline", img: underline, style: "UNDERLINE" },
    { label: "Strikethrough", img: strikethrough, style: "STRIKETHROUGH" },
  ];

  return (
    <div className="h-full bg-blue-900">
      <nav>
        <ul className="flex justify-center p-5 bg-blue-900">
          {INLINE_STYLES.map((type) => (
            <li key={type.label} className="mr-5">
              <button
                className="text-white bg-blue-500 rounded-md px-3 py-1"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setEditorState(
                    RichUtils.toggleInlineStyle(editorState, type.style)
                  );
                }}
              >
                <img src={type.img} alt={type.label} className="w-5"/>
              </button>
            </li>
          ))}
        </ul>        
      </nav>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-[52em] h-[69.3em] p-[10px] mt-3 mb-10 bg-white border-2 border-gray-300 shadow-lg">
          <Editor editorState={editorState} onChange={setEditorState} />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
