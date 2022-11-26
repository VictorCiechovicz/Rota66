import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from '@expo/vector-icons';



export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.primary};

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

export const PlayListWrapper = styled.View`
width:100%;

padding-left: 10px;
`;  

export const Circle = styled.View`
align-items: center;

`;  

export const Icon =styled(MaterialIcons)`
font-size: ${RFValue(50)}px;
color: ${({theme})=>theme.colors.shape};
`;

export const Text = styled.Text`
font-family:${({theme})=>theme.fonts.regular};
text-align: center;
color:${({theme})=>theme.colors.text};
font-size: ${RFValue(15)}px;

`; 
