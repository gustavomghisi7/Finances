import styled from 'styled-components/native';

export const Container = styled.TouchanleOpacity`
    background-color: ${Platform.OS === 'ios' ? '#000000066' : 'transparent'};
    position: absolute;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
`;

export const Header = styled.View`
    width: 100%;
    padding: 16px;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: white;
    border-bottom-width: 2px;
    border-color: gray;
`;