import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons'


export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.primary};

`;
export const Header = styled.View`
width: 100%;

padding: 0 19px;

margin-top: 52px;
`;

export const Search = styled.TextInput`
width: 100%;
padding: 6px 17px;

border-radius:5px;

background-color: ${({theme})=>theme.colors.shape_light};

color:${({theme})=>theme.colors.secundary};

`;

export const Icon = styled(Feather)`
font-size:${RFValue(27)}px;

`;

export const TestamentWrapper = styled.View`
flex-direction: row;
justify-content:center;

margin-top: 49px;
`;

export const OldTestament = styled.ImageBackground`
width: ${RFValue(160)}px;
height: ${RFValue(160)}px;

margin-right:16px;
align-items:center;
padding: 29px 0 ;
`;

export const NewTestament = styled.ImageBackground`
width: ${RFValue(160)}px;
height: ${RFValue(160)}px;

align-items:center;
padding: 29px 0 ;
`;

export const TitleTestament = styled.Text`

font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(18)}px;
color: ${({theme})=> theme.colors.secundary};
`;



export const Content = styled.View`
flex-direction: row;
flex-wrap: wrap;

justify-content: center;
margin-top:19px

`;