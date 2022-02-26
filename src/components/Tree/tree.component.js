import Tree from "react-d3-tree";
import "./tree.styles.css";
import zeidan from "./zeidan.json";
import { maleNode, mainNode, femaleNode } from "./customNodes";

export default function ZeidanFamilyTree() {
  const renderCustomSvgNode = ({ nodeDatum, toggleNode }) => (
    <g>
      {nodeDatum.main ? (
        mainNode(nodeDatum, toggleNode)
      ) : (
        <>
          {nodeDatum.gender === "male"
            ? maleNode(nodeDatum, toggleNode)
            : femaleNode(nodeDatum, toggleNode)}
        </>
      )}
    </g>
  );

  return (
    <div id="treeWrapper">
      <Tree
        renderCustomNodeElement={renderCustomSvgNode}
        depthFactor={200}
        // initialDepth={1}
        zoom={0.4}
        data={zeidan}
        enableLegacyTransitions={true}
        separation={{ siblings: 2, nonSiblings: 2 }}
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
