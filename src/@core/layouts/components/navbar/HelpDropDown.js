// ** React Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { HelpCircle, Layout, Send, Square } from 'react-feather'
import help from '../../../../assets/images/icons/customIcons/help.svg'
// ** Default Avatar Image
import TempUser from '../../../../assets/images/avatars/user.png'
const HelpDropDown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || TempUser

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
     <div className="d-flex  align-items-center ">
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
       <div className="header_icons">
       <img src={help} alt=""/>
        </div>
      </DropdownToggle>
      </div>
      <DropdownMenu right >
          <h5 className="ml-2">Need Help?</h5>
        <DropdownItem tag={Link} to='#' onClick={e => e.preventDefault()}>
          <Layout size={14} color={'blue'} className='mr-75' />
          <span className='align-middle' style={{color: 'blue'}}>Documentation</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#' onClick={e => e.preventDefault()}>
          <Send size={14} color={'blue'} className='mr-75' />
          <span className='align-middle' style={{color: 'blue'}}>Support Site</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#' onClick={e => e.preventDefault()}>
          <Square size={14} color={'blue'} className='mr-75' />
          <span className='align-middle' style={{color: 'blue'}}>  Contact Us</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default HelpDropDown
