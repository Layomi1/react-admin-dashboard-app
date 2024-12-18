import {GridComponent, ColumnDirective,ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit,Inject} from '@syncfusion/ej2-react-grids';
import {ordersData, ordersGrid} from '../data/dummy';
import {Header} from '../components';

const Orders = () => {
  return (
  
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title=
    'Orders'/>
    <GridComponent id={ordersGrid} dataSource={ordersData}
    allowPaging
    allowSorting= {true}
    width='auto'
    
    >
      <ColumnsDirective>
        {
          ordersGrid.map((item,index) =>(
            <ColumnDirective key={index} {...item}/>
          ))
        }
      </ColumnsDirective>
      <Inject services={[Page, Resize, Sort, ContextMenu, Filter, ExcelExport, PdfExport, Edit]}/>
    </GridComponent>
    </div>
  )
}

export default Orders