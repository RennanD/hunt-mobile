/* Core */
import React, {Component} from 'react';

import api from '../../services/Api'

import {StyleSheet, FlatList} from 'react-native'

import {Container, Title, List, Content, Desc, BtnTxt, Btn} from './styles';

export default class Main extends Component {
	static navigationOptions = {
		title: "JsHunt"
	}

	state = {
		productInfo: {},
		docs: [],
		page: 1,
		
	} 

	componentDidMount(){
		this.loadProducts()
	} 

	loadProducts = async (page = 1) => {
		const response = await api.get(`/products?page=${page}`)

		const { docs, ...productInfo } = response.data

		this.setState({ docs:[...this.state.docs, ...docs], productInfo, page })
	}

	loadMore = () => {
		const  { page, productInfo } = this.state

		if (page === productInfo.pages) {
			return
		}

		const pageNumber = page + 1

		this.loadProducts(pageNumber)
	}

	renderItem = ({ item }) =>(
		<Content>
			<Title>{item.title}</Title>
			<Desc>{item.description}</Desc>
			<Btn 
				onPress ={() => {this.props.navigation.navigate('Detail', { product: item })}}
			>
				<BtnTxt>Acessar</BtnTxt>
			</Btn>
		</Content>
	)

  render() {
    const {docs} = this.state
    return (
    
	    <Container>

	    	<FlatList
	    		contentContainerStyle = {styles.list}
	    		data = {docs}
	    		keyExtractor = {item => item._id}
	    		renderItem = {this.renderItem}
	    		onEndReached = {this.loadMore}
	    		onEndReachedThreshold = {0.3}
	    	/>
	    </Container>
    
    )
  }
}




const styles = StyleSheet.create({
	  list: {
	  	padding:20,
	  }
});

