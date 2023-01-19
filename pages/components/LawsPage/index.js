import React, { useState, useEffect } from "react";
import TreeComponent from "../Tree/TreeComponent";
import { LawsPageStyles } from "./LawsPageStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const LawsPage = ({
  nodes,
  getChildrenNode,
  isLoading,
  getContentByNormaAndDetalle,
  content,
}) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <LawsPageStyles>
      <div className="column-left">
        <div className="loading-image">
          {isLoading ? (
            <FontAwesomeIcon icon={faCircleNotch} spin color="#233f78" />
          ) : (
            ""
          )}
        </div>
        <TreeComponent
          nodes={nodes}
          action={getChildrenNode}
          getContentByNormaAndDetalle={getContentByNormaAndDetalle}
          setShowContent={setShowContent}
        />
      </div>
      <div className="column-right">
        {content ? (
          <div>
            <strong>{content.DES_TITULO}</strong>
            <p>{content.DES_DESCRIPCION}</p>
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
