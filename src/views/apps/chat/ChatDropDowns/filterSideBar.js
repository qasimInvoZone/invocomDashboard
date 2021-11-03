import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import {  Link } from 'react-feather' 
const FilterSideBar = () => {
  return (
    <div className='demo-inline-spacing'>
      <UncontrolledButtonDropdown>
        <DropdownToggle className="toggle_sidebar_filter">
         <Link size={14}/>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>
            All Conversations
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Qasim(Admin)
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Usama(Admin)
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </div>
  )
}

export default FilterSideBar
