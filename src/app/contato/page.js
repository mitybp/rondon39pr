"use client";
import React from "react";
import { Container } from "../styled";

const Contato = () => {
  return (
    <Container>
      <h1>Contato</h1>
      <p>Rua Vieira dos Santos, 39, Centro Cívico, Curitiba/PR.</p>
      <p>CEP 80.540-310</p>
      <br/>
      <p>+55 (41) 8400-2727</p>
      <br/>
      <p><a href='https://twitter.com/rondon39pr'>Twitter</a> ・ <a href='https://instagram.com/rondon39pr'>Instagram</a> ・ <a href='https://threads.net/@rondon39pr'>Threads</a> ・ <a href='https://www.facebook.com/rondon39pr'>Facebook</a></p><br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14415.615644016447!2d-49.280526753327656!3d-25.40802684120959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce6a6de9e2047%3A0x3cfe2257a69c409d!2sGrupo%20Escoteiro%20Marechal%20Rondon%20-%2039%2FPR!5e0!3m2!1spt-BR!2sbr!4v1706894176971!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border: "2px solid #ccc", borderRadius: 10}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Container>
  );
};

export default Contato;
