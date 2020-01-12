import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

//import './App.css';

//Importo il menu principale
import MainMenu from './menu/MainMenu';
import MainMenuStructure from './assets/json/MainMenuStructure.json';
import City from './City';
import MainVisual from './MainVisual';
import VisualSlider from './VisualSlider';

export class App extends Component
{
  constructor(props)
  {
    super(props);

    //Imposto il visual attivo, impostando il nome della città attualmente visualizata
    this.state = {activeCity:'',visualData:null}
    this.activeCityChange = this.activeCityChange.bind(this);
  }

  activeCityChange(newActiveCity)
  {
    const mainVisualData = this.getActualCityVisual(newActiveCity);
    this.setState({ activeCity: newActiveCity, visualData:mainVisualData });
    //console.log(this.state.activeCity);
  }

  getActualCityVisual(cityToActivate) //Funzione che estrae il visual contenente i dati sulla città attualmente selezionata
  {
    let retvalue = null;
    
    for (let i=0;i<MainMenuStructure.length;i++)
    {
      if (MainMenuStructure[i].cityName === cityToActivate)
      {
        //console.log(MainMenuStructure[i]);
        
        retvalue = new City(
          MainMenuStructure[i].cityName,
          MainMenuStructure[i].sliderImage,
          MainMenuStructure[i].eventStartDate,
          MainMenuStructure[i].eventEndDate,
          MainMenuStructure[i].eventTitle,
          MainMenuStructure[i].eventSubtitle,
          MainMenuStructure[i].testimonial,
          MainMenuStructure[i].minimunAge
        );
        
       
        //retvalue = x;
      }
    }

    return retvalue;
  }

  render() 
  {
    

    return (
      <div className="App">
        <Container>
          <Row>
            <Col> 
              <MainMenu structure={MainMenuStructure} cityChange={this.activeCityChange} />
            </Col>
          </Row>
          <Row>
            <Col>
              { this.state.visualData != null ? <MainVisual dataObject={this.state.visualData} /> : <VisualSlider /> }
              
            </Col>
          </Row>
        </Container>
       
      </div>
    );
  }
}

export default App;
