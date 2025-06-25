
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { setcountryList } from '../../redux/reducers/country.reducer';
function Header({ countries }) {
  const navLinks = ["All", "Asia", "Europe"]
  const [activeNavLink, setactiveNavLink] = useState("All")
  const dispatch = useDispatch()

  const navLinksChangeHandler = (activeNav) => {
    setactiveNavLink(activeNav)
    if (activeNav === "All") {
      dispatch(setcountryList(countries))
    } else {
      const filteredCountries = countries.filter((obj) => obj.region === activeNav)
      dispatch(setcountryList(filteredCountries))
    }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              navLinks.map((title) => {
                return (
                  <Nav.Link className='header-nav' href="#" active={title === activeNavLink} onClick={() => navLinksChangeHandler(title)}>{title}
                  </Nav.Link>

                )
              })
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header