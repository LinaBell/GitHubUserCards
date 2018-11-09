import React from 'react'
import PropTypes from 'prop-types'

export default class Usercard extends React.PureComponent {
  render() {
    let data = this.props;
    let followers = `${data.homeUrl}/followers`;
    let repositories = `${data.homeUrl}?tab=repositories`;
    let following = `${data.homeUrl}/following`;
    console.log(data)

    if (data.notFound === 'Not Found') {
      return (
         <div className="notfound">
            <h2>Oops !!!</h2>
            <p>This UserName is not valide. Please try again! </p>
         </div>
      )
    } 
      
    return (
      <div className="card">
        <div className="card-details">
          <a href={data.homeUrl} target="_blank" title={data.name || data.username}>
            <img src={data.avatar} alt={data.username}/>
          </a>
          <h2><a href={data.homeUrl} title={data.username} target="_blank">{data.name || data.username}</a></h2>
          <h3>{data.location || 'Home is where I rest my laptop'}</h3>
        </div>
        <div className="card-footer">
          <ul>
              <li>
                <a href={followers} target="_blank" title="Number Of Followers"><i>{data.followers}</i><span>Followers</span></a>
              </li>
              <li>
                <a href={repositories} target="_blank" title="Number Of Repositoriy"><i>{data.repos}</i><span>Repositoriy</span></a>
              </li>
              <li>
                <a href={following} target="_blank" title="Number Of Following"><i>{data.following}</i><span>Following</span></a>
              </li>
          </ul>
        </div>
      </div>
    )
  }
}

Usercard.propTypes = {
  username: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  location: PropTypes.string,
  repos: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
  homeUrl: PropTypes.string,
  notFound: PropTypes.string
}

Usercard.defaultProps = {
  username: '',
  name: '',
  avatar: '',
  location: '',
  repos: 0,
  followers: 0,
  following: 0,
  homeUrl: '',
  notFound: ''
}
