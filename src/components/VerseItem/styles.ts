import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {MaterialIcons}from "@expo/vector-icons"


export const Container = styled.View`
flex: 1;
background-color: ${({theme})=>theme.colors.primary};
flex-direction: row;
align-items: center;

margin-bottom: 9px;
`;


export const ContentWrapper = styled.TouchableOpacity`
flex-direction: row;
align-items: center;

`;


export const Image = styled.ImageBackground`
width: ${RFValue(80)}px;
height:${RFValue(80)}px;

border-radius: 20px;
`;

export const ContentFootWrapper = styled.View`
padding-left: 8px;
padding-right:60px

`;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(14)}px;
color: ${({theme})=>theme.colors.title};
`;

export const Duration = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(12)}px;
color: ${({theme})=>theme.colors.text};

`; 

export const Icon = styled(MaterialIcons)`
padding-right:35px ;

font-size: ${RFValue(30)}px;
color: ${({theme})=>theme.colors.shape};

`;