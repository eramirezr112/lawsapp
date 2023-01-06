import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const TreeComponent = ({ nodes }) => {
  const [treeData, setTreeData] = useState(nodes);
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const onCheck = (checked) => {
    setChecked(checked);
  };

  const onExpand = (expanded, targetNode) => {
    console.log(targetNode);
    console.log(expanded);
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
        console.log("TEST!");
        console.log(targetNode);
      }}
    />
  );
};

export default TreeComponent;
