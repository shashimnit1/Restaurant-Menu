
import React, { createContext, useState } from 'react';
import './App.css';
import Card from './component/Card';
import Menu from './component/MenuAPI';
import Nav from './component/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//Creating Array of Items from Array of Objects
const CategoryList = Menu.map((CurrentElement) => CurrentElement.category)
//Unique List Making
const UniqueList = [... new Set(CategoryList)]


const App=()=> {
  const [Menudata, SetMenuData] = useState(Menu);
  const [UniueCategory, SetUniqueCategory]=useState(UniqueList);

  const FilterMenu = (SelectedCategory) => {
    const FilterList = Menu.filter((CurrentElement) => { return (CurrentElement.category === SelectedCategory); })
    //console.log(FilterList);
    console.log("heelo")
    SetMenuData(FilterList);
  
  }
  
  return (
    <>

     <Nav FilterMenu={FilterMenu} UniueCategory={UniueCategory} SetMenuData={SetMenuData} />


      <div className='CardContainer'>
        <Card Menudata={Menudata} />
      </div>


    </>
  );
}

export default App;
