import React, { Component } from 'react'
import { connect } from 'react-redux';
import {ListGroup,ListGroupItem, Button, Grid, Collapse, Well, Form, Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import {deleteReminder} from '../store/actions'
import moment from 'moment'

class ItemsList extends Component {

  handleDelete = (id) => {
    this.props.dispatch(deleteReminder(id))
  }

  render() {
      const { reminders } = this.props
      console.log('props',this.props)
    return (
      <div>
        <Row className="show-grid">
            <Col md={12}> 
                <ListGroup>
                    {
                     reminders && reminders.map(reminder => {
                        return(
                            <ListGroupItem className="item" bsStyle="success" key={reminder.id}>
                                <div className="itemlist">
                                    <div>{reminder.text}</div>
                                    <div>{moment(new Date(reminder.duedate)).fromNow()}</div>
                                </div>
                                
                                <Button bsStyle="danger" className="deletebutton" onClick={() => this.handleDelete(reminder.id)}>Delete</Button>
                            </ListGroupItem>
                        )
                    })
                    
                    }
                </ListGroup>
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

export default connect(mapStateToProps)(ItemsList)
