import styled from "styled-components/native";


export const Container = styled.View`
flex: 1;
background-color: ${({theme})=>theme.colors.primary};

`;

export const ButtonsWrapper = styled.View`
flex-direction: row;
flex-wrap: wrap;

justify-content: space-between;

padding-left: 28px;
padding-right: 28px;

padding-bottom: 50px;
`;