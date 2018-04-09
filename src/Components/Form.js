import React,{ Component } from 'react';
import CalendarGroup from './CalendarGroup';
import DateBlock from './DateBlock';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            date : "",
            formCal : [],
            range: 0,
            countryCode: "US"
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleRangeChange = this.handleRangeChange.bind(this);
        this.handleCountryCodeChange = this.handleCountryCodeChange.bind(this);
    }

    handleDateChange(event){
        console.log("hit change");
        this.setState({date: event.target.value});
    }

    submitForm(event){
        console.log("hit submit ",this.state.date);
        var updateCal = [<CalendarGroup date={this.state.date} range={this.state.range} countryCode={this.state.countryCode} />]
        this.setState({formCal : updateCal});
        event.preventDefault();
    }

    handleRangeChange(event){
        this.setState({range: event.target.value});
    }

    handleCountryCodeChange(event){
        this.setState({countryCode: event.target.value});
    }

    render(){
        
        return(
            <div class="container">
            <div class="row">
                <div className="col-sm-9">
                        <form onSubmit={this.submitForm} className="App-form">
                        <div class="form-group">
                            <label>
                                Enter Desired From Date: </label>
                                <input required type="date" value={this.state.date} className="form-control" onChange={this.handleDateChange} />
                        
                        </div>
                        <div class="form-group">
                            <label>
                                Enter Number of Days(Range): </label>
                                <input required type="number" min="1" value={this.state.range}  className="form-control" onChange={this.handleRangeChange} />
                        
                        </div>
                        <div class="form-group">
                            <label>
                                Country code: </label>
                                {/* <input type="text"   className="form-control"  /> */}
                                <select class="custom-select" value={this.state.countryCode} onChange={this.handleCountryCodeChange} required>
                                    <option selected value="">Select Country Code:</option>
                                    <option value="1">US</option>
                                    <option value="2">IND</option>
                                </select>
                        </div>
                        <div className="lclear" />
                            <input type="Submit" value="Submit"  className="btn btn-info" />
                        </form>
                    </div>
                    <div className="col-sm-3">
                    <br/>
                        <DateBlock date={""} color={"red"}/> <p> &nbsp;- Holidays</p>
                        <DateBlock date={""} color={"yellow"}/> <p> &nbsp;- Weekends</p>
                        <DateBlock date={""} color={"green"}/> <p> &nbsp;- Weekdays</p>
                        <DateBlock date={""} color={"696969"}/> <p> &nbsp;- Invalid Days</p>
                    </div>
                </div>
                {this.state.formCal}
                
            </div>
        );
    }
}

export default Form;