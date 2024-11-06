


import { Header, Pie as PieChart} from "../../components";
import { pieChartData } from "../../data/dummy";


const Pie = () => {
 

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie" title="Project Cost Breakdown"  />
      <div className="w-full mt-10 relative">
        <PieChart id='chart-pie' data={pieChartData} height="full" legendVisibity  />
      </div>
    </div>
  );
};
export default Pie;
