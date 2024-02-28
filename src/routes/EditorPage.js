import { useRef, useEffect } from "react";
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
  ButtonWithTooltip
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

const EditorPage = () => {
  const mdxRef = useRef(null);
  const titleRef = useRef(null);

  const handleSave = () => {
    const markdown = mdxRef.current.getMarkdown();
    const title = titleRef.current.value;
  };

  useEffect(() => {
    mdxRef.current.focus();
  }
  , []);

  return (
    <div className="h-full bg-blue-900 flex flex-col justify-center items-center">
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
                  <ButtonWithTooltip onClick={handleSave} title="Save document">
                    <span className="text-xl p-1 select-none">&#128426;</span>
                  </ButtonWithTooltip>
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