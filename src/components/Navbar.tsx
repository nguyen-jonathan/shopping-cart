import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {useShoppingCart} from '../context/ShoppingCartContext';

export function Navbar() {
  const {openCart, cartQuantity} = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{width: '3rem', height: '3rem', position: 'relative'}}
            variant="outline-primary"
            className="rounded-circle">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <circle cx="176" cy="416" r="32" />
              <circle cx="400" cy="416" r="32" />
              <path d="m456.8 120.78a23.92 23.92 0 0 0 -18.56-8.78h-304.35l-6.13-34.78a16 16 0 0 0 -15.76-13.22h-64a16 16 0 0 0 0 32h50.58l45.66 258.78a16 16 0 0 0 15.76 13.22h256a16 16 0 0 0 0-32h-242.58l-5.64-32h241.66a24.07 24.07 0 0 0 23.56-19.29l28.8-144a24 24 0 0 0 -5-19.93z" />
            </svg>

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(30%, 30%)',
              }}>
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}
