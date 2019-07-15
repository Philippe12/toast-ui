// deps for editor
require("codemirror/lib/codemirror.css"); // codemirror
require("tui-editor/dist/tui-editor.css"); // editor ui
require("tui-editor/dist/tui-editor-contents.css"); // editor content
require("highlight.js/styles/github.css"); // code block highlight

var Editor = require("tui-editor");

var editor = new Editor({
  el: document.querySelector("#editSection"),
  initialEditType: "markdown",
  previewStyle: "vertical",
  height: "100%",
  exts: ['table', 'uml',{
          name: 'chart',
          minWidth: 100,
          maxWidth: 600,
          minHeight: 100,
          maxHeight: 300
        }]
});
