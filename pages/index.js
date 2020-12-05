import React from "react";
import {
  FileExplorer,
  CodeMirror,
  BrowserPreview,
  SandpackProvider,
} from "react-smooshpack";
import "react-smooshpack/dist/styles.css";

const files = {
  "/index.js": {
    code: "document.body.innerHTML = `<div>Hello</div>`",
  },
};

const dependencies = {};

export default function Page() {
  return (
    <SandpackProvider
      files={files}
      dependencies={dependencies}
      entry="/index.js"
    >
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <FileExplorer style={{ width: 300 }} />
        <CodeMirror style={{ flex: 1 }} />
        <BrowserPreview style={{ flex: 1 }} />
      </div>
    </SandpackProvider>
  );
}
