export const mainNode = (nodeDatum, toggleNode) => (
  <svg x="-35" xmlns="http://www.w3.org/2000/svg" onClick={toggleNode}>
    <g>
      <rect width="70" height="70" fill="#58a6ff"></rect>
      <text
        x="15"
        y="35"
        alignmentBaseline="middle"
        font-size="20"
        fill="black"
        text-align="center"
        fontWeight={5}
      >
        {nodeDatum.name}
      </text>
    </g>
  </svg>
);

export const maleNode = (nodeDatum, toggleNode) => (
  <>
    <svg x="5" xmlns="http://www.w3.org/2000/svg" onClick={toggleNode}>
      <g>
        <rect width="50" height="50" fill="#58a6ff"></rect>
        <text
          x="7"
          y="28"
          alignmentBaseline="middle"
          font-size="20"
          text-align="center"
          fill="black"
          fontWeight={5}
        >
          {nodeDatum.name}
        </text>
      </g>
    </svg>

    <svg
      x="-70"
      y="-10"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleNode}
    >
      <g>
        <circle r="35" fill="#ff7071" cx="35" cy="35" />
        <text
          x="35"
          y="35"
          text-align="center"
          alignmentBaseline="middle"
          font-size="20"
          text-anchor="middle"
          fontWeight={5}
          fill="black"
        >
          {nodeDatum.wife ? nodeDatum.wife : "؟"}
        </text>
      </g>
    </svg>
  </>
);

export const femaleNode = (nodeDatum, toggleNode) => (
  <>
    <svg
      x="-70"
      y="-10"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleNode}
    >
      <g>
        <circle r="35" fill="#ff7071" cx="35" cy="35" />
        <text
          x="35"
          y="35"
          text-align="center"
          alignmentBaseline="middle"
          font-size="20"
          text-anchor="middle"
          fontWeight={5}
          fill="black"
        >
          {nodeDatum.name}
        </text>
      </g>
    </svg>

    <svg x="5" xmlns="http://www.w3.org/2000/svg" onClick={toggleNode}>
      <g>
        <rect width="90" height="50" fill="#fefefefe"></rect>
        <text
          x="10"
          y="30"
          text-align="center"
          alignmentBaseline="middle"
          font-size="20"
          fill="black"
          fontWeight="normal"
        >
          {nodeDatum.husband ? nodeDatum.husband : "؟"}
        </text>
      </g>
    </svg>
  </>
);
