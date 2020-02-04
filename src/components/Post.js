import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import faker from 'faker';

class Post extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    // Get the post with the same id that is in the url.
  }
  render() {
    let id = this.props.match.params.post_id;
    let filterPosts = this.props.post.filter(post => {
      return (
        Number(post.id) === Number(id)
      );
    });
    return (
      filterPosts.map(post => {
        return (
          <div className="list-page" key={post.id}>
            <h1 className="title">Post</h1>
            <div className="post" >
              <img src={faker.image.avatar()} alt="avatar"  className="profile_img" />
              <h2>Title</h2>
              <h2>{post.title}</h2>
              <hr />
              <h2>Post</h2>
              <p>{post.body}</p>
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
  return { post: state.post };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Post);
