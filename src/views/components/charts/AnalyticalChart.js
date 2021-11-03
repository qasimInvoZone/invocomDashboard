import { Line } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import FilterDropDown from './FilterDropDown'
import CalenderDropDown from './CalenderIconDropDown'
import PickerHumanFriendly from '../datepicker/PickerHumanFriendly'
import CalenderComplete from './MeetCompHeader'


const AnalyticalChart = ({
  tooltipShadow,
  gridLineColor,
  labelColor,
  warningColorShade,
  lineChartDanger,
  lineChartPrimary
}) => {
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 10
        }
      },
      hover: {
        mode: 'label'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: 'primary',
        titleFontColor: 'blue',
        bodyFontColor: 'blue'
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            ticks: {
              fontColor: labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: labelColor
            },
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            }
          }
        ]
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },
    data = {
      labels: [14.10, 14.20,  14.30, 14.40, 14.50, 14.60, 15.00, 15.10, 15.20, 15.30],
      datasets: [
        {
          data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
          label: 'replied',
          borderColor: 'skyblue',
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: lineChartDanger,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: lineChartDanger,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [120, 120, 140, 280, 250, 160, 180, 200, 245, 215, 270, 295, 270, 370, 305],
          label: 'queue',
          borderColor: 'pink',
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: lineChartDanger,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: lineChartDanger,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [150, 220, 160, 300, 270, 180, 190, 100, 255, 255, 290, 305, 280, 270, 205],
          label: 'progress',
          borderColor: 'purple',
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: lineChartDanger,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: lineChartDanger,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [320, 220, 240, 180, 150, 180, 200, 120, 265, 275, 170, 205, 170, 370, 255],
          label: 'converted',
          borderColor: 'green',
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: lineChartDanger,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: lineChartDanger,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        }
      ]
    }

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column chart_header'>
       
          <CardTitle className='mb-75' tag='h4'>
            Report
          </CardTitle>
        

          <div className='d-md-flex'>
        
          <div>
          <ul className="p-0">
            <FilterDropDown />
            </ul>
          </div>
          <div>
        <CalenderComplete />
          </div>
        
          </div>
       
      </CardHeader>
      <CardBody>
        <div style={{ height: '450px' }}>
          <Line data={data} options={options} height={450} plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  )
}

export default AnalyticalChart
