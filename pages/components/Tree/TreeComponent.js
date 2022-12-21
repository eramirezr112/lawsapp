import React from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const isContent = false;
const showContent = () => {
  alert("Works");
};

/*
const nodes = [
  {
    value: "Ley 1",
    label: "Ley 1",
    children: [
      {
        value: "1",
        label: "Capitulo 1",
        icon: <i className="far fa-file-archive icon-color" />,
        children: [
          {
            value: "A1",
            label: (
              <a href="#" onClick={() => showContent()}>
                Articulo 1
              </a>
            ),
            icon: <i className="far fa-file-archive icon-color" />,
          },
          {
            value: "A2",
            label: "Articulo 2",
            icon: <i className="far fa-file-pdf icon-color" />,
          },
          {
            value: "A3",
            label: "Articulo 3",
            icon: <i className="far fa-file-alt icon-color" />,
          },
        ],
      },
      {
        value: "2",
        label: "Capitulo 2",
        icon: <i className="far fa-file-pdf icon-color" />,
        children: [
          {
            value: "A4",
            label: (
              <a href="#" onClick={() => showContent()}>
                Articulo 1
              </a>
            ),
            icon: <i className="far fa-file-archive icon-color" />,
          },
          {
            value: "A5",
            label: "Articulo 2",
            icon: <i className="far fa-file-pdf icon-color" />,
          },
          {
            value: "A6",
            label: "Articulo 3",
            icon: <i className="far fa-file-alt icon-color" />,
          },
        ],
      },
      {
        value: "3",
        label: "Transitorio 1",
        icon: <i className="far fa-file-alt icon-color" />,
        children: [
          {
            value: "N1",
            label: "Numeral 1",
            icon: <i className="far fa-file-archive icon-color" />,
          },
          {
            value: "N2",
            label: "Numeral 2",
            icon: <i className="far fa-file-pdf icon-color" />,
          },
        ],
      },
    ],
  },
  {
    value: "Ley 2",
    label: "Ley 2",
    children: [
      {
        value: "4",
        label: "Capitulo 1",
        icon: <i className="far fa-file-image icon-color" />,
      },
      {
        value: "5",
        label: "Capitulo 2",
        icon: <i className="far fa-file-image icon-color" />,
      },
    ],
  },
  {
    value: "Ley 3",
    label: "Ley 3",
    children: [
      {
        value: "6",
        label: "Capitulo 1",
        icon: <i className="far fa-file-image icon-color" />,
      },
      {
        value: "7",
        label: "Capitulo 2",
        icon: <i className="far fa-file-image icon-color" />,
      },
    ],
  },
  {
    value: "Ley 4",
    label: "Ley 4",
    children: [
      {
        value: "8",
        label: "Capitulo 1",
        icon: <i className="far fa-file-image icon-color" />,
      },
      {
        value: "9",
        label: "Capitulo 2",
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
    nodes: [],
    setShowContent: null,
  };

  constructor(props) {
    super(props);

    this.onCheck = this.onCheck.bind(this);
    this.onExpand = this.onExpand.bind(this);
    this.state.treeData = props.nodes;
    this.state.nodes = [
      {
        value: "Ley 1",
        label: "Ley 1",
        children: [
          {
            value: "1",
            label: "Capitulo 1",
            icon: <i className="far fa-file-archive icon-color" />,
            children: [
              {
                value: "A1",
                label: (
                  <a href="#" onClick={() => props.setShowContent(true)}>
                    Articulo 1
                  </a>
                ),
                icon: <i className="far fa-file-archive icon-color" />,
              },
              {
                value: "A2",
                label: "Articulo 2",
                icon: <i className="far fa-file-pdf icon-color" />,
              },
              {
                value: "A3",
                label: "Articulo 3",
                icon: <i className="far fa-file-alt icon-color" />,
              },
            ],
          },
          {
            value: "2",
            label: "Capitulo 2",
            icon: <i className="far fa-file-pdf icon-color" />,
            children: [
              {
                value: "A4",
                label: (
                  <a href="#" onClick={() => props.setShowContent(true)}>
                    Articulo 1
                  </a>
                ),
                icon: <i className="far fa-file-archive icon-color" />,
              },
              {
                value: "A5",
                label: "Articulo 2",
                icon: <i className="far fa-file-pdf icon-color" />,
              },
              {
                value: "A6",
                label: "Articulo 3",
                icon: <i className="far fa-file-alt icon-color" />,
              },
            ],
          },
          {
            value: "3",
            label: "Transitorio 1",
            icon: <i className="far fa-file-alt icon-color" />,
            children: [
              {
                value: "N1",
                label: "Numeral 1",
                icon: <i className="far fa-file-archive icon-color" />,
              },
              {
                value: "N2",
                label: "Numeral 2",
                icon: <i className="far fa-file-pdf icon-color" />,
              },
            ],
          },
        ],
      },
      {
        value: "Ley 2",
        label: "Ley 2",
        children: [
          {
            value: "4",
            label: "Capitulo 1",
            icon: <i className="far fa-file-image icon-color" />,
          },
          {
            value: "5",
            label: "Capitulo 2",
            icon: <i className="far fa-file-image icon-color" />,
          },
        ],
      },
      {
        value: "Ley 3",
        label: "Ley 3",
        children: [
          {
            value: "6",
            label: "Capitulo 1",
            icon: <i className="far fa-file-image icon-color" />,
          },
          {
            value: "7",
            label: "Capitulo 2",
            icon: <i className="far fa-file-image icon-color" />,
          },
        ],
      },
      {
        value: "Ley 4",
        label: "Ley 4",
        children: [
          {
            value: "8",
            label: "Capitulo 1",
            icon: <i className="far fa-file-image icon-color" />,
          },
          {
            value: "9",
            label: "Capitulo 2",
            icon: <i className="far fa-file-image icon-color" />,
          },
        ],
      },
    ];
    this.state.setShowContent = props.setShowContent;
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
    const { checked, expanded, treeData, nodes, setShowContent } = this.state;

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
        nodes={nodes}
        onCheck={this.onCheck}
        onExpand={this.onExpand}
      />
    );
  }
}

export default TreeComponent;
