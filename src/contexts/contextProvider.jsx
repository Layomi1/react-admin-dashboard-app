import { act, createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

const IntialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] =useState(IntialState);
  const [screenSize, setScreenSize] = useState(undefined)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleClick = (clicked) =>{
    setIsClicked({...IntialState, [clicked]:true})
  }
  
 
  return (
    <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize}}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
