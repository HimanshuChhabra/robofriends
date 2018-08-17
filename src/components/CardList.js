import React from 'react'
import Card from './Card'

const CardList =  (props) => {
    const robots = props.robots;
    const cards = robots.map( (robo,i) => {
        return (<Card 
                id={robo.id} 
                name={robo.name} 
                email={robo.email}
                />
    );
 })

    return (
     <div>
        {cards}
     </div>
    );
}

export default CardList;

// entire code can be written inside the CardList return , but this is a cleaner code
