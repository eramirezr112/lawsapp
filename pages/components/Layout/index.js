import React, { useState } from "react";
import { LayoutStyles } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <LayoutStyles>
      <header tabIndex="0"></header>
      <div id="nav-container">
        <div className="bg"></div>
        <div className="button" tabIndex="0">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabIndex="0">
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
        <div className="content">{children}</div>
      </main>
    </LayoutStyles>
  );
};

export default Layout;
