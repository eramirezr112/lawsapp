import { LayoutStyles } from "../components/Layout/LayoutStyles";

export default function Laws() {
  return (
    <LayoutStyles>
      <header tabindex="0">Header</header>
      <div id="nav-container">
        <div className="bg"></div>
        <div className="button" tabindex="0">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabindex="0">
          <ul>
            <li>
              <a href="#0">Leyes</a>
            </li>
            <li>
              <a href="#0">Reglamentos</a>
            </li>
            <li>
              <a href="#0">Decretos</a>
            </li>
            <li>
              <a href="#0">Acuerdos</a>
            </li>
          </ul>
        </div>
      </div>

      <main>
        <div className="content">
          <div className="column-left">
            <h2>Three Menu</h2>
          </div>
          <div className="column-right">
            <p>Contenido de la ley</p>
          </div>
        </div>
      </main>
    </LayoutStyles>
  );
}
