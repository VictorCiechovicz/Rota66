import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
width: 100%;

padding: 17px 22px;

border-color: ${({theme})=>theme.colors.shape};
border-radius: 8px;
border-width: 1px;

margin-bottom: 20px;

flex-direction: row;
justify-content: space-between;
`;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(18)}px;
color: ${({theme})=>theme.colors.secundary}

`;

export const Icon = styled.View``;