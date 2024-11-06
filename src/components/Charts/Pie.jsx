import {
  AccumulationSeriesCollectionDirective,
   AccumulationSeriesDirective,
   AccumulationChartComponent,
   AccumulationLegend, 
   PieSeries,AccumulationDataLabel,
   AccumulationTooltip,
   Inject,
} from "@syncfusion/ej2-react-charts";


import { useStateContext } from "../../contexts/contextProvider";

const Pie = ({id, data, legendVisibity, height}) => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
    id={id}
    legendSettings={{
      visible: legendVisibity,
      background:'fff',
      
    }}
    height={height}
    tooltip={{enable:true}}
    background={currentMode === "Dark" ? "#33373E" : "#fff"}
    

  >
    <Inject services={[AccumulationLegend,
      PieSeries, AccumulationDataLabel,AccumulationTooltip
    ]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective 
      name="Sale"
      dataSource={data}
      xName="x"
      yName="y"
      innerRadius="40%"
      startAngle={0}
      endAngle={360}
      radius="70%"
      explodeInsex={2}
      dataLabel={{
        visible:true,
        name:'text',
        position: 'Inside',
        font:{
          fontWeight:'600',
          color: '#fff'
        }
      }}
      />
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  )
}

export default Pie