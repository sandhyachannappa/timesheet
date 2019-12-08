import React,{useContext} from 'react';
import { ThemeContext } from './ThemeContext';
const test = () => {
    const test = useContext(ThemeContext)
    console.log(text)
    return (  
     <React.Fragment>
         {test}
     </React.Fragment>
    );
}
 
export default test;

