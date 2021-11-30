import { Doughnut } from "react-chartjs-2";
import { Monitor, Tablet, ArrowDown, ArrowUp } from "react-feather";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

const ChartjsRadarChart = ({
  tooltipShadow,
  successColorShade,
  warningLightColor,
  primary,
  leadsData,
}) => {
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      cutoutPercentage: 60,
      legend: { display: false },
      tooltips: {
        callbacks: {
          label(tooltipItem, data) {
            const label = data.datasets[0].labels[tooltipItem.index] || "",
              value = data.datasets[0].data[tooltipItem.index];
            const output = ` ${label} : ${value} %`;
            return output;
          },
        },
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: "red",
        titleFontColor: "#000",
        bodyFontColor: "#000",
      },
    },
    data = {
      datasets: [
        {
          labels: ["Total Leads", "Responded Leads", "Un Assigned Leads"],
          data: [
            leadsData.total,
            leadsData.respondedLeads,
            leadsData.unAssignedLeads,
          ],
          backgroundColor: ["lightgreen", "orange", "skyblue"],
          borderWidth: 0,
          pointStyle: "rectRounded",
        },
      ],
    };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <CardTitle tag="h4">Sessions By Leads</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: "275px" }}>
          <Doughnut data={data} options={options} height={275} />
        </div>
        <div className="d-flex justify-content-between mt-3 mb-1">
          <div className="d-flex align-items-center">
            <span className="font-weight-bold ml-75 mr-25">
              Total Leads : {leadsData.total}
            </span>
          </div>
          <div>
            <ArrowUp className="text-success" size={14} />
          </div>
        </div>
        <div className="d-flex justify-content-between mb-1">
          <div className="d-flex align-items-center">
            <span className="font-weight-bold ml-75 mr-25">
              Responded Leads : {leadsData.respondedLeads}
            </span>
          </div>
          <div>
            <ArrowUp className="text-success" size={14} />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <span className="font-weight-bold ml-75 mr-25">
              Un Assigned Leads : {leadsData.unAssignedLeads}
            </span>
          </div>
          <div>
            <ArrowDown className="text-danger" size={14} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ChartjsRadarChart;
