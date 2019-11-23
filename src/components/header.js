import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce, fadeInDown } from "react-animations";

function Header() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = "Afternoon";
  } else timeOfDay = "Evening";

  const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}${fadeInDown}`};
  `;
  return (
    <header className="App-header">
      <Bounce>
        <h2>Good {timeOfDay}!</h2>
      </Bounce>
    </header>
  );
}

export default Header;
