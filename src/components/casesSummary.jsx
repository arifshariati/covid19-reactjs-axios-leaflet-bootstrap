import React,{ Component } from 'react';
import "react-bootstrap";
import Axios from 'axios';
import NumberFormat from 'react-number-format';
import { Card, CardDeck } from 'react-bootstrap';

class CasesSummary extends Component{
    variant=['light','primary','danger'];
    state={
        confirmed:0,
        recovered:0,
        deaths:0,
        country:"",
        countries:[],
        countriesData:[]
      }
      componentDidMount(){
        this.getCases();
      }
      async getCases(){
        const response=await Axios.get('https://covid19.mathdro.id/api');
        const resCountryOptions=await Axios.get('https://covid19.mathdro.id/api/countries');
        const resCountries=await Axios.get('https://covid19.mathdro.id/api/confirmed');
        this.setState({
          confirmed:response.data.confirmed.value,
          recovered:response.data.recovered.value,
          deaths:response.data.deaths.value,
          countries:resCountryOptions.data.countries,
          countriesData:resCountries.data
        });
      }
    render(){
        return(
            <div className="casesSummary">
                <div className="casesSummary-alertbox">
                    <CardDeck>
                        <Card
                        bg={'light'}
                        style={{ width: 'auto', margin:'1rem' }}
                        >
                        <Card.Header><h5>Confirmed</h5></Card.Header>
                        <Card.Body>
                            <Card.Title><b><NumberFormat value={this.state.confirmed} displayType={'text'} thousandSeparator={true}/></b></Card.Title>
                        </Card.Body>
                        </Card>

                        <Card
                        bg={'primary'}
                        style={{ width: 'auto', margin:'1rem' }}
                        >
                        <Card.Header><h5>Recovered</h5></Card.Header>
                        <Card.Body>
                            <Card.Title><b><NumberFormat value={this.state.recovered} displayType={'text'} thousandSeparator={true}/></b></Card.Title>
                        </Card.Body>
                        </Card>

                        <Card
                        bg={'danger'}
                        style={{ width: 'auto', margin:'1rem' }}
                        >
                        <Card.Header><h5>Deaths</h5></Card.Header>
                        <Card.Body>
                            <Card.Title><b><NumberFormat value={this.state.deaths} displayType={'text'} thousandSeparator={true}/></b></Card.Title>
                        </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}
export default CasesSummary;