import * as d3 from "d3";

const w = 600;
const h = 300;
const outerRadius = w / 2 / 2;
const innerRadius = w / 2 / 6;
var legendRectSize = 15; // defines the size of the colored squares in legend
var legendSpacing = 6; // defines spacing between squares

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
    .select(`#${props.name}`)
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

  var color = props.colors
    ? d3.scaleOrdinal(props.colors)
    : d3.scaleOrdinal(d3.schemeCategory10);

  arcs
    .append("path")
    .attr("fill", (d, i) => color(i))
    .attr("d", arc);

  var legend = svg
    .selectAll(".legend") // selecting elements with class 'legend'
    .data(color.domain()) // refers to an array of labels from our dataset
    .enter() // creates placeholder
    .append("g") // replace placeholders with g elements
    .attr("class", "legend") // each g is given a legend class
    .attr("transform", function(d, i) {
      var height = legendRectSize + legendSpacing; // height of element is the height of the colored square plus the spacing
      var offset = (height * color.domain().length) / 2; // vertical offset of the entire legend = height of a single element & half the total number of elements
      var horz = 2 * outerRadius + 20; // the legend is shifted to the left to make room for the text
      var vert = i * height + 20; // the top of the element is hifted up or down from the center using the offset defiend earlier and the index of the current element 'i'
      return "translate(" + horz + "," + vert + ")"; //return translation
    });

  legend
    .append("rect") // append rectangle squares to legend
    .attr("width", legendRectSize) // width of rect size is defined above
    .attr("height", legendRectSize) // height of rect size is defined above
    .style("fill", color) // each fill is passed a color
    .style("stroke", color); // each stroke is passed a color

  legend
    .append("text")
    .attr("x", legendRectSize + legendSpacing)
    .attr("y", legendRectSize - legendSpacing)
    .text(function(d, i) {
      return props.titles[i];
    }); // return label

  arcs
    .append("text")
    .attr("transform", d => `translate(${arc.centroid(d)})`)
    .attr("text-anchor", "middle")
    .text(d => d.value);

  // arcs.on("click", (d, i) => {
  //   props.onClick(d, i);
  // });
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
