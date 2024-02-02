"use client";
import React from "react";
import { Dropdown, HeaderContainer } from "../styled";
import { List } from "@phosphor-icons/react";

const Header = () => {
  return (
    <HeaderContainer>
      <a href="/" className="logo">
        <img alt="logo" src="https://mitybp.pages.dev/assets/rondon.png" />
        <span>G.E. Mal. Rondon</span>
      </a>
      <a href="/clube-flor-de-lis">Clube Flor de Lis</a>
      <Dropdown>
        <label htmlFor="secoes">Seções</label>
        <input type="checkbox" id="secoes" />
        <div>
          <a href="/secoes/acs">Alcateia Cruzeiro do Sul</a>
          <a href="/secoes/apa">Alcateia Patas Azuis</a>
          <a href="/secoes/tec">Tropa Escoteira Cosmos</a>
          <a href="/secoes/tet">Tropa Escoteira Texugo</a>
          <a href="/secoes/tsgr">Tropa Sênior e Guia Ragnarök</a>
          <a href="/secoes/cpo">Clã Pioneiro Ohana</a>
        </div>
      </Dropdown>
      <a href="https://linktr.ee/rondon39pr" target="_blank" className="link">
        Fotos
      </a>
      <a href="/contato" className="link">Contato</a>
      <Dropdown className="menu">
        <label htmlFor="menu">
          <List />
        </label>
        <input type="checkbox" id="menu" />
        <div>
          <a href="https://linktr.ee/rondon39pr" target="_blank">
            Fotos
          </a>
          <a href="/contato">Contato</a>
        </div>
      </Dropdown>
    </HeaderContainer>
  );
};

export default Header;
