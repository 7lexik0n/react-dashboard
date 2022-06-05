import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  Category,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Financial = () => {
  const { currentMode, currentColor } = useStateContext();

  const labelStyle = {
    labelStyle: { color: currentMode === "Dark" ? "#fff" : "#686868" },
    titleStyle: {
      color: currentMode === "Dark" ? "#fff" : "#686868",
    },
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="AAPLE Historical" />
      <div className="w-full">
        <ChartComponent
          id="hilo-chart"
          primaryXAxis={{ ...FinancialPrimaryXAxis, ...labelStyle }}
          primaryYAxis={{ ...FinancialPrimaryYAxis, ...labelStyle }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{
            visible: true,
            textStyle: {
              color: currentMode === "Dark" ? "#fff" : "#33373E",
            },
          }}
        >
          <Inject
            services={[
              HiloSeries,
              Tooltip,
              Category,
              Crosshair,
              Zoom,
              Logarithmic,
              DateTime,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={financialChartData}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
              fill={currentColor}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
