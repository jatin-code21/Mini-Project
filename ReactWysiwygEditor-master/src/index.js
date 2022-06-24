import React, { Component } from 'react';
import { render } from 'react-dom';
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import './App.css'

class EditorContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(), // necessary --> everytime you start the app it will clear the state
    };
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;

    return <div className="editor">
      <Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },

        }}
      />
    </div>
  }
}

const App = () => (
  <div>
    <h2>Smart Text Editor</h2>
    <EditorContainer className="container" />
  </div>
);

render(<App />, document.getElementById('root'));