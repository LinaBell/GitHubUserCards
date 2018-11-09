import React from 'react'
import PropTypes from 'prop-types'

export default class UserSearch extends React.PureComponent {
	handleForm(e) {
		e.preventDefault();
		let username = this.refs.username.value;
		this.props.fetchProfile(username);
		this.refs.username.value = '';
	}

	render() {
		return (
			<div className="search-box">
				<form onSubmit={this.handleForm.bind(this)}>
					<label>
						<input type="search" ref="username" placeholder="Type Username + Enter" />
					</label>
				</form>
			</div>
		);
	}
}

UserSearch.propTypes = {
  fetchProfile: PropTypes.func.isRequired
}