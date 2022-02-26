export const mainNode = (nodeDatum, toggleNode) => (
  <svg x="-35" xmlns="http://www.w3.org/2000/svg" onClick={toggleNode}>
    <g>
      <rect width="70" height="70" fill="#58a6ff"></rect>
      <text
        x="15"
        y="35"
        font-family="Arial"
        font-size="20"
        fill="black"
        fontWeight="normal"
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
          font-family="Arial"
          font-size="20"
          fill="black"
          fontWeight="normal"
        >
          {nodeDatum.name}
        </text>
      </g>
    </svg>

    <svg x="-60" y="-3" xmlns="http://www.w3.org/2000/svg" onClick={toggleNode}>
      {/* <line
    x1="10"
    x2="50"
    y1="110"
    y2="150"
    stroke="black"
    stroke-width="5"
  /> */}
      <g>
        <circle r="30" fill="#ff7071" cx="30" cy="30" />
        <text
          x="30"
          y="30"
          font-family="Arial"
          font-size="15"
          text-anchor="middle"
          fill="black"
          dy=".3em"
        >
          {nodeDatum.wife ? nodeDatum.wife : "؟"}
        </text>
      </g>
    </svg>
  </>
);

export const femaleNode = (nodeDatum, toggleNode) => (
  <>
    <svg x="-55" y="-3" xmlns="http://www.w3.org/2000/svg" onClick={toggleNode}>
      <g>
        <circle r="30" fill="#ff7071" cx="30" cy="30" />
        <text
          x="29"
          y="29"
          font-family="Arial"
          font-size="20"
          text-anchor="middle"
          fill="black"
          dy=".3em"
        >
          {nodeDatum.name}
        </text>
      </g>
    </svg>

    <svg x="5" xmlns="http://www.w3.org/2000/svg" onClick={toggleNode}>
      <g>
        <rect width="50" height="50" fill="#58a6ff"></rect>
        <text
          x="20"
          y="30"
          font-family="Arial"
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
