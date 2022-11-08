import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
width: 50px;
height: 50px;
background-color: ${({theme})=>theme.colors.pimary_light};

border-radius: 50px;
align-items: center;
justify-content:center;

margin:8px;



`;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(24)}px;


color: ${({theme})=>theme.colors.title};


`;