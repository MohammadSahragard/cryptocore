'use client';

import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';

//* components
import { ButtonGroup } from '@nextui-org/react';
import Button from '@/components/ui/Button';

//* helper
import { separatorThreeToThree, getPercentageTimeFrame, getTimeFrame } from '@/helper/functions';



//* fetch data (chart data for area type and candlestick chart (coingecko api))
const getAreaChartData = async (id, targetCurrency, timeFrame) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${targetCurrency}&days=${timeFrame}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};
const getOHLCData = async (id, targetCurrency, timeFrame) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=${targetCurrency}&days=${timeFrame}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};



const CoinChart = ({ data, coinId }) => {

    const { market_data } = data;
    const chartRef = useRef();

    // states
    const targetCurrency = useSelector(state => state.options.targetCurrency);
    const [areaChartData, setAreaChartData] = useState({});
    const [OHLCData, setOHLCData] = useState({});
    const [timeFrame, setTimeFrame] = useState('one_day');
    const [dataSeries, setDataSeries] = useState('price');
    const [chartType, setChartType] = useState('line');



    // const and variables
    const lengthForDate = areaChartData?.prices?.length;
    const timeFramePercentage = timeFrame !== 'max' ? market_data?.[getPercentageTimeFrame(timeFrame)][targetCurrency?.code] : 1;



    // chart series
    const series = [
        {
            name: chartType === 'line' ?
                (dataSeries === 'price' ?
                    'Price' : dataSeries === 'market_caps' ?
                        'Market Caps' : 'Vol') :
                '',

            type: chartType === 'line' ? (dataSeries === 'price' || dataSeries === 'market_caps' ? 'area' : 'bar') : 'candlestick',

            data: areaChartData?.prices ?
                (chartType === 'line' ?
                    (dataSeries === 'price' ?
                        areaChartData?.prices :
                        dataSeries === 'market_caps' ?
                            areaChartData?.market_caps :
                            areaChartData?.total_volumes) :
                    OHLCData) :
                [],
        }
    ];



    // chart functions
    const setFormatter = value => `${targetCurrency?.symbol ?? '$'} ${separatorThreeToThree(value)}`;



    // chart options
    const options = {
        chart: {
            id: 'area-dateTime',
            foreColor: '#6F8192',
            type: chartType === 'line' ? 'area' : 'candlestick',
            selection: {
                enabled: true,
                type: 'x',
                fill: {
                    color: '#8000FF',
                    opacity: 0.2
                }
            },
            toolbar: {
                offsetX: -15,
                tools: {
                    download: '<i class="fa fa-download fa-lg"></i>',
                    zoomin: '<i class="fa fa-circle-plus fa-lg"></i>',
                    zoomout: '<i class="fa fa-circle-minus fa-lg"></i>',
                    zoom: `<i class='chart-zoom-option fa fa-magnifying-glass-plus fa-lg'></i>`,
                    selection: `<i class='chart-selection-option fa fa-square-dashed fa-lg'></i>`,
                    pan: `<i class='chart-pan-option fa fa-hand fa-lg'></i>`,
                    reset: '<i class="fa fa-compress fa-lg"></i>'
                }
            },
            zoom: {
                autoScaleYaxis: true
            },
            events: {
                selection: (chartContext, { xaxis, yaxis }) => {
                    console.log('selected zoom option');
                }
            }
        },
        fill: {
            type: 'gradient',
            colors: dataSeries !== 'total_volumes' ? (timeFramePercentage < 0 ? 'red' : '#22c55e') : '#8000FF',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            }
        },
        stroke: {
            lineCap: 'butt',
            colors: [`${dataSeries !== 'total_volumes' ? (timeFramePercentage < 0 ? 'red' : '#22c55e') : '#8000FF'}`],
            width: 2,
            dashArray: 0,
        },
        markers: {
            colors: `${dataSeries !== 'total_volumes' ? (timeFramePercentage < 0 ? 'red' : '#22c55e') : '#8000FF'}`,
            strokeColor: `${dataSeries !== 'total_volumes' ? (timeFramePercentage < 0 ? '#ff000050' : '#22c55e50') : '#8000FF'}`,
            strokeOpacity: 0.6,
            strokeWidth: 12,
            size: 0,
            style: 'hollow',
            hover: {
                size: 4,
            }
        },
        grid: {
            borderColor: '#33415580'
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: 'datetime',
            labels: {
                offsetY: -5
            },
            tooltip: {
                enabled: false
            }
        },
        yaxis: {
            tickAmount: 7,
            showForNullSeries: false,
            floating: true,
            labels: {
                align: 'left',
                offsetY: -5,
                formatter: (value) => setFormatter(value)
            }
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: true,
                format: 'ddd, dd MMM yyyy , hh:mm'
            },
            marker: {
                show: false,
            }
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



    // functions (set time frame)
    const updateData = (timeFrame) => {
        setTimeFrame(timeFrame)

        switch (timeFrame) {
            case 'one_day':
                ApexCharts.exec(
                    'area-dateTime',
                    'zoomX',
                    new Date(areaChartData?.prices?.[lengthForDate - 1][0]),
                    new Date(areaChartData?.prices?.[0][0])
                )
                break
            case 'one_week':
                ApexCharts.exec(
                    'area-dateTime',
                    'zoomX',
                    new Date(areaChartData?.prices?.[lengthForDate - 1][0]),
                    new Date(areaChartData?.prices?.[0][0])
                )
                break
            case 'two_week':
                ApexCharts.exec(
                    'area-dateTime',
                    'zoomX',
                    new Date(areaChartData?.prices?.[lengthForDate - 1][0]),
                    new Date(areaChartData?.prices?.[0][0])
                )
                break
            case 'one_month':
                ApexCharts.exec(
                    'area-dateTime',
                    'zoomX',
                    new Date(areaChartData?.prices?.[lengthForDate - 1][0]),
                    new Date(areaChartData?.prices?.[0][0])
                )
                break
            case 'twoH_days':
                ApexCharts.exec(
                    'area-dateTime',
                    'zoomX',
                    new Date(areaChartData?.prices?.[lengthForDate - 1][0]),
                    new Date(areaChartData?.prices?.[0][0])
                )
                break
            case 'max':
                ApexCharts.exec(
                    'area-dateTime',
                    'zoomX',
                    new Date(areaChartData?.prices?.[lengthForDate - 1][0]),
                    new Date(areaChartData?.prices?.[0][0])
                )
                break
            default:
        }
    }



    // fetch data
    useEffect(() => {
        const fetchAreaData = async () => {
            const data = await getAreaChartData(coinId, targetCurrency?.code, getTimeFrame(timeFrame));
            setAreaChartData(data);
        };
        const fetchOHLCData = async () => {
            const data = await getOHLCData(coinId, targetCurrency?.code, getTimeFrame(timeFrame));
            setOHLCData(data);
        };

        fetchAreaData();
        fetchOHLCData();



        // update chart options
        if (chartRef) {
            chartRef.current.chart.ctx.updateOptions({
                ...options,
                yaxis: {
                    ...options.yaxis,
                    labels: {
                        ...options.yaxis.labels,
                        formatter: (value) => setFormatter(value),
                    }
                },
                tooltip: {
                    y: {
                        formatter: (value) => setFormatter(value),
                    }
                }
            });
        };
    }, [targetCurrency?.code, timeFrame, coinId]);



    return (


        <div id='chart'>
            <div className='toolbar flex justify-between flex-wrap gap-2'>


                {/* data series */}
                <ButtonGroup>

                    <Button
                        isActive={dataSeries === 'price' ? true : false}
                        id='price'
                        clickEvent={() => setDataSeries('price')}
                    >
                        Price
                    </Button>

                    <Button
                        isDisabled={chartType === 'candlestick' ? true : false}
                        isActive={dataSeries === 'market_caps' ? true : false}
                        id='market_caps'
                        clickEvent={() => setDataSeries('market_caps')}
                    >
                        Market Cap
                    </Button>

                    <Button
                        isDisabled={chartType === 'candlestick' ? true : false}
                        isActive={dataSeries === 'total_volumes' ? true : false}
                        id='total_volumes'
                        clickEvent={() => setDataSeries('total_volumes')}
                    >
                        Volumes
                    </Button>

                </ButtonGroup>


                {/* chart type */}
                <ButtonGroup>

                    <Button
                        isActive={chartType === 'line' ? true : false}
                        id='line'
                        clickEvent={() => setChartType('line')}
                    >
                        <i className='fal fa-chart-line fa-lg'></i>
                    </Button>

                    <Button
                        isDisabled={dataSeries === 'total_volumes' || dataSeries === 'market_caps' ? true : false}
                        isActive={chartType === 'candlestick' ? true : false}
                        id='candlestick'
                        clickEvent={() => setChartType('candlestick')}
                    >
                        <i className='fal fa-chart-candlestick fa-lg'></i>
                    </Button>

                </ButtonGroup>


                {/* chart time frame */}
                <ButtonGroup>

                    <Button
                        isActive={timeFrame === 'one_day' ? true : false}
                        id='one_day'
                        clickEvent={() => updateData('one_day')}
                    >
                        24h
                    </Button>

                    <Button
                        isActive={timeFrame === 'one_week' ? true : false}
                        id='one_week'
                        clickEvent={() => updateData('one_week')}
                    >
                        7d
                    </Button>

                    <Button
                        isActive={timeFrame === 'two_week' ? true : false}
                        id='two_week'
                        clickEvent={() => updateData('two_week')}
                    >
                        14d
                    </Button>

                    <Button
                        isActive={timeFrame === 'one_month' ? true : false}
                        id='one_month'
                        clickEvent={() => updateData('one_month')}
                    >
                        30d
                    </Button>

                    <Button
                        isActive={timeFrame === 'twoH_days' ? true : false}
                        id='twoH_days'
                        clickEvent={() => updateData('twoH_days')}
                    >
                        200d
                    </Button>

                    <Button
                        isActive={timeFrame === 'max' ? true : false}
                        id='max'
                        clickEvent={() => updateData('max')}
                    >
                        max
                    </Button>

                </ButtonGroup>
            </div>

            <div className='mt-3' id='chart-timeline'>
                <Chart
                    options={options}
                    series={series}
                    types={chartType === 'line' ? 'line' : 'candlestick'}
                    ref={chartRef} />
            </div>
        </div>
    );
};


export default CoinChart;