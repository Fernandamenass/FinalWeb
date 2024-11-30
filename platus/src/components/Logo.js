import "../styles/index.css";
import PlatusLogo from "../img/PlatusLogo.png";
import Header from "../img/HeaderArt.png";

export default function Logo() {
  return (
    <header class="header">
      <div class="header-left">
        <img src={PlatusLogo} alt="Service Logo" class="logo" />
      </div>
      <div class="header-right">
        <div class="graphic-container">
          <img src={Header} alt="A Graphic Element" class="graphic" />
          <h1 class="logoLet">Platus</h1>
          <h2 class="subtitlelogo">Hunger? No longer!</h2>
        </div>
      </div>
    </header>
  );
}
