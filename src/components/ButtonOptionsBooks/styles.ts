import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
width: 45%;

border-width: 1px;
border-color: ${({theme})=>theme.colors.title};
border-radius: 5px;
align-items: center;
padding: 10px;

margin-bottom: 15px;


`;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(15)}px;


color: ${({theme})=>theme.colors.title};


`;