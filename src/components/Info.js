import React from "react";
import { Link } from "react-router-dom";
import { fetchSpeaker } from "../actions";
import { connect } from "react-redux";

class Info extends React.Component {
  // set initial stat null
  state = {
    info: null
  };
  componentDidMount() {
    this.props.fetchSpeaker();
    // Get the speaker with the same id that is in the url.
  }
  render() {
    let id = this.props.match.params.info_id;
    let filterSpeakers = this.props.speaker.filter(speaker => {
      return (
       Number(speaker.id)  === Number(id)
      );
    });
    return (
      filterSpeakers.map(speaker => {
        return (
          <div className="list-page" key={speaker.id}>
            <h1 className="title">Post</h1>
            <div className="speaker" >
              <h3>Title</h3>
              <h2>{speaker.title}</h2>
              <hr />
              <h3>Post</h3>
              <p>{speaker.body}</p>
              <hr />
              <Link to="/">
                <button className="homeBtn">Back</button>
              </Link>
            </div>
          </div>
        );
      })
    )
  }
}

const mapStateToProps = state => {
  return { speaker: state.speaker };
};
export default connect(
  mapStateToProps,
  { fetchSpeaker }
)(Info);
