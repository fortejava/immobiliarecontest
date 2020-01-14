import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';

export class EventDateDetail extends Component
 {
    constructor(props)
    {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <h3>{this.props.dataObject.eventDayTitle}</h3>
                        <h4>{this.props.dataObject.eventDay}</h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EventDateDetail
