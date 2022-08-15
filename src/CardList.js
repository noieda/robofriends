import React from "react";
import Card from "./Card";

// import { robots } from './robot';

const CardList = ({ robots }) => {

    // const cardComponents = robots.map((user, i) => {
    //     return (
    //         <Card 
    //         key={robots[i].id} 
    //         id={robots[i].id} 
    //         name={robots[i].name} 
    //         email={robots[i].email}
    //         />    
    //     )
    // })

    return (
        <div>
            {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/> */}
            {/* {cardComponents} */}
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        key={robots[i].id} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />    
                    )
                })
            }
        </div>
    )
}

export default CardList