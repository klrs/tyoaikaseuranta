import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Activity = props => (
  <tr>
    <td>{props.activity.username}</td>
    <td>{props.activity.description}</td>
    <td>{props.activity.duration}</td>
    <td>{props.activity.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.activity._id}>muokkaa</Link> | <a href="#" onClick={() => { props.deleteActivity(props.activity._id) }}>poista</a>
    </td>
  </tr>
)

export default class ActivitiesList extends Component {
  constructor(props) {
    super(props);

    this.deleteActivity = this.deleteActivity.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);

    this.state = {
        activities: [],
        users: [],
        chosenUser: null
    };
  }

  componentDidMount() {
    this.getUsers();
    this.getActivities();

  }

  getUsers() {
      axios.get('http://localhost:5000/users/')
          .then(response => {
              if (response.data.length > 0) {
                  let newUsers = response.data.map(user => user.username);
                  newUsers.unshift('Kaikki');
                  this.setState({
                      users: newUsers,
                      chosenUser: newUsers[1]
                  })
              }
          })
          .catch((error) => {
              console.log(error);
          })
  }

  getActivities() {
        axios.get('http://localhost:5000/activities/')
            .then(response => {
                this.setState({ activities: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getActivity(user) {
        axios.get('http://localhost:5000/activities/user/' + user)
            .then(response => {
                this.setState({ activities: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

  deleteActivity(id) {
    axios.delete('http://localhost:5000/activities/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      activities: this.state.activities.filter(el => el._id !== id)
    })
  }

  activityList() {
    return this.state.activities.map(currentactivity => {
      return <Activity activity={currentactivity} deleteActivity={this.deleteActivity} key={currentactivity._id}/>;
    })
  }

  onChangeUser(e) {
      this.setState({
          chosenUser: e.target.value
      });
      if(e.target.value === 'Kaikki') {
          this.getActivities();
      }
      else {
          this.getActivity(e.target.value);
      }

  }

  render() {
    return (
      <div>
        <h3>Kirjatut aktiviteetit</h3>
          <label>Käyttäjä: </label>
          <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUser}
          >
          {
              this.state.users.map(function(user) {
                  return <option
                      key={user}
                      value={user}
                  >
                      {user}
                  </option>;
          })
          }
          </select>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Käyttäjä</th>
              <th>Kuvaus</th>
              <th>Kesto (min.)</th>
              <th>Päiväys</th>
              <th>Toiminnot</th>
            </tr>
          </thead>
          <tbody>
            { this.activityList() }
          </tbody>
        </table>
      </div>
    )
  }
}