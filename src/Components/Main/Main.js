import React from 'react'
import LeftMain from './LeftMain'
import RightMain from './RightMain'

export default function Main(){
    return(
        <>
            <div className="Container row">
                <div className="col p-4 mx-4">
                    <LeftMain/>
                </div>
                <div className="col p-4 mx-2">
                    <RightMain/>
                </div>
            </div> 
            <div className="box" style={{"marginBottom":"10%"}} >
                <h3 className= "position-absolute mx-4">"That's the thing about books. They let 
                <br/> you travel without moving your feet."</h3>
                <div style={{"marginLeft":"40%","float":"left","height":"120px", "borderRight": "3px solid grey"}}>     
                    <p/>
                </div>
                <div className="my-4 mx-2 p-1" style={{"float":"left","height":"120px", "borderRight": "3px solid grey"}}> 
                    <p/>
                </div>
                <h1 className="display-4 p-4 text-left">Every Book<br/> Personally chooses.</h1>
            </div>       
        </>
    )
}

                    
            