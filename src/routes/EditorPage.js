import { EditorState } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createToolbarPlugin from "@draft-js-plugins/static-toolbar";
import createTextAlignmentPlugin from "@draft-js-plugins/text-alignment";
import "@draft-js-plugins/static-toolbar/lib/plugin.css";
import "@draft-js-plugins/text-alignment/lib/plugin.css";
import { useState } from "react";
import "draft-js/dist/Draft.css";
import {
  BoldButton,
  ItalicButton,
  UnderlineButton,
  BlockquoteButton,
  UnorderedListButton,
  OrderedListButton
} from "@draft-js-plugins/buttons";
import { useRef } from "react";

const toolbarPlugin = createToolbarPlugin();
const textAlignmentPlugin = createTextAlignmentPlugin();

const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin, textAlignmentPlugin];

const EditorPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef(null);

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className="h-full bg-blue-900">
      <div className="flex flex-col-reverse items-center justify-center">
        <div className="w-full max-w-[52em] h-[69.3em] p-[10px] mt-3 mb-10 bg-white border-2 border-gray-300 shadow-lg">
          <Editor
            editorState={editorState}
            onChange={onChange}
            plugins={plugins}
            ref={editor}
          />
        </div>
        {/* TODO -> look for this https://github.com/jpuri/react-draft-wysiwyg */}
        <Toolbar>
          {(externalProps) => (
            <nav className="w-[52em]">
              <BoldButton {...externalProps} />
              <ItalicButton {...externalProps} />
              <UnderlineButton {...externalProps} />
              <BlockquoteButton {...externalProps} />
              <UnorderedListButton {...externalProps} />
              <OrderedListButton {...externalProps} />
              <textAlignmentPlugin.TextAlignment {...externalProps} />
            </nav>
          )}
        </Toolbar>
      </div>
    </div>
  );
};

export default EditorPage;
