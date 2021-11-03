// ** React Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import Arrow from '../../../../assets/images/icons/customIcons/arrow.svg'
// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, CheckSquare, MessageSquare, Search, CreditCard, HelpCircle, ArrowDownCircle, Power } from 'react-feather'

// ** Default Avatar Image
import TempUser from '../../../../assets/images/avatars/user.png'
const UserDropdown = () => {
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
       
      <Avatar img={TempUser} imgHeight='50' imgWidth='50' status='online' />
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
       <img src={Arrow} alt="" />
      </DropdownToggle>
      </div>
      <DropdownMenu right>
        <div style={{margin: '1rem', borderBottom: ' 1px solid grey'}}>
          <h5 style={{color: 'Black'}}>Username</h5>
          <p>Administrator</p>
          </div>
      <DropdownItem tag={Link} to='/not-authorized' onClick={() => dispatch(handleLogout())}>
          {/* <Power size={14} className='mr-75' /> */}
          <span className='align-middle'>Setting</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/login' onClick={() => dispatch(handleLogout())}>
          {/* <Power size={14} className='mr-75' /> */}
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
