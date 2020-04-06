import React from 'react';
import {MyContext} from './App';

function Guest(){
    return(
        <div>
            <MyContext.Consumer>
                {(data) =>(
                    <div>
                       <h4> Name : {data.name}</h4>
                        <h4>Age : {data.age}</h4>
                    </div>
                ) }
            </MyContext.Consumer>
        </div>
    )
}

export default Guest;