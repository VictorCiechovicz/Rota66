import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;

background-color: ${({theme})=>theme.colors.primary};

`;

export const ChappterWrapper = styled.View`

flex-direction: row;
flex-wrap: wrap;

padding: 0 30px;
padding-bottom: 50px;
justify-content:flex-start;

`;