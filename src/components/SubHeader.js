import React, {Component} from 'react';

class SubHeader extends Component {
    render(){
        return(
           <div className="subheader">
               <h3 className="text-center">{this.props.name}</h3>
           </div>
        )
    }
}

export default SubHeader;