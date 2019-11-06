import React from 'react';

export default function Body({ nasaData }) {
  
  return (
    <div>
      <h2>{nasaData.title}</h2>
      <img src={nasaData.url} alt="NASA astronomy picture of the day" />
      <p>{nasaData.explanation}</p>
      <button className="button cta">Get Started</button>
      <button className="button login">Login</button>
    </div>
  )
}