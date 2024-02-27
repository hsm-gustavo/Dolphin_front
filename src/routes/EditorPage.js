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
  toolbarPlugin
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

const EditorPage = () => {
  return (
    <div className="h-full bg-blue-900 flex flex-col justify-center items-center">
      <div className="w-[52em] h-[69.3em] mt-[80px] bg-white border-2 border-gray-300 shadow-lg p-[10px] mb-10">
        <MDXEditor
          placeholder="Write something here..."
          markdown="Write something here..."
          plugins={[
            toolbarPlugin({
              toolbarContents: () => (
                <>
                  {""}
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <CodeToggle />
                  <BlockTypeSelect />
                  <ListsToggle />
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
          contentEditableClassName="prose lg:prose-xl max-w-none max-h-[69em] overflow-hidden"
        />
      </div>
    </div>
  );
};

export default EditorPage;
