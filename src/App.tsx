import Counter from "./components/Counter";
import { Routes, Route, Link } from "react-router-dom";
import "././styles/index.scss";
import { AboutPageAsync } from "./pages/About/About.async";
import { MainPageAsync } from "./pages/Main/Main.async";
import { Suspense, useState } from "react";
import { ThemeContext } from "./theme/ThemeContext";
import { useContext } from "react";
import { Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";




const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <>
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
    <button onClick={toggleTheme}>Toogle</button>
      <Link to={"/"}> Главная </Link>
      <Link to={"/about"}> О сайте </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />}></Route>
          <Route path={"/"} element={<MainPageAsync />}></Route>
        </Routes>
      </Suspense>
      <Counter />
    </div>
    </>
  );
};

export default App;

