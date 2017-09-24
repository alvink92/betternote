import React from "react";
import TagIndexItem from "./tag_index_item";
import { tagsByFirstLetterThenName } from "../../util/entities_util";

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTags();
  }

  componentWillUnmount() {
    this.props.clearTags();
  }

  tagIndexItems() {
    const formattedTags = tagsByFirstLetterThenName(this.props.tags);
    let sortedLettersArr = Object.keys(formattedTags).sort();

    return sortedLettersArr.map((letter, index) => (
      <div key={index} className="by-letter-container">
        <div className="first-letter">{letter}</div>
        <div className="tag-names-by-letter-container">
          {Object.keys(formattedTags[letter])
            .sort()
            .map(name => (
              <TagIndexItem
                key={formattedTags[letter][name].id}
                tag={formattedTags[letter][name]}
                history={this.props.history}
                updateTag={this.props.updateTag}
                deleteTag={this.props.deleteTag}
              />
            ))}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="tag-index-container">
        <div className="tag-index">{this.tagIndexItems()}</div>
      </div>
    );
  }
}

export default TagIndex;
