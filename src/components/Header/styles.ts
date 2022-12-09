import styled from "styled-components/native";
import {AntDesign} from '@expo/vector-icons'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
width:100%;

background-color:${({theme})=>theme.colors.primary};

flex-direction: row;
justify-content: flex-start;
align-items: center;

padding-top: 50px;
padding-bottom:38px;
padding-left:30px;
`;


export const Button = styled.TouchableOpacity``;

export const Icon = styled(AntDesign)`
font-size: ${RFValue(30)}px;
color: ${({theme})=>theme.colors.title};

margin-right: 60px;
`; 

export const Title = styled.Text`
font-family: ${({theme})=> theme.fonts.regular};
font-size: ${RFValue(24)}px;
color: ${({theme})=>theme.colors.title};
`;