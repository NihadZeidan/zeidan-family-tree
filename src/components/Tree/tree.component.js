import Tree from "react-d3-tree";
import "./tree.styles.css";
import zeidan from "./zeidan.json";

export default function ZeidanFamilyTree() {
  return (
    <div id="treeWrapper">
      <Tree
        depthFactor={130}
        // initialDepth={1}
        zoom={0.4}
        data={zeidan}
        enableLegacyTransitions={true}
        separation={{ siblings: 2, nonSiblings: 1.5 }}
        transitionDuration={300}
        orientation="vertical"
        pathClassFunc={() => "tree-path"}
        rootNodeClassName="root-node"
        leafNodeClassName="leaf-node"
        branchNodeClassName="branch-node"
        translate={{ x: 750, y: 100 }}
      />
    </div>
  );
}
