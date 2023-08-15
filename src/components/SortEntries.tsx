import ENTRIES from "../util/entries";
import TAGS from "../util/TAGS";
import "../styles/styles.sass";

interface Props {
  toSort: string;
}

const SortEntries = (props: Props) => {
  let SORTED_ENTRIES = ENTRIES.filter((entry) => entry.tag === props.toSort);

  return (
    <div className="entries-container">
      {props.toSort == "ALL"
        ? ENTRIES.map(({ title, description, url, img, date, tag }, id) => (
            <a
              key={id}
              href={`/personal-blog${url}`}
              className="all-entry"
              style={{
                backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.7) , rgba(0, 0, 0, 1)), url(/personal-blog${img})`,
                backgroundSize: 'cover'
              }}
            >
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="date-entry">{date}</span>
              <span
                className="all-tag-entry"
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
                      : tag == TAGS[4]
                      ? "#6234eb"
                      : "#383838"
                  }`,
                }}
              >
                {tag}
              </span>
            </a>
          )).reverse()
        : (SORTED_ENTRIES.length == 0) ? <h3>No entries added yet :(</h3> : SORTED_ENTRIES.map(
            ({ title, description, url, img, date, tag }, id) => (
              <a
                key={id}
                href={`/personal-blog${url}`}
                className="all-entry"
                style={{
                  backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.7) , rgba(0, 0, 0, 1)), url(/personal-blog${img})`,
                  backgroundSize: 'cover'
                }}
              >
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="date-entry">{date}</span>
                <span
                  className="all-tag-entry"
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
                        : tag == TAGS[4]
                        ? "#6234eb"
                        : "#383838"
                    }`,
                  }}
                >
                  {tag}
                </span>
              </a>
            )
          ).reverse()}
    </div>
  );
};

export default SortEntries;
