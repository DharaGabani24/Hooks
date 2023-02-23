import React , {useState,useRef} from 'react'


const styles = {
  text: {
    margin: "15px",
      },
};

const UseRefHook = () => {

  const surname = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const name = surname.current.value;
    name === "" ? alert("please fill the data") :setShow(true);
  }
  return (

    <div>
      <form action='' onSubmit={submitForm}>
        <div>
          <h2><label htmlFor='surname' className='text' style={styles.text}> Enter your name </label><br/></h2>
          <input type='text' className='text' style={styles.text} autocomplete='off' id='surname' ref={ surname }/>
          <br/>
        </div>
        <button className='btn btn-success mx-3'>Submit</button>

      </form>
      <h2 className='text' style={styles.text}>{ show ? `your name is ${surname.current.value}` : ""}</h2>
    </div>
    
    
  )
}

export default UseRefHook
