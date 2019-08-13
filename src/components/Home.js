import React, {Component} from 'react';
import SubHeader from './SubHeader';

class Home extends Component {
   
    render(){
        return(
           <div className="home-component">
               <SubHeader name="Home"/>
           </div>
        )
    }
}

export default Home;