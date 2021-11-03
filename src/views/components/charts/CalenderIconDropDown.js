import { Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import Calender from '../../../assets/images/icons/customIcons/calendar.svg'

const CalenderDropDown = () => {
  return (
    <div className='demo-inline-spacing'>
      <UncontrolledButtonDropdown>
        <DropdownToggle color=''>
          <img src={Calender} alt="" className='mb-2' style={{height: '16px'}}/>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>
            Today   
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Last 7 Days
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Last Month
          </DropdownItem>
          
          <DropdownItem href='/' tag='a'>
            Last 12 Months
          </DropdownItem>
          <DropdownItem >All</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </div>
  )
}

export default CalenderDropDown
