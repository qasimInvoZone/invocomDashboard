// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Search } from 'react-feather'
import {
  Button,
  Media,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const SearchDropDown = () => {
  // ** Notification Array
  const notificationsArray = [
    {
     subtitle: '',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>
              <Search size={18} className="mr-1" />
              search 1</span>
         
        </Media>
      )
    },
    {
        subtitle: '',
      title: (
        <Media tag='p' heading>
        <span className='font-weight-bolder'>
            <Search size={18} className="mr-1"/>
            search 2</span>
       
      </Media>
      )
    },
    {
        subtitle: '',
        title: (
            <Media tag='p' heading>
            <span className='font-weight-bolder'>
                <Search size={18} className="mr-1"/>
                search 2</span>
           
          </Media>
        )
      }
  ]

  const recentPageArray = [
    {
     subtitle: '',
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>
              <Search size={18} className="mr-1" />
              Page 1</span>
         
        </Media>
      )
    },
    {
        subtitle: '',
      title: (
        <Media tag='p' heading>
        <span className='font-weight-bolder'>
            <Search size={18} className="mr-1"/>
            Page 2</span>
       
      </Media>
      )
    },
    {
        subtitle: '',
        title: (
            <Media tag='p' heading>
            <span className='font-weight-bolder'>
                <Search size={18} className="mr-1"/>
                Page 3</span>
           
          </Media>
        )
      }
  ]

  // ** Function to render Notifications
  /*eslint-disable */
  const renderSearches = () => {
    return (
      <PerfectScrollbar
        component='li'
        className='media-list scrollable-container'
        options={{
          wheelPropagation: false
        }}
      >
        {notificationsArray.map((item, index) => {
          return (
              
            <a key={index} className='d-flex' href='/' onClick={e => e.preventDefault()}>
              <Media
                className={classnames('d-flex', {
                  'align-items-start': !item.switch,
                  'align-items-center': item.switch
                })}
              >
                {!item.switch ? (
                  <Fragment>

                    <Media body>
                      {item.title}
                      <small className='notification-text'>{item.subtitle}</small>
                    </Media>
                  </Fragment>
                ) : (
                  <Fragment>
                    {item.title}
                    {item.switch}
                  </Fragment>
                )}
              </Media>
            </a>
          )
        })}
      </PerfectScrollbar>
    )
  }

  const renderPages = () => {
    return (
      <PerfectScrollbar
        component='li'
        className='media-list scrollable-container'
        options={{
          wheelPropagation: false
        }}
      >
        {recentPageArray.map((item, index) => {
          return (
              
            <a key={index} className='d-flex' href='/' onClick={e => e.preventDefault()}>
              <Media
                className={classnames('d-flex', {
                  'align-items-start': !item.switch,
                  'align-items-center': item.switch
                })}
              >
                {!item.switch ? (
                  <Fragment>

                    <Media body>
                      {item.title}
                      <small className='notification-text'>{item.subtitle}</small>
                    </Media>
                  </Fragment>
                ) : (
                  <Fragment>
                    {item.title}
                    {item.switch}
                  </Fragment>
                )}
              </Media>
            </a>
          )
        })}
      </PerfectScrollbar>
    )
  }
  /*eslint-enable */

  return (
    <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-25'>
      <DropdownToggle tag='a' className='nav-link' href='/' onClick={e => e.preventDefault()}>
        
      </DropdownToggle>

      <DropdownMenu tag='ul' right className='dropdown-menu-media mt-0'>
        <li className='dropdown-menu-header'>
          <DropdownItem className='d-flex' tag='div' header>
            <Search />
          <input type="text" placeholder="search Invo Zone..." className="search_input"/>
          </DropdownItem>

        </li>
        <li>
      
      <DropdownItem className='d-flex mt-1 mb-1 ' tag='p' header>
          Recent Searches
      </DropdownItem>
    </li>
        {renderSearches()}
       <li>
      
          <DropdownItem className='d-flex mt-1 mb-1 ' tag='p' header>
              Recent Pages
          </DropdownItem>
        </li>
        {renderPages()}
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default SearchDropDown
