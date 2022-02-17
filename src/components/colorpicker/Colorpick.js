import React,{Fragment}from 'react'

export default function Colorpick({myData}){
    const{pick,handlechange}=myData;
    return(
        <Fragment>
            <form>
                <input type="color" value={pick} onChange={handlechange}/>
            </form>
            <div style={{background:`${pick}`}} className='colorbtn'></div>
        </Fragment>
    )
}