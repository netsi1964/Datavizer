import * as d3 from "d3"

export const interpolationFunctions = {
  linear: d3.curveLinear,
  step: d3.curveStep,
  stepBefore: d3.curveStepBefore,
  stepAfter: d3.curveStepAfter,
  basis: d3.curveBasis,
  cardinal: d3.curveCardinal,
  catmullRom: d3.curveCatmullRom,
  monotoneX: d3.curveMonotoneX,
  monotoneY: d3.curveMonotoneY,
  natural: d3.curveNatural,
}
export const interpolationFunctionOptions = Object.keys(interpolationFunctions)

export const chartTypes = {
  line: {
    fields: [
      { label: "Chart width", id: "width", initialValue: 900 },
      { label: "Chart height", id: "height", initialValue: 300 },
      { label: "Line width", id: "lineWidth", initialValue: 3 },
      //   { label: "Is filled in", id: "lineWidth", initialValue: 3 },
    ],
    dimensions: ["x", "y"],
    dimensionFields: [
      { label: "interpolation", id: "interpolation", initialValue: interpolationFunctionOptions[0], options: interpolationFunctionOptions },
    ]
  },
  bars: {
    fields: [
      { label: "Chart width", id: "width", initialValue: 900 },
      { label: "Chart height", id: "height", initialValue: 300 },
      { label: "Bar padding", id: "padding", initialValue: 1 },
    ],
    dimensions: ["sortBy", "y", "color"],
  },
  scatter: {
    fields: [
      { label: "Chart width", id: "width", initialValue: 900 },
      { label: "Chart height", id: "height", initialValue: 900 },
      { label: "Circle radius", id: "radius", initialValue: 15 },
    ],
    dimensions: ["x", "y", "color"],
  },
}
