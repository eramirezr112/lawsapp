import React, { useState, useEffect } from "react";
import Lodash from "lodash";
import Head from "next/head";

import axios from "axios";
import { SiteAPI } from "../config";

import LawsPage from "./components/LawsPage";
const nodes = [
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
export default function Laws({ leyNormasTipos, api }) {
  //console.log(leyNormasTipos);
  const [treeData, setTreeData] = useState(leyNormasTipos);
  const isArray = Array.isArray(leyNormasTipos);

  const getChildrenTree = (children) => {
    const childrenTree = children?.map((child, i) => {
      const { value, label, children } = child;
      let childChildren = [];
      childChildren = getChildrenTree(children);
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
        children: childChildren,
      };
    });
    return childrenTree;
  };

  const getChildrenNode = async (nodeId) => {
    const nodeParts = nodeId.value.split("-");
    const codNorma = nodeParts[0];
    const codDetalle = nodeParts[1];

    /*
    const children = await axios.get(
      `${process.env.APP_PUBLIC_API}/leyNormas/children/${codNorma}/${codDetalle}`
    );

    console.log(children);
    */

    const clonedTree = Lodash.cloneDeep(treeData);

    console.log("CLONED!");
    console.log(clonedTree);

    console.log("PARENT");
    console.log("=======================");
    console.log(nodeId.parent.value);
    console.log(nodeId.parent.children);
    console.log(nodeId.parent.children[nodeId.index]);

    const clonedParent = Lodash.cloneDeep(nodeId.parent);

    //clonedParent.children[nodeId.index].children = children.data;
    console.log(clonedParent);

    const merged = Lodash.union(clonedTree, [clonedParent]);
    //const joined = Lodash.join(clonedTree, merged);
    console.log("MERGED!");
    console.log(merged);
    /*
    //console.log("JOINED!");
    //console.log(joined);

    //clonedTree[0].children[0].children = children.data;

    setTreeData(merged);
    */
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
        <LawsPage nodes={treeData} getChildrenNode={getChildrenNode} />
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const leyNormasTipos = await axios.get(`${SiteAPI.leyNormas}/type/1`);

  return {
    props: {
      leyNormasTipos: leyNormasTipos.data,
      mainLayout: true,
    },
    revalidate: 1,
  };
};
