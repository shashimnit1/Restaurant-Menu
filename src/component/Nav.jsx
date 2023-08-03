import React from "react";
import "../App.css"
import Menu from "./MenuAPI";

const Nav = ({ FilterMenu, UniueCategory, SetMenuData }) => {

    return (
        <>
            <div className="NavBar">
                <center><text>Food-Menu</text></center>

                <div className='NavBarButtons'>
                    <button className="NavButton" onClick={() => SetMenuData(Menu)}> All Items </button>
                    {
                        UniueCategory.map((CurentElement) => {
                            return (
                                <button className="NavButton" onClick={() => FilterMenu(CurentElement)}>{CurentElement}</button>
                            );
                        })
                    }

                </div>
            </div>
        </>
    );
}
export default Nav;