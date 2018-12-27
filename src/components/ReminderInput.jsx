import React, { Component } from 'react'
import {Button, Collapse, Well, Form, Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import { connect } from 'react-redux';
import { addReminder, clearReminders } from '../store/actions'; 

class ReminderInput extends Component {
  
  state = {
    text:'',
    duedate:''
  }

  handleChange = (event) => {
    this.setState({ 
     text :  event.target.value
    });
  }

  handleDateChange = (event) => {
    this.setState({ 
      duedate: event.target.value  
    });
  }

  addReminder = () => {
    this.props.dispatch(addReminder(this.state.text, this.state.duedate))
  }
  
  clearReminders = () => {
    this.props.dispatch(clearReminders())
  }

  render() {
    return (
      <div>
          <Row className="show-grid">
            <Col md={12}> 
            <Form>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel><h2>Reminder Pro</h2></ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Your Item"
                                onChange={this.handleChange}
                                />
                              <br/>
                            <FormControl
                                type="datetime-local"
                                onChange={this.handleDateChange}
                                />
                            <br/>
                            <Button
                            block
                            bsStyle="success"
                            className="btn-round"
                            onClick={this.addReminder}
                            >
                                Add Reminder
                            </Button>

                            <Button
                            block
                            bsStyle="danger"
                            className="btn-round"
                            onClick={this.clearReminders}
                            >
                                Clear Reminders
                            </Button>
                                           
                    </FormGroup>
            </Form>
          
            </Col>
          </Row>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      reminders: state.reminders
    }
}

export default connect(mapStateToProps)(ReminderInput)
