import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAllTeams } from '../Team/Actions';
import { submitReport } from './Actions';
import { getTeams } from '../Team/Selectors';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class Report extends Component {

    componentDidMount() {
        this.props.getAllTeams();
    }

    constructor() {
        super();
        //initalising variables as state
        this.state = { sprint: '', startDate: new Date() , endDate: new Date(), team: '', kpi: '', kpiValues: []} ;
        // creating a method to store/update state
        this.handleChange = this.handleChange.bind(this);
        //methid for submitting the form
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKpiChange = this.handleKpiChange.bind(this);
    }

    handleChange(e) {
//retrieving name and value from teh field
        const name = e.target.name;
        const value = e.target.value;
        //updating the corespoding field value to state
        //here name should be equaL to the state varibale name,
        this.setState({ [name]: value });
    }
    handleKpiChange(e) {
//retrieving name and value from teh field
        var newFile;
        const name = e.target.name;
        const value = e.target.value;
        console.log("Key " +name + " Value " +value);
        var kpi  = {[e.target.name] :e.target.value};
        this.state.kpiValues.push(kpi);
        console.log("KPI VALUES $$$$$$$$$ "+JSON.stringify(this.state.kpiValues));
        this.setState({kpiValues: this.state.kpiValues });
    }

    handleSubmit(e) {
        //prevent browser defaiult actions
        e.preventDefault();
        const data = this.state // the whole data will be in the state.
        this.props.submitReport(data);
    }

    render() {
        const {teams} = this.props;

        let teamList = teams.length > 0
            && teams.map((item, i) => {
                return (
                    <option  key={i} value={item.name}>{item.name}</option>
                )
            }, this);
        var sprintList=[];
        for (var i = 1; i < 25; i++) {
            sprintList.push("Sprint "+i);
        }
        var kpiList=[];
        kpiList.push("Kpi1 ");
        kpiList.push("Kpi2 ");

        var kpiValues=["Total Person Days in Sprint","Story Points Completed","Story Points Planned" ];

        const listItems = sprintList.map((sprint) =>
            <option  key={i} value={sprint}>{sprint}</option>
        );
        const kpilistItems = kpiList.map((kpi) =>
            <option  key={i} value={kpi}>{kpi}</option>
        );
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <label htmlFor="team">Select Team</label>
                    <select name="team" value={this.state.team} onChange={this.handleChange}>
                        {teamList}
                    </select>
                    <label htmlFor="kpi">Select Kpi</label>
                    <select name="kpi" value={this.state.kpi} onChange={this.handleChange}>
                        {kpilistItems}
                    </select>
                    <p>Start Date :</p>
                    <DatePicker id="startDate" name="startDate" value={this.state.startDate}
                                selected={this.state.startDate}
                                onChange={this.handleChange} />
                    <p>End Date :</p>
                    <DatePicker id="endDate" name="endDate" value={this.state.endDate}
                                selected={this.state.endDate}
                                onChange={this.handleChange}
                    />

                    <p>Select Sprint : </p>
                    <select id="sprint" name="sprint" value={this.state.sprint} onChange={this.handleChange}>
                        {listItems}
                    </select>
                </div>

                <div className="row">
                    {kpiValues.map((item)=>
                        <div>
                            <label >{item}</label>
                            <input name={item}  onBlur={this.handleKpiChange} type="text" />
                        </div>
                    )}
                    <button>Send data!</button>
                </div>

            </form>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    teams: getTeams()
});

const mapDispatchToProps = dispatch => ({
    getAllTeams: () => dispatch(getAllTeams()),
    submitReport: (data) => dispatch(submitReport(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Report)
