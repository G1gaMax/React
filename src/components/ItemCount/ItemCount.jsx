import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCount = ({initial,stock,onAdd}) => {


    const [count,setCount] = useState(initial)

    const increment = () => {
        if(count<stock){
            setCount(count+1)
        }
    }

    const decrement = () => {
        if(count>initial){
            setCount(count-1)
        }
    }
    return (
        <div>
            <p>{count}</p>
            
            <ButtonGroup size= "sm "aria-label="Basic example" className="m-2">
                <Button  onClick={increment} variant="primary">+</Button>
                <Button  onClick={() => { onAdd(count) }} variant="primary">Add</Button>
                <Button  onClick={decrement} variant="primary">-</Button>
            </ButtonGroup>
          
        </div>
    );
};

export default ItemCount;