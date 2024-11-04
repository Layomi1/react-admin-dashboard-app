import {Chart, SeriesCollectionDirective, SeriesDirective, Inject, DateTime,Legend, Tooltip, ChartComponent, LineSeries} from '@syncfusion/ej2-react-charts';

import {lineChartData, LinePrimaryXAxis, LinePrimaryYAxis, lineCustomSeries} from '../../data/dummy';
import { useStateContext } from '../../contexts/contextProvider';

const LineChart = () => {
  const {currentMode}=useStateContext();

  return (
    <ChartComponent
      id='line-chart'
      height= "420px"
      primaryXAxis = {LinePrimaryXAxis}
      primaryYAxis = {LinePrimaryYAxis}
      chartArea = {{border: {width: 0}}}
      tooltip ={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{background :"fff"}}
    >
      <Inject services={[LineSeries, Tooltip, DateTime, Legend]}/>
      <SeriesCollectionDirective >
        {
          lineCustomSeries.map(( item,index) => (<SeriesDirective key={index} {...item}/>))
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart