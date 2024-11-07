import { act, createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

const IntialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] =useState(IntialState);
  const [screenSize, setScreenSize] = useState(undefined)

  const [currentColor, setCurrentColor] =useState('#03C9D7');
  const [currentMode, setCurrentMode] =useState('Light');
  const [themeSettings, setThemeSettings] =useState(false);

// set Mode
  const setMode= (e) =>{
    setCurrentMode(e.target.value);
   
    localStorage.setItem('themeMode', e.target.value);
  }

  // set color
  const setColor= (color) =>{
  
    setCurrentColor(color);

    localStorage.setItem('colorMode', color);
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleClick = (clicked) =>{
    setIsClicked({...IntialState, [clicked]:true})
  }
 
  return (
    <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize,currentColor, setColor, setMode, themeSettings, setThemeSettings, currentMode}}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
