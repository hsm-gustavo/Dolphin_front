import { EditorState } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createToolbarPlugin from "@draft-js-plugins/static-toolbar";
import createTextAlignmentPlugin from "@draft-js-plugins/text-alignment";
import { useState } from "react";
import "draft-js/dist/Draft.css";
import {
  BoldButton,
  ItalicButton,
  UnderlineButton,
  UnorderedListButton,
  OrderedListButton
} from "@draft-js-plugins/buttons";
import alignmentStyles from "../styles/alignmentStyles.module.css";
import { useRef } from "react";

const textAlignmentPlugin = createTextAlignmentPlugin({
  theme: { alignmentStyles }
});
const toolbarPlugin = createToolbarPlugin({
  theme: {
    buttonStyles: {
      button:
        "flex flex-row px-1 py-1 items-center justify-center text-white border-gray-600 fill-gray-400 hover:bg-gray-300",
      active: "fill-slate-950"
    },
    toolbarStyles: {
      toolbar: "flex flex-wrap shadow-md bg-gray-200 w-[52em]"
    }
  }
});

const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin, textAlignmentPlugin];

const EditorPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef(null);

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className="h-full bg-blue-900 flex flex-col justify-center items-center fill-">
      <div className="flex flex-col-reverse items-center justify-center pt-[55px]">
        <div className="w-full max-w-[52em] h-[69.3em] p-[10px] mt-3 mb-10 bg-white border-2 border-gray-300 shadow-lg">
          <Editor
            editorState={editorState}
            onChange={onChange}
            plugins={plugins}
            ref={editor}
            autoCapitalize="sentences"
            placeholder="Write something here..."
            stripPastedStyles={true}
          />
        </div>

        <Toolbar>
          {(externalProps) => (
            <div className="flex flex-row">
              <div className="flex flex-row divide-x-2 divide-blue-900">
                <BoldButton {...externalProps} />
                <ItalicButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <UnorderedListButton {...externalProps} />
                <OrderedListButton {...externalProps} />
              </div>
              <span className="px-2 bg-blue-900"></span>
              <div className="flex flex-row divide-x-2 divide-blue-900">
                <textAlignmentPlugin.TextAlignment {...externalProps} />
              </div>
            </div>
          )}
        </Toolbar>
      </div>
    </div>
  );
};

export default EditorPage;
