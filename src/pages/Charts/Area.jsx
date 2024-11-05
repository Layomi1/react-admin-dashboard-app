import {
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  ChartComponent,
  SplineAreaSeries,
  SplineSeries,
  
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
  
} from "../../data/dummy";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/contextProvider";

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Inflation Rate in Percentage" />
      <div className="w-full mt-10">
       
      </div>
    </div>
  );
};

export default Area;
