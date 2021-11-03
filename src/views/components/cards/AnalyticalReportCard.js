
import * as Icon from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import { HorizontalBar } from 'react-chartjs-2'

const AnalyticalReportCard = ({
    tooltipShadow,
    gridLineColor,
    labelColor,
    warningColorShade,
    lineChartDanger,
    lineChartPrimary
  }) => {
    const options = {
        elements: {
          rectangle: {
            borderWidth: 2,
            borderSkipped: 'bottom'
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 500,
        legend: {
          display: false
        },
        tooltips: {
          shadowOffsetX: 1,
          shadowOffsetY: 1,
          shadowBlur: 8,
          shadowColor: tooltipShadow,
          backgroundColor: '#fff',
          titleFontColor: '#000',
          bodyFontColor: '#000'
        },
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: true,
                color: gridLineColor,
                zeroLineColor: gridLineColor
              },
              scaleLabel: {
                display: false
              },
              ticks: {
                fontColor: labelColor
              }
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                color: gridLineColor,
                zeroLineColor: gridLineColor
              },
              ticks: {
                stepSize: 100,
                min: 0,
                max: 400,
                fontColor: labelColor
              }
            }
          ]
        }
      },
      data = {
        labels: ['DEC 21', 'JAN 21', 'FEB 21', 'MAR 21', 'APR 21', '1MAY 21'],
        datasets: [
          {
            data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
            backgroundColor: 'rgb(225, 166, 221)',
            borderColor: 'transparent',
            barThickness: 10
            
          },
          {
            data: [350, 120, 140, 225, 65, 85, 95, 187, 157, 140, 130, 180, 100],
            backgroundColor: 'skyblue',
            borderColor: 'transparent',
            barThickness: 10
            
          }
         
        ]
      }
    
   
    return (
      
          <div style={{ height: '350px' }}>
            <HorizontalBar data={data} options={options} height={350} />
          </div>
        
    )
  }
  
  export default AnalyticalReportCard
  