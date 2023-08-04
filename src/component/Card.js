import React,  from "react";
//import Images from "../images";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Card.css"

const Card = ({ Menudata }) => {

    return (
        <>
            {
                Menudata.map((curentElement, Index) => {
                    const { id, image, name, category, price, description } = curentElement;
                    return (
                        <>
                            <div >
                                <div className="CardOuter">
                                    {/* <h5>{id}</h5> */}

                                    <h2 className="title">{name} <span className="SubText">({category})</span></h2>
                                    <img src={image} alt="..." height={200} width={220} />

                                    <p>{description}</p>
                                    <div className="ButtonGroup">
                                        <button className="btn btn-primary" style={{ alignSelf: "center", backgroundImage: "linear-gradient(red, red)" }}>{price}</button>

                                        <button className="btn btn-primary" style={{ width: "fit-content", alignSelf: "center" }}>Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                        </>
                    );
                }
                )
            }
        </>

    );
}



export default Card;


