import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { termChange, search } from '../actions'
import { Card, CardSection, Input, Button } from './'

class SearchForm extends Component {

	onTermChange(text) {
		this.props.termChange(text)
	}

	onSearchButtonPress() {
		this.searchHandler()
	}

	onKeyPress(event) {
		if (event.nativeEvent.key == 'Enter')
			this.searchHandler()
	}

	searchHandler() {
		this.props.search(JSON.stringify(this.props))
	}

	render() {
		return(
			<Card>
				<CardSection>
					<Input
						placeholder="Type in tag to search"
						onChangeText={this.onTermChange.bind(this)}
						onKeyPress={this.onKeyPress.bind(this)}
						value={this.props.term}
					/>
				</CardSection>

				<CardSection>
					<Button onPress={this.onSearchButtonPress.bind(this)}>
						Search
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = ( { searchReducer } ) => {
	return {
		term: searchReducer.term
	}
}

export default connect(mapStateToProps, { 
	termChange,
	search
})(SearchForm)




