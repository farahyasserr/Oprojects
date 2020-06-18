import React, { Component } from 'react';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeResponsible = this.onChangeResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            responsible: '',
            priority: '',
            completed: false
        }
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeResponsible(e) {
        this.setState({
            responsible: e.target.value
        });
    }

    onChangePriority(e) {
        this.setState({
            priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault(); //to get rid of default behavior

        console.log(this.state);
        console.log(`Description : ${this.state.description}`);
        console.log(`Priority : ${this.state.priority}`);
        console.log(`Responsible : ${this.state.responsible}`);

        var x;
        console.log("hena", x);

        this.setState({
            description: '',
            reponsible: '',
            priority: '',
            completed: false
        })
    }



    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Create new Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.onChangeResponsible} />
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityLow"
                            value="Low"
                            checked={this.state.priority === 'Low'} //value
                            onChange={this.onChangePriority} />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityMedium"
                            value="Medium"
                            checked={this.state.priority === 'Medium'} //value
                            onChange={this.onChangePriority} />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityHigh"
                            value="High"
                            checked={this.state.priority === 'High'} //value
                            onChange={this.onChangePriority} />
                        <label className="form-check-label">High</label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}