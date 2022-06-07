import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ width, height }) => {
  const { currentColor, currentMode } = useStateContext();

  const labelStyle = {
    labelStyle: { color: currentMode === "Dark" ? "#fff" : "#686868" },
    titleStyle: {
      color: currentMode === "Dark" ? "#fff" : "#686868",
    },
  };

  return (
    <ChartComponent
      width={width}
      height={height}
      id="stack-chart"
      primaryXAxis={{ ...stackedPrimaryXAxis, ...labelStyle }}
      primaryYAxis={{ ...stackedPrimaryYAxis, ...labelStyle }}
      chartArea={{
        border: {
          width: 0,
        },
      }}
      tooltip={{
        enable: true,
      }}
      legendSettings={{
        textStyle: {
          color: currentMode === "Dark" ? "#fff" : "#33373E",
        },
      }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[Tooltip, Legend, Category, StackingColumnSeries]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective
            key={index}
            {...item}
            fill={index === 0 ? currentColor : "#404041"}
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
