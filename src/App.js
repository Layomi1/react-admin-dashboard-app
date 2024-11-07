import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, Footer, ThemeSettings } from "./components";

import {
  Ecommerce,
  Orders,
  Calendar,
  Area,
  Line,
  Stacked,
  Pie,
  ColorPicker,
  Kanban,
  Bar,
  Editor,
  Financial,
  Pyramid,
  ColorMapping,
  Employees,
  Customers,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/contextProvider";
import { act } from "react-dom/test-utils";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          <div
            className={`dark:bg-secondary-dark-bg bg-main-bg min-h-screen  w-full flex-2
            }`}
          >
            <div className="relative  md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* Pages/> */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                {/* <Route path="/ecommerce" element={<Ecommerce/>}/> */}

                {/* apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
         {/* sidebar */}
         
           <div className={`absolute top-0 left-0  sidebar dark:bg-secondary-dark-bg bg-white h-full  w-72 ${activeMenu? 'block': 'hidden'}`}><Sidebar/></div> 
          
         
         {/* <div className={` absolute top-0 left-0  sidebar dark:bg-secondary-dark-bg bg-white h-full ${activeMenu ? 'w-72' : 'w-0'}`}>
         <Sidebar/>
            </div> */}
        
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
