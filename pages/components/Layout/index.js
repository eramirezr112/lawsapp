import React, { useState, useEffect } from "react";
import { LayoutStyles } from "./LayoutStyles";

import axios from "axios";
import { getPathById } from "../../../data/main-menu-app.js";

const Layout = ({ children }) => {
  const [globalMenu, setGlobalMenu] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `${process.env.APP_PUBLIC_API}/leyNormasTipos`
      );
      setGlobalMenu(result.data);
    };
    getData();
  }, []);

  const renderGlobalMenu = () => {
    const globalMenuOptions = globalMenu.map((option, index) => {
      return (
        <li>
          <a key={index} href={getPathById(option.COD_TIPO).path}>
            {option.DES_TIPO}
          </a>
        </li>
      );
    });

    return <ul>{globalMenuOptions}</ul>;
  };

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
          {renderGlobalMenu()}
        </div>
      </div>
      <main>
        <div className="content">{children}</div>
      </main>
    </LayoutStyles>
  );
};

export default Layout;
