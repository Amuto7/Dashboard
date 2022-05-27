import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();

const initialState = {
  Chat: false,
  Cart: false,
  UserProfile: false,
  Notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, SetisClicked] = useState(initialState);
  const [screenSize, setscreenSize] = useState();
  const [currentColor, setcurrentColor] = useState("#03C9D7");
  const [currentMode, setcurrentMode] = useState("light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setcurrentMode(e.target.value);

    localStorage.setItem("theme", e.target.value);

    setThemeSettings(false);
  };
  const setColor = (e) => {
    setcurrentColor(e);

    localStorage.setItem("color", e);

    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    SetisClicked({ ...initialState, [clicked]: true });
  };
  const handleClose = (e) => {
    SetisClicked({ ...initialState, [e]: false });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        SetisClicked,
        handleClick,
        screenSize,
        setscreenSize,
        setColor,
        setMode,
        currentMode,
        currentColor,
        setThemeSettings,
        themeSettings,
        handleClose,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
