import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
} from "@syncfusion/ej2-react-charts";

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../../data/dummy";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  const labelStyle = {
    labelStyle: { color: currentMode === "Dark" ? "#fff" : "#686868" },
    titleStyle: {
      color: currentMode === "Dark" ? "#fff" : "#686868",
    },
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="USA CLIMATE" />
      <div className="w-full">
        <ChartComponent
          id="color-charts"
          primaryXAxis={{ ...ColorMappingPrimaryXAxis, ...labelStyle }}
          primaryYAxis={{ ...ColorMappingPrimaryYAxis, ...labelStyle }}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{
            visible: true,
            mode: "Range",
            textStyle: {
              color: currentMode === "Dark" ? "#fff" : "#33373E",
            },
          }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
