import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
        .then(function(res){
          console.log(res.data);
          alert("Käyttäjä lisätty onnituneesti!");
        })
        .catch(function(error){
          if (error.response.status === 400) {
            alert("Käyttäjä on jo olemassa!")
          } else {
            console.log(error)
          }
        });

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Luo uusi käyttäjä</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Käyttäjä: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Luo käyttäjä" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}