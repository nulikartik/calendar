import React,{ Component } from 'react';

class DateBlock extends Component{
    render(){
        const date = this.props.date;
        const color = this.props.color;
        const style = {
            background: color
        };
        
        return(
            
            <div style={style} className="dateBlock">{date}</div>
            
        );
    }
}

export default DateBlock;

