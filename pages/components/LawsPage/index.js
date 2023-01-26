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
            <nav class="mb-4 relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-md navbar navbar-expand-lg navbar-light">
              <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <nav
                  class="bg-grey-light rounded-md w-full"
                  aria-label="breadcrumb"
                >
                  <ol class="list-reset flex">
                    <li>
                      <a href="#" class="text-gray-500 hover:text-gray-600">
                        {content.title}
                      </a>
                    </li>
                    <li>
                      <span class="text-gray-500 mx-2">/</span>
                    </li>
                    <li>
                      <a href="#" class="text-gray-500 hover:text-gray-600">
                        Library
                      </a>
                    </li>
                    <li>
                      <span class="text-gray-500 mx-2">/</span>
                    </li>
                    <li>
                      <a href="#" class="text-gray-500 hover:text-gray-600">
                        Data
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </nav>
            <strong>{content.content.DES_TITULO}</strong>
            <p>{content.content.DES_DESCRIPCION}</p>
            <div className="references-box bg-blue-100 rounded-md p-3 ">
              <p>
                <strong>Referencias</strong>
                <ul className="mt-1">
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
          </div>
        ) : (
          ""
        )}
      </div>
    </LawsPageStyles>
  );
};

export default LawsPage;
