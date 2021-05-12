import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

import { Background, Container, Nome, Saldo, Title } from './styles';

export default function Home() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <Background>
      <Header />
      <Container>
        <Nome>Gustavo</Nome>
        <Saldo>R$1000,00</Saldo>
      </Container>

      <Title>Últimas movimentações</Title>
    </Background>
  );
}