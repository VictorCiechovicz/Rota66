import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
width: 100%;
background-color: ${({theme})=>theme.colors.secundary};

border-radius: 10px;
align-items: center;
padding: 18px;


`;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(18)}px;


color: ${({theme})=>theme.colors.title};


`;