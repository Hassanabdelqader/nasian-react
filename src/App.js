import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Developer } from "./components/Developer";
import JsonData from "./data/data.json";

import "./App.css"; 


const App = () => {
  const [infoStat, setinfoStat] = useState({});
  const [rand, setRand] = useState();
  useEffect(() => {
    setinfoStat(JsonData);
    setRand(Math.floor((Math.random() * 9)+1))
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={infoStat.Header} />
      <About data={infoStat.About} rand={rand}/>
      <Gallery data={infoStat.Gallery}/>
      <Developer />

    </div>
  );
};

export default App;
