import React, { Component } from 'react';
import { Map, CircleMarker,TileLayer} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Axios from 'axios';

class LeafletMapCircleMarker extends Component{
    state={
        total:0,
        incidents:[]
      }
    
      componentDidMount(){
        this.getData();
      }
      async getData(){
      const res=await Axios.get("https://covid19.mathdro.id/api/deaths");
      const totalDeaths=await Axios.get("https://covid19.mathdro.id/api");
      this.setState({
        incidents:res.data.filter(row=> row.lat !== null),
        total:totalDeaths.data.deaths.value
      })
      
      }
render(){
    return(
        <div className="cases-map">
            <Map 
            style={{height:"300px",width:"100%"}}
            zoom={1}
            center={[-0.09,51.505]}
            >
              <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              
              {
              this.state.incidents.map((city,i) => {
                return (
                  <CircleMarker 
                  key={i} 
                  center={[city.lat, city.long]} 
                  readius={20 * Math.log(city.deaths / this.state.total)}
                  fillOpacity={0.5}
                  fillColor={"red"}
                  stroke={false}
                  />
                )
              })
              }
            </Map>
        </div>
    );
}
}
export default LeafletMapCircleMarker;