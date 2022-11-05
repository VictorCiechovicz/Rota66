import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TextInput`
width: 100%;
padding: 17px 26px;

font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(18)}px;


color: ${({theme})=> theme.colors.shape};


border:${({theme})=> theme.colors.shape};
border-radius: 8px;

margin-bottom: 14px;

`;