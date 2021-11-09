import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import errorImg from '@src/assets/images/pages/error.svg'

import '@styles/base/pages/page-misc.scss'


const LoginError = ({errors}) => {
  return (
    <div className='error-wrapper'>
        {
             errors.length > 0 && errors.map(error => (
                //  console log(error)
                <p className="text-danger"> { error }</p>
              ))
            }
    </div>
  )
}
export default LoginError
