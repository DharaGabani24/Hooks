import React,{useContext} from 'react';
import  {BioData} from './ComA';

const ComC = ({name}) => {
    const fullName = useContext(BioData);
    return <h1> Hello from { fullName }</h1>
  
}

export default ComC
