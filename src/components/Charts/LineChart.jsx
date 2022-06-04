import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

const LineChart = () => {
  const { currentMode } = useStateContext();

  const labelStyle = {
    labelStyle: { color: currentMode === "Dark" ? "#fff" : "#686868" },
  };

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={{ ...LinePrimaryXAxis, ...labelStyle }}
      primaryYAxis={{ ...LinePrimaryYAxis, ...labelStyle }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{
        textStyle: {
          color: currentMode === "Dark" ? "#fff" : "#33373E",
        },
      }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => {
          const themeFill =
            index === 1
              ? {
                  fill: currentMode === "Dark" ? "#fff" : "#686868",
                }
              : {};
          return <SeriesDirective key={index} {...item} {...themeFill} />;
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
