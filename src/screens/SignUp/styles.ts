import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'

export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.primary};
align-items: center;

`;
export const HeaderWrapper = styled.View`
flex-direction: row;
padding:0 27px ;

margin-top: 50px;
`;
export const GoBack = styled.TouchableOpacity`
margin-left:31px;

`;

export const Icon = styled(AntDesign)`
font-size: ${RFValue(27)}px;
color: ${({theme})=>theme.colors.title};

`;

export const FormsWrapper = styled.View`
width: 100%;
padding:0 27px ;

margin-top: 10px;
margin-bottom: 35px;
`;




export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(14)}px;

color: ${({theme})=>theme.colors.title};

`;

export const SocialLoginWrapper = styled.View`
align-items: center;
flex-direction: row;

margin-top: 23px;
`;

export const AppleLogin = styled.TouchableOpacity`
margin-right: 40px;
`;

export const GoogleLogin = styled.TouchableOpacity``;
