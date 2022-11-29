import { LayoutStyles } from "../components/Layout/LayoutStyles";
import TreeComponent from "./components/Tree/TreeComponent";

import Tree from "react-animated-tree";

import Head from "next/head";

export default function Laws() {
  return (
    <LayoutStyles>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
          integrity="sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <header tabindex="0"></header>
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
            <TreeComponent />
            {/*
            <Tree
              content="Apple"
              type="Fruit"
              open
              canHide
              visible
              onClick={console.log}
            >
              <Tree content="Contents">
                <Tree content="Seeds" />
              </Tree>
            </Tree>
            */}
          </div>
          <div className="column-right">Contenido de la ley</div>
        </div>
      </main>
    </LayoutStyles>
  );
}
