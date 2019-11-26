import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  max-width: 90%;
  margin: 0 auto;
`;

const ImageContainer = styled.img`
  max-width: 80%;
  margin: 0 auto;
  border-radius: 5px;
`;

const CtaButton = styled.div`
  display: block;
  padding: .5rem;
  margin: 5px auto;
  background: #231842;
  border: transparent;
  color: #f4f4f4;
  width: 20rem;
  border-radius: 25px;
`;

const LoginButton = styled.div`
  display: block;
  padding: .5rem;
  margin: 5px auto;
  background: #d3d2cd;
  border: transparent;
  color: #231842;
  width: 20rem;
  border-radius: 25px;
`;
export default function Body({ nasaData }) {

  if (!nasaData.url) return <div className="loader">Loading...</div>

  return (
    <BodyContainer>
      <h2>{nasaData.title}</h2>
        <ImageContainer src={nasaData.url} alt="NASA astronomy picture of the day" />
      <p>{nasaData.explanation}</p>
      <CtaButton>Get Started</CtaButton>
      <LoginButton>Login</LoginButton>
    </BodyContainer>
  )
}