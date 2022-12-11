import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign,Feather } from '@expo/vector-icons'; 



export const Container = styled.View`
flex: 1;
background-color: ${({theme})=>theme.colors.primary};

padding: 0px 30px ;
`;

export const ContentWrapper = styled.View`
align-items: center;
`;

export const Image = styled.ImageBackground`
width: ${RFValue(300)}px;
height: ${RFValue(300)}px;

margin-top: 1px;
margin-bottom: 28px;
`;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(18)}px;

color: ${({theme})=>theme.colors.title};

`;

export const SliderWrapper = styled.View`
margin-top: 30px;

`;

export const DurationSongsWrapper = styled.View`
flex-direction: row;
width:100%;
padding: 5px 30px ;

justify-content: space-between;



`;

export const FirstTime = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(12)}px;

color: ${({theme})=>theme.colors.shape};
`;

export const FinalTime = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(12)}px;

color: ${({theme})=>theme.colors.shape};
`;


export const ButtonWrapper = styled.View`
flex-direction: row;
align-items: center;


margin-top:10px;

`;

export const ButtonPass = styled(AntDesign)`
font-size: ${RFValue(28)}px;
color: ${({theme})=>theme.colors.title};
`;

export const ButtonPlay = styled(AntDesign)`
font-size: ${RFValue(50)}px;
color: ${({theme})=>theme.colors.title};

padding: 0 28px;

`;

export const ButtonPause = styled(Feather)`
font-size: ${RFValue(50)}px;
color: ${({theme})=>theme.colors.title};

padding: 0 28px;

`;



export const ButtonBack  = styled(AntDesign)`
font-size: ${RFValue(28)}px;
color: ${({theme})=>theme.colors.title};
`;
