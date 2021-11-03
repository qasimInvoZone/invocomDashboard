import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// eslint-disable-next-line no-duplicate-imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
const ChartjsRadarChart = () => {

  return (
    <Card>
      <CardHeader className='d-flex justify-content-start align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle className='summary_heading'>History</CardTitle>
      </CardHeader>
      <CardBody>
      <Table borderless responsive>
      <thead>
        <tr>
          <th>Visitors</th>
          <th>Admin</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span className='align-middle font-weight-bold'>Jennifer</span>
          </td>
          <td>Qasim</td>
          <td>11:30 AM</td>
        </tr>
        <tr>
          <td>
            <span className='align-middle font-weight-bold'>Rebbeca</span>
          </td>
          <td>Ronald</td>
          <td>11:30 AM</td>
        </tr>
        <tr>
          <td>
            <span className='align-middle font-weight-bold'>Zubair</span>
          </td>
          <td>Aiman</td>
          <td>11:45 AM</td>
        </tr>
        <tr>
          <td>
            <span className='align-middle font-weight-bold'>Renold</span>
          </td>
          <td>Jerry</td>
          <td>12:00 AM</td>
        </tr>
      </tbody>
    </Table>
      </CardBody>
    </Card>
  )
}

export default ChartjsRadarChart
