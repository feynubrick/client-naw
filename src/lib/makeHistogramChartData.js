export default function makeChartData(data, groupBy) {
  const result = {
    attendanceRate: [],
    billCount: []
  };
  result.attendanceRate["group"] = ["name"];
  result.billCount["group"] = ["name"];

  const billCountYDomain = data.reduce(
    (acc, curr) => {
      if (curr.billCount < acc.min) {
        acc.min = curr.billCount;
      }
      if (curr.billCount > acc.max) {
        acc.max = curr.billCount;
      }
      return acc;
    },
    {
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
    const group = groupBy || "count";
    if (!result.attendanceRate["group"].includes(data[group])) {
      result.attendanceRate["group"].push(data[group]);
    }
    if (!result.billCount["group"].includes(data[group])) {
      result.billCount["group"].push(data[group]);
    }
    console.log(result.billCount["group"], "!");
    const attendanceIndex = Math.floor(data.attendanceRate / 10) - 1;
    let billIndex =
      Math.floor(
        data.billCount / ((billCountYDomain.max - billCountYDomain.min) / 10)
      ) - 1;

    if (billIndex < 0) billIndex++;

    result["attendanceRate"][attendanceIndex][data[group]] =
      result["attendanceRate"][attendanceIndex][data[group]] || 0;
    result["attendanceRate"][attendanceIndex][data[group]]++;

    result["billCount"][billIndex][data[group]] =
      result["billCount"][billIndex][data[group]] || 0;
    result["billCount"][billIndex][data[group]]++;
  });

  console.log(result);
  return result;
}
