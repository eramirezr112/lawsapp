import React, { useState, useEffect } from "react";

import Lodash from "lodash";
import Head from "next/head";

import axios from "axios";
import { SiteAPI } from "../config";

import LawsPage from "./components/LawsPage";
import { getPathByName } from "../data/main-menu-app.js";

export default function Laws({ leyNormasTipos }) {
  const [treeData, setTreeData] = useState(leyNormasTipos);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(null);

  function getObject(array, key, value) {
    var o;
    array.some(function iter(a) {
      if (a[key] === value) {
        o = a;
        return true;
      }
      return Array.isArray(a.children) && a.children.some(iter);
    });
    return o;
  }

  const getChildrenNode = async (nodeId) => {
    setIsLoading(true);

    const nodeParts = nodeId.value.split("-");
    const codNorma = nodeParts[0];
    const codDetalle = nodeParts[1];

    const clonedTree = Lodash.cloneDeep(treeData);

    const testNode = getObject(clonedTree, "value", nodeId.value);

    let children = [];
    if (nodeId.children.length > 0) {
      children = nodeId.children;
    } else {
      const result = await axios.get(
        `${process.env.APP_PUBLIC_API}/leyNormas/children/${codNorma}/${codDetalle}`
      );
      children = result.data;
    }

    testNode.children = children;
    testNode.label = nodeId.label;

    setTreeData(clonedTree);
    setIsLoading(false);
  };

  const getContentByNormaAndDetalle = async (nodeId) => {
    const nodeParts = nodeId.value.split("-");
    const codNorma = nodeParts[0];
    const codDetalle = nodeParts[1];

    const result = await axios.get(
      `${process.env.APP_PUBLIC_API}/leyNormas/content/${codNorma}/${codDetalle}`
    );
    console.log(result.data);
    setContent(result.data);
  };

  /*
  useEffect(() => {
    const myNodes = leyNormasTipos.map((node, i) => {
      const { value, label, children } = node;
      let parentChildren = getChildrenTree(children);
      return {
        value: value,
        label: (
          <a
            href="#"
            onClick={() => {
              getChildrenNode(value);
            }}
          >
            {label}
          </a>
        ),
        children: parentChildren,
      };
    });
    //console.log(myNodes);
    console.log(leyNormasTipos);

    setTreeData(leyNormasTipos);
  }, []);
  */

  /*
  if (isArray) {
    nodes = leyNormasTipos;
  } else {
    nodes = [
      {
        value: "Ley-2",
        label: "Ley Test",
        children: [
          {
            value: "Employee Evaluations.zip",
            label: "Employee Evaluations.zip",
            icon: <i className="far fa-file-archive icon-color" />,
            children: [
              {
                value: "A",
                label: "A",
                icon: <i className="far fa-file-archive icon-color" />,
              },
              {
                value: "B",
                label: "B",
                icon: <i className="far fa-file-pdf icon-color" />,
              },
              {
                value: "C",
                label: "C",
                icon: <i className="far fa-file-alt icon-color" />,
              },
            ],
          },
          {
            value: "Expense Report.pdf",
            label: "Expense Report.pdf",
            icon: <i className="far fa-file-pdf icon-color" />,
          },
          {
            value: "notes.txt",
            label: "notes.txt",
            icon: <i className="far fa-file-alt icon-color" />,
          },
        ],
      },
    ];
  }
  */

  return (
    <>
      <Head>
        <title>Laws App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {treeData && (
        <LawsPage
          nodes={treeData}
          getChildrenNode={getChildrenNode}
          isLoading={isLoading}
          getContentByNormaAndDetalle={getContentByNormaAndDetalle}
          content={content}
        />
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const typeId = getPathByName("LEYES").codId;
  const leyNormasTipos = await axios.get(`${SiteAPI.leyNormas}/type/${typeId}`);

  return {
    props: {
      leyNormasTipos: leyNormasTipos.data,
      mainLayout: true,
    },
    revalidate: 1,
  };
};
