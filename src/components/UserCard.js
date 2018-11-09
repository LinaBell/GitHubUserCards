import React from 'react'
import UserSearch from './UserSearch'
import UserProfile from './UserProfile'

const API = 'https://api.github.com/users'

export default class UserCard extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: 'linabell',
      name:'',
      avatar:'',
      location:'',
      repos:'',
      followers: '',
      following:'',
      homeUrl:'',
      notFound:''
    }
  }

  fetchProfile(username) { 
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }

  componentDidMount() {
    this.fetchProfile(this.state.username);
  }

  render() {
    let {
      username,
      name,
      avatar,
      location,
      repos,
      followers,
      following,
      homeUrl,
      notFound 
    } = this.state

    return (
      <div>
         <section className="card-container">
          <UserSearch fetchProfile={this.fetchProfile.bind(this)}/>
          <UserProfile 
            homeUrl={homeUrl} 
            name={name} 
            username={username} 
            avatar={avatar}
            location={location}
            repos={repos}
            followers={followers}
            following={following}
            notFound={notFound}
          />
         </section>
      </div>
    )
  }
}