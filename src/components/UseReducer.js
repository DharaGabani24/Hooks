import React,{useReducer} from 'react'

const initialState = 0;

const styles = {
    heading: {
      margin: "35px",
        },
  
  };
  

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT"){
        return state + 1;
    } 
    if (action.type === "DECREMENT"){
        return state - 1;
    }
    return state;
}

const UseReducer = () => {
    //const [count,setCount] = useState(0);
   const [state, dispatch] = useReducer(reducer, initialState);

const increment = () =>{
    dispatch({type: "INCREMENT"});
}

const decrement = () => {
    dispatch({type: "DECREMENT"});
}
  return (
    <>
    <div>
        <h1 className='heading' style={styles.heading}>{state}</h1>
        <div className ="btnStylePosition">
            <button className='btn btn-primary my-2 mx-2' onClick= {increment}>Increment</button><br/>
            <button className='btn btn-primary my-2 mx-2' onClick= {decrement}>Decrement</button>

        </div>
      
    </div>
    </>
  )
}

export default UseReducer
