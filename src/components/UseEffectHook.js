import React,{useState, useEffect} from 'react'

const styles = {
  heading: {
    margin: "35px",
      },

};

const UseEffectHook = () => {

    const [count ,setCount] = useState(0);

    useEffect(() => {
        if(count >= 1){
        document.title= `Hooks (${count})`;
        }
        else{
            document.title="Hooks";
        }

    });

    const changeCount = () =>{
        setCount(count + 1);
    }
    console.log('dhara');
  return (
    
    <div>
      <h1 className='heading' style={styles.heading}>{count}</h1>
      <button className='btn btn-primary mx-2' onClick={changeCount}> No. of click</button>
    </div>
  )
}

export default UseEffectHook




