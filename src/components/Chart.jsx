import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "areaspline",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false, // hide by default
        states: {
          hover: {
            enabled: true, // show on hover
            radius: 5, // optional: size of dot on hover
          },
        },
      },
    },
  },
  title: {
    text: "تحليل المشاركات والمفضلة",
    style: {
      color: "#1f2937", // Tailwind gray-800
      fontSize: "15px",
      fontWeight: "bold",
      fontFamily: "",
    },
    align: "right", // Options: left, center, right
    x: -5, // Horizontal offset
    y: 20, // Vertical offset
  },

  xAxis: {
    categories: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار"],
  },
  yAxis: {
    tickPoints: [0, 50, 100, 150],
    gridLineColor: "#d1d5db",
    gridLineWidth: 0.3,
    gridLineDashStyle: "Dash",
  },
  series: [
    {
      data: [24, 50, 101, 150, 142],
      color: "#fa5101",
      fillColor: "rgba(250, 80, 1, 0.13)",
    },
    {
      data: [30, 20, 19, 4, 12],
      color: "black",
      fillColor: "rgba(0, 0, 0, 0.07)",
    },
  ],
};

const Chart = () => (
  <div className="rounded-[10px] m-[8px] border-[0.1px] border-gray-200 overflow-hidden shadow-2xs">
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"chart"}
      options={options}
    />
  </div>
);

export default Chart;
