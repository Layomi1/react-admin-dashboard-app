import {
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  ChartComponent,

  SplineAreaSeries
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
      <Header category="Charts" title="Area Chart" />
      <div className="w-full mt-10">
        <ChartComponent
        id="charts"
        primaryXAxis ={areaPrimaryXAxis}
        primaryYAxis ={areaPrimaryYAxis}
        chartArea={{border:{width:0}}}
        background={currentMode === 'Dark'? '#33373E' : '#fff'}
        legendSettings={{background: 'white'}}
        title="Inflation Rate in Percentage"
        

        >
          <Inject services={[SplineAreaSeries,DateTime, Legend, ]}/>
          { <SeriesCollectionDirective>
            {areaCustomSeries.map( (item,index)=> <SeriesDirective key={index} {...item}/>)}
          </SeriesCollectionDirective> }
        </ChartComponent>
       
      </div>
    </div>
  );
};

export default Area;
