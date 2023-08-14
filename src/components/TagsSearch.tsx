import { useState } from "react";
import TAGS from "./../util/TAGS";
import SortEntries from "./SortEntries";

const TagsSearch = () => {

  const [selectedTag, setSelectedTag] = useState("ALL");

  const handleTagClick = (tag:string) => {
    return setSelectedTag(tag)
  }

  return (
    <div className = 'tag-search'>
      {TAGS.map((tag, id) => (
          <button
          className={`tag-search-button ${tag}`}
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
                : tag == TAGS[4] ? '#6234eb' : '#383838'
            }`,
          }}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
      <p style={{
        color: '#fff', 
        marginTop: '12px',
        filter: 'opacity(0.4)'}}>{selectedTag}</p>
      <SortEntries toSort={selectedTag}/>
    </div>
  );
}

export default TagsSearch;
