import React from 'react';
import { connect } from 'react-redux';
import { fetchSpeaker } from '../actions';
import { Link } from 'react-router-dom';
import faker from 'faker';
import Rating from './StarRating';

class SpeakerList extends React.Component {
  // Set initail state to an empty string
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }
  // Get all the Speaker when the page gets rendered.
  componentDidMount() {
    this.props.fetchSpeaker();
  }

  // Update the search value
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }
  // Change the speaker property to lower case and
  // the input value to lower case to provent the fillter
  // being case-sensitive.
  // If the input and the speaker property are not equal
  // then it will not be desplayed.
  render() {
    let filterSpeakers = this.props.speaker.filter(speaker => {
      return (
        speaker.title
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1 ||
        speaker.body
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1 
      );
    });

    return (
      <div className="list-page">
        <h1 className="title">Posts List</h1>
        <div className="search-container">
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>
        {/* Map throught all the speaker properties desplay the 
        speakers with the speaker properties specified */}
        {filterSpeakers.map(speaker => {
          return (
            <div className="speaker" key={speaker.id}>
              <img className="profile_img" src={faker.image.avatar()} alt="profile" />
              <h2>{speaker.title}</h2>
              <Link to={"/" + speaker.id}>
                <button className="infoBtn">Post</button>
              </Link>
              <Rating />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { speaker: state.speaker };
};
export default connect(
  mapStateToProps,
  { fetchSpeaker }
)(SpeakerList);
