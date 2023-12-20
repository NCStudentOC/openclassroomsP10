/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a href="#nos-services">Nos services</a>
        console.log(click)
      </li>
      <li>
        <a href="#nos-realisations">Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe">Notre équipe</a>
      </li>
    </ul>
    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
  </nav>
);

export default Menu;
