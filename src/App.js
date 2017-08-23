import React, { Component } from 'React'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { AppRegistry, View, Text } from 'react-native'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'
import SearchForm from './components/SearchForm'
import ImageList from './components/ImageList'
import { Header } from './components'

class App extends Component {
	render() {

		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

		return (
			<Provider store={store}>
				<View style={{ flex: 1, backgroundColor: '#181817' }}>
					<Header headerText="Image Search"/>
					<SearchForm />
					<ImageList></ImageList>
				</View>
			</Provider> 
		)
	}
}

export default App
