
import Chart from "react-apexcharts";

const RadialBarChart = () => {
  const chartOptions = {
    series: [27.61], 
    options: {
      chart: {
        type: "radialBar" as const
      },
      plotOptions: {
        radialBar: {
            startAngle: -185,
            endAngle: 225,
          hollow: {
            size: "50%", 
          },
          track: {
            background: '#1a1b23', // Set your background color
            strokeWidth: '95%',
            margin: 0, 
            dropShadow: {
              enabled: true,
              top: 0,
              left: 0,
              blur: 30,
              opacity: 0.5,
              color: 'rgba(158, 193, 255, 0.3)' 
            }
          },
          dataLabels: {
            show: true,
            value: {
              show: true,
              fontSize: "20px",
              color: "#fff",
              offsetY: -18
            },
            name: {
              show: true,
              fontSize: "16px",
              color: "#fff",
              offsetY: 18,
            },
          },
        },
      },
      labels: ["Solid"], 
    },
  };

  return (
    <div
      className="radial-chart-container flex justify-center"
      style={{
        position: "relative",
        width: "100%",
        height: "350px", 
      }}
    >
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="radialBar"
        height="100%" // Ensure the chart takes up the full height of the container
        width="100%"  // Ensure the chart takes up the full width of the container
      />
    </div>
  );
};

export default RadialBarChart;
