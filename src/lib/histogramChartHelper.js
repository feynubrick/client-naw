import * as d3 from "d3";

const drawHistogram = props => {

  d3.selectAll('.histo-viz > g').remove();
  const {
    data
  } = props;

  // const data = [{
  //     "바른정당": 5,
  //     "자유한국당": 3,
  //     name: "0 ~ 10%",
  //   }, {
  //     "바른정당": 2,
  //     "자유한국당": 9,
  //     name: "11 ~ 20%",
  //   }, {
  //     "바른정당": 12,
  //     "자유한국당": 13,
  //     name: "21 ~ 30%",
  //   }, {
  //     "바른정당": 1,
  //     "자유한국당": 2,
  //     name: "31 ~ 40%",
  //   }, {
  //     "바른정당": 5,
  //     "자유한국당": 3,
  //     name: "41 ~ 50%",
  //   }, {
  //     "바른정당": 2,
  //     name: "51 ~ 60%",
  //   }, {
  //     "바른정당": 12,
  //     "자유한국당": 13,
  //     name: "61 ~ 70%",
  //   }, {
  //     "바른정당": 1,
  //     "자유한국당": 2,
  //     name: "71% ~ 80%",
  //   }, {
  //     "바른정당": 1,
  //     "자유한국당": 2,
  //     name: "81% ~ 90%",
  //   }, {
  //     "바른정당": 1,
  //     "자유한국당": 2,
  //     name: "91% ~ 100%",
  //   },
  //   {
  //     "바른정당": 1,
  //     "자유한국당": 2,
  //     billCount: "0~10"
  //   }
  // ];
  data["group"] = ["name", "count"]
  console.log(data, '!@#')
  const svg = d3.select("svg.histo-viz");
  let series = d3.stack().keys(data.group.slice(1))(data);
  const margin = {
    top: 10,
    right: 10,
    bottom: 20,
    left: 20
  };
  const height = 400;
  const width = 600;
  console.log(width);
  let y = d3
    .scaleLinear()
    .domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
    .rangeRound([height - margin.bottom, margin.top]);
  let x = d3
    .scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const legend = svg => {
    const g = svg
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
      .attr("transform", `translate(${width - margin.right},${margin.top})`)
      .selectAll("g")
      .data(series.slice().reverse())
      .join("g")
      .attr("transform", (d, i) => `translate(0,${i * 20})`);

    g.append("rect")
      .attr("x", -19)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", d => color(d.key));

    g.append("text")
      .attr("x", -24)
      .attr("y", 9.5)
      .attr("dy", "0.35em")
      .text(d => d.key);
  };

  const color = d3
    .scaleOrdinal()
    .domain(series.map(d => d.key))
    .range(
      d3
      .quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), series.length)
      .reverse()
    )
    .unknown("#ccc");

  const yAxis = g =>
    g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, "s"))
    .call(g => g.selectAll(".domain").remove());

  const xAxis = g => {
    return g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .call(g => g.selectAll(".domain").remove())
  }

  svg
    .append("g")
    .selectAll("g")
    .data(series)
    .join("g")
    .attr("fill", d => color(d.key))
    .selectAll("rect")
    .data(d => d)
    .join("rect")
    .attr("x", (d, i) => x(d.data.name))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth());

  svg.append("g").call(xAxis);

  svg.append("g").call(yAxis);

  svg.append("g").call(legend);

  svg.node();
};

export default drawHistogram;