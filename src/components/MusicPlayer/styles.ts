import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'; 



export const Container = styled.View`
flex: 1;
background-color: ${({theme})=>theme.colors.primary};
`;
export const ContentWrapper = styled.View`
align-items: center;
`;

export const Image = styled.ImageBackground`
width: ${RFValue(300)}px;
height: ${RFValue(300)}px;

margin-top: 5px;
margin-bottom: 28px;
`;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(18)}px;

color: ${({theme})=>theme.colors.title};

`;

export const ButtonWrapper = styled.View`
flex-direction: row;
align-items: center;


margin-top:50px;

`;

export const ButtonPass = styled(AntDesign)`
font-size: ${RFValue(28)}px;
color: ${({theme})=>theme.colors.title};
`;

export const ButtonPause = styled(AntDesign)`
font-size: ${RFValue(50)}px;
color: ${({theme})=>theme.colors.title};

padding: 0 28px;

`;

export const ButtonBack  = styled(AntDesign)`
font-size: ${RFValue(28)}px;
color: ${({theme})=>theme.colors.title};
`;
