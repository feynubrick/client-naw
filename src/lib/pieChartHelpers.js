import * as d3 from "d3";

const w = 300;
const h = 300;
const outerRadius = w / 2;
const innerRadius = w / 6;

const draw = props => {
  var pie = d3
    .pie()
    .sortValues(null)
    .sort(null);

  var arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  var svg = d3
    .selectAll(".viz")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  var arcs = svg
    .selectAll("g.arc")
    .data(pie(props.dataSet))
    .enter()
    .append("g")
    .attr("class", "arc")
    .attr("transform", `translate(${outerRadius}, ${outerRadius})`);

  var color = d3.scaleOrdinal(d3.schemeCategory10);

  arcs
    .append("path")
    .attr("fill", (d, i) => color(i))
    .attr("d", arc);

  // arcs
  //   .append("text")
  //   .attr("transform", d => `translate(${arc.centroid(d)})`)
  //   .attr("text-anchor", "middle")
  //   .text(d => d.value);

  arcs.on("click", (d, i) => {
    props.onClick(d, i);
  });
};

const update = props => {
  console.log(`data updated to ${props.data}`);
  var pie = d3
    .pie()
    .sortValues(null)
    .sort(null);

  var arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  var svg = d3.selectAll("svg");

  var color = d3.scaleOrdinal(d3.schemeCategory10);
  var arcs = svg
    .selectAll("g.arc")
    .data(pie(props.data))
    .transition()
    .duration(100)
    .select("path")
    .attr("fill", (d, i) => color(i))
    .attr("d", arc);
};

export { draw, update };
