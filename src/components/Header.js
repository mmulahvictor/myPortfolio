import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header () {
    return (
        <HeaderContainer>
            <Name>Your Name</Name>
            <ContactInfo>
                <p>Email: your@email.com</p>
                <p>Phone: 123-456-7890</p>
            </ContactInfo>
            <NavLinks>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
            </NavLinks>
        </HeaderContainer>

    );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Name = styled.h1`
  font-size: 2em;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavLinks = styled.nav`
  display;
`

export default Header