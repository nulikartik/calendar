import React,{ Component } from 'react';
import CalendarBlock from './CalendarBlock'

class CalendarGroup extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var date = new Date(this.props.date);
        var startDate = date.getDate();//08
        var fromMonth = date.getMonth();//04
        var range = this.props.range;//23
        var dupRange = range;
        var year = date.getFullYear();
        const countryCode = this.props.countryCode;
       
        var months = ["Januay","February","March","April","May","June","July","August","September","October","November","December"];
        
        var monthDates = [31,28,31,30,31,30,31,31,30,31,30,31];
        if(year%4==0 && year%100!=0 || year%400==0){
            monthDates = [31,29,31,30,31,30,31,31,30,31,30,31];
        }
        var cal = [];
        var check = true;
        var endDate = monthDates[fromMonth];//30
        var sum = startDate + parseInt(range,10); //31
        console.log("Sum: ",sum);
        console.log("Range: ",range);
        console.log("fromMOnth",fromMonth);
        if(sum >= endDate){console.log("DaUpdated",date);
            cal.push(<CalendarBlock countryCode={countryCode} startDate={startDate} toDate={endDate} range={range} day={date.getDay()} month={months[fromMonth]+" - "+year} getMonth={fromMonth} />);
            range -= endDate - startDate;
            date.setDate(date.getDate() + endDate - startDate);
        }
        else{console.log("Booyah: ",range);
            cal.push(<CalendarBlock countryCode={countryCode} startDate={startDate} toDate={endDate} range={range} day={date.getDay()} month={months[fromMonth]+" - "+year} getMonth={fromMonth}/>);
            range = 0;
        }
        while(range > 0){
            year = date.getFullYear();
            monthDates = [31,28,31,30,31,30,31,31,30,31,30,31];
            if(year%4==0 && year%100!=0 || year%400==0){
                monthDates = [31,29,31,30,31,30,31,31,30,31,30,31];
            }
            if(fromMonth == 11){
                fromMonth=0;
            }
            else{
            fromMonth++;
            }
            var nextMonthDays = monthDates[fromMonth];
            if(range >= nextMonthDays){console.log("DaUpdated",date);
                cal.push(<CalendarBlock countryCode={countryCode} startDate={1} toDate={nextMonthDays} range={range} day={date.getDay()} month={months[fromMonth]+" - "+year} getMonth={fromMonth}/>);
                range -= nextMonthDays;
                date.setDate(date.getDate() + nextMonthDays);
            }
            else{
                cal.push(<CalendarBlock countryCode={countryCode} startDate={1} toDate={nextMonthDays} range={range} day={date.getDay()} month={months[fromMonth]+" - "+year} getMonth={fromMonth}/>);
                range = 0;
            }
        }
        
        
        return(
            <div class="container">
                <div class="row" align="center">
                    {cal}
                </div>
            </div>
        );
    }
}

export default CalendarGroup