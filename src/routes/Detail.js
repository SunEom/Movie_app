import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const { title, poster, summary, genres, year, yt_link } = location.state;
      console.log(yt_link);
      return (
        <section className="detail">
          <div className="detail__flex__1">
            <img src={poster} alt={title} title={title}></img>
          </div>
          <div className="detail__flex__2">
            <h2 className="detail__title">Title : {title}</h2>
            <div className="detail__year">Year : {year}</div>
            <ul className="detail__genres">
              Genres :
              {genres.map((genre, index) => (
                <li key={index} className="detail__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <div className="detail__summary">Summary: {summary}</div>
            {yt_link.localeCompare('https://www.youtube.com/watch?v=') ===
            0 ? null : (
              <span className="detail__trailer">
                Watch Trailer :
                <a
                  className="detail__yt_link"
                  href={yt_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go
                </a>
              </span>
            )}
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

// ({
//   location: {
//     state: { title, year, summary, poster, genres },
//   },
// }) {
//   console.log(title, year, summary, poster, genres);
//   return <span>hello</span>;
// }

export default Detail;
