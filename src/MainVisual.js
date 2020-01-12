import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap';


export class MainVisual extends Component 
{
    constructor(props)
    {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid className="main_visual_container">
                    <Container fluid>
                        <h3>{this.props.dataObject.cityName}</h3>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default MainVisual




