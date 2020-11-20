import React from "react";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Table from "./components/Table";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Container>
          <Table/>
      </Container>
    </React.Fragment>
  );
}

export default App;
