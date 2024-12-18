import {
  SeriesCollectionDirective,
  Inject,
  Legend,
  Tooltip,
  ChartComponent,
  Category,
  ColumnSeries,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";

import {
  colorMappingData,
  rangeColorMapping,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/contextProvider";

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />
      <div className="w-full mt-10">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          tooltip={{ enable: true }}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{
            mode: "Range",
            background: "fff",
          }}
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
            {rangeColorMapping.map((index, item) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
