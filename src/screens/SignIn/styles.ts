import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.primary};


align-items: center;


`;




export const Logo = styled.Image`
width: ${RFValue(149)}px;
height: ${RFValue(145)}px;


margin-top:15px;
margin-bottom: 50px;

`;

export const InputsWrapper = styled.View`
width: 100%;
padding:0 27px ;

`;