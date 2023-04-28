import { useState, useRef } from 'react'
import Editor from "@monaco-editor/react"
import PizzaForm from './PizzaForm'

const files = {
  "script.json": {
    name: "script.json",
    language: "json",
    value: "Here is some json text"
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<div> </div>"
  }
}

function JSONEditor() {
  const [fileName, setFileName] = useState("script.json");
  const [jsonData, setJsonData] = useState(null);
  const editorRef = useRef(null);
  const file = files[fileName];
  
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function getEditorValue() {
    const jsonData = JSON.parse(editorRef.current.getValue());
    setJsonData(jsonData);
  }

  return (
    <div className="App">
      <button onClick={() => setFileName("script.json")}>
        Render-JSON
      </button>
      <button onClick={getEditorValue}>
        Parse-JSON
      </button>
      {jsonData && <PizzaForm jsonData={jsonData} />}
      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"                                                           
        onMount={handleEditorDidMount}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </div>
  )
}

export default JSONEditor;
