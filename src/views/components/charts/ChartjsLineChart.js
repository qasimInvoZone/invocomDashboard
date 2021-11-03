import { Line } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import FilterDropDown from './FilterDropDown'
import CalenderDropDown from './CalenderIconDropDown'
import PickerHumanFriendly from '../datepicker/PickerHumanFriendly'
import CalenderComplete from './MeetCompHeader'


const ChartjsLineChart = ({
  tooltipShadow,
  gridLineColor,
  labelColor,
  warningColorShade,
  lineChartDanger,
  lineChartPrimary,
  chartData
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
      labels: [14.10, 14.20, 14.30, 14.40, 14.50, 14.60, 15.00, 15.10, 15.20, 15.30],
      datasets: [
        {
          data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
          label: 'Europe',
          borderColor: 'green',
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: '#ff7f50',
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
          data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
          label: 'Asia',
          borderColor: 'blue',
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: 'blue',
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: lineChartPrimary,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
          label: 'Africa',
          borderColor: 'red',
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: warningColorShade,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: warningColorShade,
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
      <CardHeader className='d-flex justify-content-end align-items-sm-center align-items-start flex-sm-row flex-column chart_header'>

        <CalenderComplete />
      </CardHeader>
      <CardBody>
        <div className="leads_chart_holder">
          <div className="leas_chart_stats">
            <h1>{chartData.totalLeads}</h1>
            <h5>Leads acquired</h5>
            <p>Aug 13 - Sep 30-Aug</p>
          </div>
          <div className="leads_chart">
          <Line data={data} options={options} height={450} plugins={plugins} />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsLineChart
