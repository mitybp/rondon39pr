"use client";
import React from "react";
import { Card, Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <h1>Grupo Escoteiro Marechal Rondon 39°PR</h1>
      <Card>
        <img
          alt="46° caica here"
          src="https://mitybp.pages.dev/assets/46caicahere.jpeg"
        />
        <p>São 54 anos de atividades.</p>
        <p>
          E na 46° edição do Caicá Herê tivemos o melhor acampamento de grupo da
          história.
        </p>
        <p>
          Somos felizes porque estamos juntos, somos felizes porque somos
          Escoteiros.
        </p>
        <p>Mas acima de tudo somos felizes por que somos RONDON.</p>
      </Card>
    </Container>
  );
};

export default Home;
