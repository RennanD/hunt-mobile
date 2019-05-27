import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background: #fafafa;

`
export const Content = styled.View`
	background: #FFF;
	border-width: 1px;
	border-color: #DDD;
	border-radius: 5px;
	padding: 20px;
	margin-bottom: 10px;
`

export const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #333;
`

export const Desc = styled.Text`
	font-size: 16px;
	color #999;
	margin-top: 5px;
	line-height: 24px;
` 
export const Btn = styled.TouchableOpacity`
	height: 42px;
	margin-top: 10px;
	border-radius: 5px;
	border-width: 2px;
	border-color: #DA552F;
	background: #DA552F;
	align-items: center;
	justify-content: center;
`
export const BtnTxt = styled.Text`
	font-size: 16px;
	color: #FFF;
	font-weight: bold;
`
