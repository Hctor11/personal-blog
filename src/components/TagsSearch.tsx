import React from "react";
import { TAGS } from "./../util/TAGS";

const TagsSearch = () => {
  return (
    <div className = 'tag-search'>
      {TAGS.map((tag, id) => (
        <button
          className="tag-search-button"
          key={id}
          style={{
            backgroundColor: `${
              tag == TAGS[0]
                ? "#347aeb"
                : tag == TAGS[1]
                ? "#eb34e5"
                : tag == TAGS[2]
                ? "#009930"
                : tag == TAGS[3]
                ? "#eb5f34"
                : "#6234eb"
            }`,
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagsSearch;
