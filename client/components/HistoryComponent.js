import React, { Component } from 'react';


	const styles = {
		border: '2px solid blue'
	};

	class HistoryComponent extends Component {
		constructor(props) {
			super(props);
			this.state = {
				pair: ''
			}

			this.insertPairFunction = this.insertPairFunction.bind(this)
		}

  insertPairFunction() {
  	//this.props.translate(this.state.word);
  	//do props.map
  	//Use componentDidMount to send request to the server to grab the data and pass it as props
  	//Server will pull it out of database and send it back in response
  }

  render () {
  	return (
  	<div>
  	<p>{props.paragraph}</p>
	</div>
	)
	}
	}
	


export default HistoryComponent;