import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100v2;
  display: flex;
  justify-content: center;
  font-size: 64px;
  margin-top: 100px;
`;

const Loader = () => (
  <Container>
    <span role="img" aria-label="Loading">
      LOADING......
    </span>
  </Container>
);

export default Loader;
