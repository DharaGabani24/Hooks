import React,{useState} from 'react'

export default function Form() {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]); 
  
   const submitForm = () => {
    const newEntry = {email: email, password: password};

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
   }
  
  
  return (
    <div className='container' style={{backgroundColor:'pink'}}>
    <form action='' onSubmit={submitForm} >
    <div>
      <label htmlFor='email'>Email</label>
      <input type="text" name="email" id='email' autoComplete='off'
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      />
    </div>
    
    <div>
    <label htmlFor='password'>Pasword</label>
    <input type="password" name="password" id='password' autoComplete='off'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
  </div>
   
   <button type="submit">login</button>
</form>
</div>
  )
}
