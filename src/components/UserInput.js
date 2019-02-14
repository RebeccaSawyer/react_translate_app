import React, { Component } from 'react';


	const styles = {
		border: '2px solid blue'
	};

	class UserInput extends Component {
		constructor(props) {
			super(props);
			this.state = {
				word: ''
			}

		this.onChange = this.onChange.bind(this)
		this.grabWordFunction = this.grabWordFunction.bind(this)
		}

	onChange (event) {
    this.setState({
      word: event.target.value
    });
  	}

  grabWordFunction() {
  	this.props.translate(this.state.word);
  }

  render () {
  	return (
  	<div>
	<input className="input" type="text" style={styles}
	onChange={this.onChange}
	>
	</input>
	<button onClick={this.grabWordFunction}>Translate</button>
	</div>
	)
	}
	}
	


export default UserInput;