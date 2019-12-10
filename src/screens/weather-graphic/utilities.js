export function formatLayeredChartData(data) {
  const formattedData = data.map(d => {
    return {
      description: d.description,
      label: d.day.slice(0, 2),
      x: d.day,
      y1: d.highTemp,
      y2: d.lowTemp
    };
  });

  return formattedData;
}

export function formatSimpleChartData(data) {
  if(data === null) return [];
    return [
      {
        colors: ["#003163", "#1796CD", "#AFDDEE"],
        label: 'Chance of Rain',
        x: data.description.iconName,
        y: data.chanceOfRain
      },
      {
        colors: ["#93CFDA", "#F0C462", "#F27346"],
        label: 'Humidity',
        x: "ios-water",
        y: data.humidity
      }
    ];
  }