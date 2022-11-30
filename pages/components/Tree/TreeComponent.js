import React from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

/*
const nodes = [
  {
    value: "Leyes",
    label: "Leyes",
    children: [
      {
        value: "Employee Evaluations.zip",
        label: "Employee Evaluations.zip",
        icon: <i className="far fa-file-archive icon-color" />,
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
  {
    value: "Photos",
    label: "Photos",
    children: [
      {
        value: "nyan-cat.gif",
        label: "nyan-cat.gif",
        icon: <i className="far fa-file-image icon-color" />,
      },
      {
        value: "SpaceX Falcon9 liftoff.jpg",
        label: "SpaceX Falcon9 liftoff.jpg",
        icon: <i className="far fa-file-image icon-color" />,
      },
    ],
  },
];
*/

class TreeComponent extends React.Component {
  state = {
    checked: [],
    expanded: ["Leyes"],
    treeData: [],
  };

  constructor(props) {
    super(props);

    this.onCheck = this.onCheck.bind(this);
    this.onExpand = this.onExpand.bind(this);
    this.state.treeData = props.nodes;
  }

  onCheck(checked) {
    this.setState({ checked });
  }

  onExpand(expanded) {
    this.setState({ expanded });
  }

  onTreeData(treeData) {
    this.setState(treeData);
  }

  render() {
    const { checked, expanded, treeData } = this.state;

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
        onCheck={this.onCheck}
        onExpand={this.onExpand}
      />
    );
  }
}

export default TreeComponent;
