import {Header} from '../../components'
import {
  ChartComponent,
  Tooltip,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Legend,
  ColumnSeries,
  DataLabel
} from "@syncfusion/ej2-react-charts";
import {
 barPrimaryXAxis,
  barCustomSeries,
  barPrimaryYAxis,
  barChartData
} from "../../data/dummy";

const Bar = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Charts" title="Bar" />
      <div className='full mx-auto '>
      <ChartComponent
      id="charts"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{background:'white'}}
    >
      <Inject services={[ColumnSeries,Legend, Tooltip, Category, DataLabel]} />
      <SeriesCollectionDirective >
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item}  />
        ))}

      </SeriesCollectionDirective >
    </ChartComponent>
      </div>
   
      </div>
   
  );
};

export default Bar;
