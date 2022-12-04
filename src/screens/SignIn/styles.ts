import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.primary};

align-items: center;

`;


export const FormsWrapper = styled.View`
width: 100%;
height:${RFPercentage(40)}px;
padding-left:${RFPercentage(4)}px;
padding-right:${RFPercentage(4)}px;

margin-top: 50px;
margin-bottom: 47px;
`;

export const OuthersChanges = styled.View`
width: 100%;
flex-direction: row;

align-items: center;
justify-content: space-between;

margin-top: 28px;
margin-bottom: 26px;
`;

export const SingUp = styled.TouchableOpacity``;

export const ForgotPassword = styled.TouchableOpacity``;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(14)}px;

color: ${({theme})=>theme.colors.title};

`;

export const SocialLoginWrapper = styled.View`
align-items: center;
flex-direction: row;

margin-top: 50px;
`;

export const AppleLogin = styled.TouchableOpacity`
margin-right: 40px;
`;

export const GoogleLogin = styled.TouchableOpacity``;
