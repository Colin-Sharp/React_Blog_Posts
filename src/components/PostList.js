import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import faker from 'faker';
import Rating from './StarRating';

class PostList extends React.Component {
  // Set initail state to an empty string
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }
  // Get all the post when the page gets rendered.
  componentDidMount() {
    this.props.fetchPosts();
  }

  // Update the search value
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }
  // Change the post property to lower case and
  // the input value to lower case to provent the fillter
  // being case-sensitive.
  // If the input and the post property are not equal
  // then it will not be desplayed.
  render() {
    let filterPosts = this.props.post.filter(post => {
      return (
        post.title
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1 ||
        post.body
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1 
      );
    });

    return (
      <div className="list-page">
        <h1 className="title">Post List</h1>
        <div className="search-container">
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>
        {/* Map throught all the post properties desplay the 
        posts with the post properties specified */}
        {filterPosts.map(post => {
          return (
            <div className="post" key={post.id}>
              <img className="profile_img" src={faker.image.avatar()} alt="profile" />
              <h2>{post.title}</h2>
              <Link to={"/" + post.id}>
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
  return { post: state.post };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
