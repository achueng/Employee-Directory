import React from "react";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Container>
        <Row>
            <Search/>
        </Row>
        <Row>
            <Table/>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
