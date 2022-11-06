import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
width: ${RFValue(100)}px;
height:${RFValue(100)}px;

border-width: 1px;
border-color: ${({theme})=>theme.colors.shape};
border-radius: 10px;

align-items: center;
justify-content:center;

margin:9px

`;

export const Title = styled.Text`

font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(14)}px;


color: ${({theme})=>theme.colors.secundary};


`;