import React from "react";

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  vGap(height) {
    const divStyle = {
      display: "block",
      width: "100%",
      clear: "both",
      height: height
    };
    return <div style={divStyle} />;
  }

  render() {
    return (
      <div className="note-show-container">
        {this.currNote ? this.currNote.title : "Title"}
      </div>
    );
  }
}

export default NoteShow;
