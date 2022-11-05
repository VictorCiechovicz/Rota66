import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'


export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.primary};

`;
export const HeaderWrapper = styled.View`
flex-direction: row;
padding:0 27px ;

margin-top: 50px;
`;

export const GoBack = styled.TouchableOpacity`
margin-right:55px;

`;

export const Icon = styled(AntDesign)`
font-size: ${RFValue(27)}px;
color: ${({theme})=>theme.colors.title};

`;

export const FormsWrapper = styled.View`
width: 100%;
padding:0 27px ;

margin-top: 50px;

`;





