import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import VisualSliderStructure from './assets/json/StandardVisualStructure.json';

export class VisualSlider extends Component 
{
    constructor(props)
    {
        super(props);
    }

    render() 
    {
        return (
            <React.Fragment>
                <Jumbotron fluid className="main_visual_container">
                    <Container fluid>
                        <h2>{VisualSliderStructure.title}</h2>
                        <h3>{VisualSliderStructure.subtitle}</h3>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default VisualSlider
