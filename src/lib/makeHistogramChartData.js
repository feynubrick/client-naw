export default function makeChartData(data, groupBy) {
  const result = [];
  result["attendanceRate"] = [];
  result["billCount"] = [];

  const billCountYDomain = data.reduce(
    (acc, curr) => {
      if (curr.billCount < acc.min) {
        acc.min = curr.billCount;
      }
      if (curr.billCount > acc.max) {
        acc.max = curr.billCount;
      }
      return acc;
    }, {
      min: Infinity,
      max: 0
    }
  );
  for (let i = 1; i < 11; i++) {
    result["attendanceRate"].push({
      name: `~ ${i}0%`
    });
    result["billCount"].push({
      name: `~ ${Math.floor(
            ((billCountYDomain.max - billCountYDomain.min) / 10) * i
          ) + billCountYDomain.min}`
    });
  }

  data.forEach(data => {
    const attendanceIndex = Math.floor(data.attendanceRate / 10) - 1;
    let billIndex =
      Math.floor(
        data.billCount /
        ((billCountYDomain.max - billCountYDomain.min) / 10)
      ) - 1;
    if (billIndex < 0) billIndex++;
    result["attendanceRate"][attendanceIndex]["count"] =
      result["attendanceRate"][attendanceIndex]["count"] || 0;
    result["attendanceRate"][attendanceIndex]["count"]++;

    result["billCount"][billIndex]["count"] =
      result["billCount"][billIndex]["count"] || 0;
    result["billCount"][billIndex]["count"]++;
  });
  return result;
}