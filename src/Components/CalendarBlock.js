import React,{ Component } from 'react';
import DateBlock from './DateBlock';

class CalendarBlock extends Component{
    constructor(props){
        super(props); 
    }
    render(){
        const fromDate = this.props.startDate;
        var range = this.props.range;
        const endDate = this.props.toDate;
        const day = this.props.day;
        const month = this.props.month;
        const getMonth = this.props.getMonth;
        const countryCode = this.props.countryCode;

        var holidays =[[1,5,9,11,17,22],[2,7,12,22],[4,15,17,22],[14,2,26],[16,7,28,21],[12,22,23,4],[2,6,14,25],[23,7,11,22],[4,15,17,22],[14,2,26],[16,7,28,21],[12,22,23,4]];

        if(countryCode != "1"){
            holidays =[[3,9,15,22,26],[1,8,14,28],[2,16,19,24],[7,17,27],[2,4,17,27],[12,5,23,14],[22,16,4,5],[3,17,21,22],[14,5,7,26],[4,12,25],[6,17,25,21],[8,18,28,4]];
        }

        console.log("CalendarBlock ", this);console.log("Day: ",day);
        const calBlock = [];
        calBlock.push(<DateBlock date={"S"} color={"orange"}/>);
        calBlock.push(<DateBlock date={"M"} color={"orange"}/>);
        calBlock.push(<DateBlock date={"T"} color={"orange"}/>);
        calBlock.push(<DateBlock date={"W"} color={"orange"}/>);
        calBlock.push(<DateBlock date={"T"} color={"orange"}/>);
        calBlock.push(<DateBlock date={"F"} color={"orange"}/>);
        calBlock.push(<DateBlock date={"S"} color={"orange"}/>);
        calBlock.push(<br className='lclear' />);
        var count = 0;console.log("From date:",fromDate);
        const currentMonth = holidays[getMonth];
        for(var i=1; i<=endDate; i++){
            if(count == 7){
                calBlock.push(<br className='lclear' />);count=0;
            }
            if(i >= fromDate && range>0){
                if(currentMonth.includes(i)){
                    calBlock.push(<DateBlock date={i} color={"red"}/>);
                }
                else  if(count ==0 || count==6){
                    calBlock.push(<DateBlock date={i} color={"yellow"}/>);
                }else{
                    calBlock.push(<DateBlock date={i} color={"green"}/>);
                }
                
                count++;console.log("hit hit hit");range--;
            }else{
                calBlock.push(<DateBlock date={i} color={"#696969"}/>);
                count++;
            }
        }
        return(
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{month}</h5>
                        <p className="card-text">{calBlock}<br className="lclear" /></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CalendarBlock;

        
