import {Header, Stacked as StackedChart} from "../../components"

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="chart" title="Stack Chart" />
      <div className="w-full mt-10  mx-auto">
        <StackedChart width='100%' height='420px'/>
      </div>
    </div>
  );
};

export default Stacked;
