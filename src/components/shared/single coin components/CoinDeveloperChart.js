'use client';

// public
import Chart from "react-apexcharts";


const CoinDeveloperChart = ({ data }) => {

    const series = [{
        name: 'Commits',
        data: data
    }];

    const options = {
        chart: {
            type: 'bar',
            height:'100%',
            foreColor: '#64748b',
            toolbar: {
                show: false
            },
        },
        title: {
            text: 'Commit Activity (last 4 weeks)',
            floating: true,
            style: {
              fontSize:  '14px',
              fontWeight:  'bold',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
            marker: {
                show: false,
            }
        },
        legend: {
            show: false
        },
        grid: {
          borderColor: '#33415580'
        },
        noData: {
          text: 'Loading ...',
          align: 'center',
          verticalAlign: 'top',
          offsetX: 0,
          offsetY: 0,
          style: {
            color: ['lightblue'],
            fontSize: '24px'
          }
        }
    };



    return (
        <div id="chart">
            <Chart options={options} series={series} type="bar" height='100%' />
        </div>
    );
};


export default CoinDeveloperChart;