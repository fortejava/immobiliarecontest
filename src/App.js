import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

//import './App.css';

//Importo il menu principale
import MainMenu from './menu/MainMenu';
import MainMenuStructure from './assets/json/MainMenuStructure.json';
import City from './City';
import MainVisual from './MainVisual';
import VisualSlider from './VisualSlider';
import EventDateDetail from './EventDateDetail'

export class App extends Component
{
  constructor(props)
  {
    super(props);

    //Imposto il visual attivo, impostando il nome della città attualmente visualizata
    this.state = {activeCity:'',visualData:null, activeDate:null}
    this.activeCityChange = this.activeCityChange.bind(this);
    this.printEventGlobalData = this.printEventGlobalData.bind(this);
  }

  activeCityChange(newActiveCity, dateSeleted)
  {
    const mainVisualData = this.getActualCityVisual(newActiveCity);
    this.setState({ activeCity: newActiveCity, visualData:mainVisualData, activeDate:dateSeleted });
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

  printEventGlobalData()
  {

    return (
      <React.Fragment>
        <MainVisual dataObject={this.state.visualData} />
        {
          this.state.activeDate != null && <EventDateDetail dataObject={this.state.activeDate} />
        }
      </React.Fragment>    
      )
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
              { this.state.visualData != null ? this.printEventGlobalData() : <VisualSlider /> }
              
            </Col>
          </Row>
        </Container>
       
      </div>
    );
  }
}

export default App;
