import styled from "styled-components/native";
import {  RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
flex: 1;
background-color: ${({theme})=>theme.colors.primary};
`;
export const Header = styled.View`
width:100%;

background-color:${({theme})=>theme.colors.primary};

justify-content: flex-start;
align-items: center;

padding-top: 70px;
padding-bottom:38px;

`;

export const Title = styled.Text`
font-family: ${({theme})=> theme.fonts.regular};
font-size: ${RFValue(24)}px;
color: ${({theme})=>theme.colors.title};
`;


export const ButtonsWrapper = styled.View`
justify-content: center;

padding: 0 30px;

`;