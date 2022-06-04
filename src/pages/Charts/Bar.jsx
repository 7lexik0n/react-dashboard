import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  DataLabel,
  Tooltip,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

const Bar = () => {
  const { currentMode } = useStateContext();
  const labelStyle = {
    labelStyle: { color: currentMode === "Dark" ? "#fff" : "#686868" },
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Olympic Medals" />
      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          primaryXAxis={{ ...barPrimaryXAxis, ...labelStyle }}
          primaryYAxis={{ ...barPrimaryYAxis, ...labelStyle }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{
            textStyle: {
              color: currentMode === "Dark" ? "#fff" : "#33373E",
            },
          }}
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
