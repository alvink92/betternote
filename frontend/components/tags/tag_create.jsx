import React from "react";

class TagCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ tagName: "" });
  }

  render() {
    return (
      <div className="create-container">
        <div className="tag-create-form-container">
          <input value={this.state.tagName} />
        </div>
      </div>
    );
  }
}

export default TagCreate;
