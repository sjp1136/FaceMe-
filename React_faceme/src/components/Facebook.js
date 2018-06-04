import FacebookLogin from "react-facebook-login";
import React, { Component } from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: "",
    likes: "",
    posts: "",
    first_name: "",
    last_name: "",
    gender: "",
    hometown: ""
  };

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      likes: response.likes.data,
      posts: response.posts.data,
      first_name: response.first_name,
      last_name: response.last_name,
      gender: response.gender,
      hometown: response.hometown.name,
      location: response.location.name,
      photos: response.photos
    });
  };
  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;
    console.log(this.state.likes);
    if (this.state.isLoggedIn) {
      fbContent = (
        <div>
          <link
            rel="stylesheet"
            href="https://bootswatch.com/4/darkly/bootstrap.min.css"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <img src={this.state.picture} alt={this.state.name} />
          <h2> Welcome {this.state.name} </h2>
          <li class="list-group-item">Email: {this.state.email}</li>
          <li class="list-group-item">
            First name: {this.state.first_name} Last name:{" "}
            {this.state.last_name}
          </li>
          <li class="list-group-item">Gender: {this.state.gender} </li>
          <li class="list-group-item">
            Hometown: {this.state.hometown} Location: {this.state.location}
          </li>
          <h2>Liked Pages</h2>
          <ul class="list-group">
            {this.state.likes.map(like => (
              <li class="list-group-item">{like.name}</li>
            ))}
          </ul>
          <h2>Posts</h2>
          <ul class="list-group">
            {this.state.posts.map(message => (
              <li class="list-group-item">{message.message}</li>
            ))}
          </ul>
          <Button bsStyle="success">Show Statistics</Button>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="163741984474907"
          autoLoad={true}
          fields="name,email,picture,birthday,likes,posts,location,first_name,last_name,gender,hometown,photos"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
