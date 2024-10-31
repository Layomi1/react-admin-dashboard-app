import {GridComponent, ColumnDirective, ColumnsDirective, Page, Inject, Sort, Edit, Selection,Toolbar,Filter} from '@syncfusion/ej2-react-grids';

 import {customersData, customersGrid} from "../data/dummy";

import {Header} from '../components' 


const Customers = () => {
  // const editOptions ={allowEditing:true, allowDeleting: true, allwoAdding:true}

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
      <Header category='Page' title=
    'Custmers'/>
    <GridComponent  
    dataSource={customersData}
    allowPaging
    allowFiltering
    toolbar={['Delete']}
    editSettings={{allowEditing:true, allowDeleting: true, allwoAdding:true}}
    
    >
      <ColumnsDirective>
        {
          customersGrid.map((item,index) =>(
            <ColumnDirective key={index} {...item}/>
          ))
        }
      </ColumnsDirective>
      <Inject services={[Page,  Edit,Selection, Filter,Sort,Toolbar]}/>
    </GridComponent>
    </div>
  )
}

export default Customers