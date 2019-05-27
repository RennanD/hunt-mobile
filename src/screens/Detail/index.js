import React from 'react'

import { Container } from './styles'

Detail.navigationOptions = ({ navigation }) => ({

		title: navigation.state.params.product.title
})


export default function Detail({ navigation }) {

 	const item = navigation.state.params.product 
		
	return(
	
		<Container source = {{ uri: item.url}} />

	
	)

	
}
