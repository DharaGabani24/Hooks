import React from 'react';

const UsestateArray = () => {

    const bioData =[
        {
            id:0, myName:"Dhara", Age:21
        }, {
            id:1, myName:"Ridham", Age:20
        }
    ]
    console.log(bioData);
  return (
   <>

    {
        bioData.map((curElm) => {
            return <h1 style={{backgroundColor:'pink'}}className='h1style'>Name: {curElm.myName} & Age:{curElm.age}</h1>
        })
    }       
   </>  
  )
}

export default UsestateArray
