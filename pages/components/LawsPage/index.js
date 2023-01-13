import React, { useState, useEffect } from "react";
import TreeComponent from "../Tree/TreeComponent";
import { LawsPageStyles } from "./LawsPageStyles";

const LawsPage = ({ nodes, getChildrenNode }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <LawsPageStyles>
      <div className="column-left">
        <TreeComponent
          nodes={nodes}
          action={getChildrenNode}
          setShowContent={setShowContent}
        />
      </div>
      <div className="column-right">
        {showContent ? (
          <div>
            <strong>Articulo 1</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              turpis nisi, ullamcorper id enim id, consequat euismod mauris.
              Pellentesque eget lacinia erat. In hac habitasse platea dictumst.
              Phasellus consectetur a nulla vitae lobortis. Vivamus vestibulum
              ultrices augue vel feugiat. In venenatis purus eget tellus mattis,
              eget viverra nisi aliquam. Donec et lacus ante. Phasellus
              hendrerit fringilla erat.
            </p>
            <p>
              <strong>REFERENCIAS</strong>
              <ul>
                <li>
                  <a href="#" style={{ color: "#0000ff" }}>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#0000ff" }}>
                    Link 2
                  </a>
                </li>
              </ul>
            </p>
          </div>
        ) : (
          "Contenido de La Ley"
        )}
      </div>
    </LawsPageStyles>
  );
};

export default LawsPage;
