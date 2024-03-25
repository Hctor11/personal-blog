import ENTRIES from "../util/entries"
import TAGS from "../util/TAGS"

const Entries = () => {
  return (
    <div className="entries-container">
        {
            ENTRIES.map(({ title, description, url, img, date }, id) => (
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
                </a>
              )).reverse()
        }
    </div>
  )
}

export default Entries