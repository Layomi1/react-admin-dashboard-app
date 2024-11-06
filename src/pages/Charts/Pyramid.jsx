import {
  AccumulationSeriesCollectionDirective,
   AccumulationSeriesDirective,
   AccumulationChartComponent,
   AccumulationLegend, 
   PyramidSeries,AccumulationDataLabel,
   AccumulationTooltip,
   Inject,
} from "@syncfusion/ej2-react-charts";


import { useStateContext } from "../../contexts/contextProvider";
import { PyramidData } from "../../data/dummy";

const Pyramid = () => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
    id='charts'
    // legendSettings={{
    //   visible: legendVisibity,
    //   background:'fff',
      
    // }}
    height='420px'
    tooltip={{enable:true}}
    background={currentMode === "Dark" ? "#33373E" : "#fff"}
  >
    <Inject services={[AccumulationLegend,
      PyramidSeries, AccumulationDataLabel,AccumulationTooltip
    ]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective 
      name="Diets"
      dataSource={PyramidData}
      xName="x"
      yName="y"
     
      innerRadius="40%"
      startAngle={0}
      endAngle={360}
      radius="70%"
      explodeIndex={2}
      dataLabel={{
        visible:true,
        name:'text',
        position: 'Inside',
        font:{
          fontWeight:'600',
          color: '#fff'
        }
      }}
      type="Pyramid"
      />
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  )
}

export default Pyramid 