import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/resume">Resume</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;