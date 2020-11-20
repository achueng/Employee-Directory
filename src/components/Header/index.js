import Jumbotron from 'react-bootstrap/Jumbotron';

function Header() {
  return (
    <Jumbotron fluid className="p-4 bg-info">
      <h1 className="text-center text-light font-weight-bold">Employee Directory</h1>
    </Jumbotron>
  );
}

export default Header;