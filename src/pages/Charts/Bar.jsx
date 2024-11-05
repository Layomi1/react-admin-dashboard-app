import {
  Chart,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Category, Tooltip, DataLabel,
  ChartComponent,
  BarSeries
  
} from "@syncfusion/ej2-react-charts";

import {
  barChartData,
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
  
} from "../../data/dummy";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/contextProvider";

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl" >
      <Header category="chart" title='Bar Chart'/>
      <div className="w-full mt-10">
        <ChartComponent
          id="charts"
          height="420px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          tooltip={{ enable: true }}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "fff" }}
         
         
        >
          <Inject services={[ DateTime, Legend,Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {
              barCustomSeries.map((index, item)=> (
                <SeriesDirective key={index} {...item}/>
              ))
            }
           
            
          </SeriesCollectionDirective>
         
        </ChartComponent>
      </div>
    </div>
  
  );
};

export default Bar;
