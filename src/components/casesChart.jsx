import React,{ Component} from 'react';
import Chart from 'react-apexcharts';
import Axios from 'axios';

class CasesChart extends Component{
    state={
        options:{
            chart:{
                id:"basic-bar"
            },
            xaxis:{
                categories:[]
            }
        },
        series:[
            {
                name:"series-1",
                data:[30,40,45,50,55]
            },
            {
                name:"series-2",
                data:[35,45,45,55,65]
            },
        ],
        date:[],
        APIDATA:{}
    }
    componentDidMount(){
        this.getChartData();
    }
    async getChartData(){
        const res=await Axios.get("https://covid19.mathdro.id/api/daily");
        this.setState({
            APIDATA:res.data
        })
    }
    render(){
        return(
            <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            width="500"
            ></Chart>
        )
    }
}
export default CasesChart;