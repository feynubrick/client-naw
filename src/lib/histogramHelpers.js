import * as d3 from "d3";

var margin = { top: 10, right: 30, bottom: 30, left: 40 },
  width = 800 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const draw = ({ name, dataSet }) => {
  var svg = d3
    .select(`#${name}`)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  var xMax = d3.max(dataSet);
  console.log("xMax: ", xMax);
  var modifier = 1;
  if (xMax <= 1) {
    modifier = 100;
    var x = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, width]);
  } else {
    x = d3
      .scaleLinear()
      .domain([0, xMax])
      .range([0, width]);
  }
  // var xMin = d3.min(dataSet) * 100;

  svg
    .append("g")
    .attr("class", "xaxis")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

  var histogram = d3
    .histogram()
    .value(d => d)
    .domain(x.domain())
    .thresholds(x.ticks(25));

  var bins = histogram(dataSet.map(x => x * modifier));

  var y = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(bins, d => d.length)]);
  svg
    .append("g")
    .attr("class", "yaxis")
    .call(d3.axisLeft(y));

  svg
    .selectAll(".bar")
    .data(bins)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", 1)
    .attr("transform", d => `translate(${x(d.x0)}, ${y(d.length)})`)
    .attr("width", d => x(d.x1) - x(d.x0) - 1)
    .attr("height", d => height - y(d.length))
    .style("fill", "#69b3a2");
};

const update = ({ name, dataSet }) => {
  console.log("now updating");
  var xMax = d3.max(dataSet);
  console.log("xMax: ", xMax);
  var modifier = 1;
  if (xMax <= 1) {
    modifier = 100;
    var x = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, width]);
  } else {
    x = d3
      .scaleLinear()
      .domain([0, xMax])
      .range([0, width]);
  }
  // var xMin = d3.min(dataSet) * 100;
  var svg = d3.select(`#${name}`);

  svg.select(".xaxis").call(d3.axisBottom(x));

  var histogram = d3
    .histogram()
    .value(d => d)
    .domain(x.domain())
    .thresholds(x.ticks(25));

  var bins = histogram(dataSet.map(x => x * modifier));

  var y = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(bins, d => d.length)]);
  svg.select(".yaxis").call(d3.axisLeft(y));

  svg
    .selectAll("rect.bar")
    .data(bins)
    .transition()
    .duration(1000)
    .attr("transform", d => `translate(${x(d.x0)}, ${y(d.length)})`)
    .attr("width", d => x(d.x1) - x(d.x0) - 1)
    .attr("height", d => height - y(d.length))
    .style("fill", "#69b3a2");

  // d3.select(".x.axis")
  //   .attr("transform", "translate(0," + height + ")")
  //   .call(xAxis);

  // d3.select(".y.axis")
  //   .attr("transform", "translate(0,0)")
  //   .call(yAxis);
};

export { draw, update };
