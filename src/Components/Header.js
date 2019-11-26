import React from 'react';
import styled  from 'styled-components';

const H1 = styled.h1`
  font-family: 'Supermercado One', cursive;
  font-size: 50px;
`

export default function Header() {
  return (
    <div>
      <H1>NASA APOD 🚀</H1>
    </div>
  )
};