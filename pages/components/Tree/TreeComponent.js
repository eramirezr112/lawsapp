import React, { useState, useEffect } from "react";
import Lodash, { has } from "lodash";
import CheckboxTree, { expandNodesToLevel } from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const TreeComponent = ({ nodes, action }) => {
  const [treeData, setTreeData] = useState(nodes);
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    console.log("Test");
    setTreeData(nodes);
  }, [nodes]);

  const onCheck = (checked) => {
    setChecked(checked);
  };

  const onExpand = (expanded, targetNode) => {
    console.log("ON EXPAND!");
    console.log(treeData);
    const treeNode = Lodash.find(treeData, {
      value: targetNode.value,
      isParentRoot: true,
    });
    const isParentRoot = treeNode ? true : false;
    if (!isParentRoot) {
      /*
      //const test = expandNodesToLevel(treeData, 0);
      console.log(expanded);
      console.log(
        "************************************************************"
      );
      */

      /**/
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

      /*
      function findText(items, text) {
        if (!items) {
          return;
        }

        for (const item of items) {
          // Test current object
          if (item.value === text) {
            return item;
          }

          // Test children recursively
          const child = findText(item.children, text);
          if (child) {
            return child;
          }
        }
      }
      */

      const testGetChildrensNode = (nodeX) => {
        let hasParentRoot = Lodash.has(nodeX, "isParentRoot");
        if (hasParentRoot) {
          return;
        }

        console.log(nodeX);
        const objParent = getObject(treeData, "children", nodeX);
        console.log(objParent);
        /*
        hasParentRoot = Lodash.has(objParent, "isParentRoot");
        if (hasParentRoot) {
          return;
        } else {
          const obj = testGetChildrensNode(objParent);
          return obj;
        }
        //const testChildren = testGetChildrensNode(nodeX.children);
        */
      };

      const testNode = getObject(treeData, "value", targetNode.value);
      console.log("IS PARENT ROOT");
      const testChildren = testGetChildrensNode(testNode);
      console.log(testChildren);
      //const testNode = findText(treeData, targetNode.value);

      /*
      const testNode = Lodash.find(treeData, function (x) {
        return x.children.indexOf(targetNode.value);
      });
      */

      const testNode2 = Lodash.findKey(treeData, [
        "children",
        treeData[0].children,
      ]);
      //const testNode2 = getObject(treeData[0].children, "value", testNode);

      console.log("TARGET NODE");
      console.log(targetNode);

      console.log("OTHER");
      console.log(testNode);
      console.log("=========================");
      /*
      console.log(targetNode.value);
      const nodeData = targetNode.value.split("-");

      const codNorma = nodeData[0];
      const codDetalle = nodeData[1];
      console.log("codNorma", codNorma);
      console.log("codDetalle", codDetalle);
      */
      action(targetNode);
    }

    setExpanded(expanded);
  };

  return (
    <CheckboxTree
      checked={checked}
      expanded={expanded}
      icons={{
        check: <span className="rct-icon rct-icon-check" />,
        uncheck: <span className="rct-icon rct-icon-uncheck" />,
        halfCheck: <span className="rct-icon rct-icon-half-check" />,
        expandClose: <span className="rct-icon rct-icon-expand-close" />,
        expandOpen: <span className="rct-icon rct-icon-expand-open" />,
        expandAll: <span className="rct-icon rct-icon-expand-all" />,
        collapseAll: (
          <span className="rct-icon rct-icon-collapse-all icon-color" />
        ),
        parentClose: (
          <span className="rct-icon rct-icon-parent-close icon-color" />
        ),
        parentOpen: (
          <span className="rct-icon rct-icon-parent-open icon-color" />
        ),
        leaf: <span className="rct-icon rct-icon-leaf" />,
      }}
      iconsClass="fa5"
      nodes={treeData}
      onCheck={(checked) => onCheck(checked)}
      onExpand={(expanded, targetNode) => onExpand(expanded, targetNode)}
      expandOnClick={true}
      onClick={(targetNode) => {
        console.log("ON CLICK!");
        //console.log(targetNode);
      }}
    />
  );
};

export default TreeComponent;
