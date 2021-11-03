import { useState } from 'react'
import { useSkin } from '@hooks/useSkin'
import { Link, Redirect } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import Bot from '../assets/images/loginpicture.png'
import logo from '../assets/images/logo/invocom.png'
import axios from 'axios'
import LoginError from '../views/components/Login-error/Login-error'
//import { end } from '@popperjs/core'

const ResetPassword = ({ history }) => {
  const [skin, setSkin] = useSkin()
  const [newPassword, setPassword] = useState('')
  const [passwordResetCode, setCode] = useState('')
  const [success, setSuccess] = useState('')
  const [errors, setError] = useState([])
  const [hasError, setHasError] = useState(false)


  const handleLogin = () => {
      history.push('/login')
  }
  
  const resetPassword = async () => {
    console.log(newPassword);
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
            const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
            const entity = 'user'
            const endPoint = `${baseUrl}/${apiVersion}/${entity}/reset`
            try {
                const response = await axios.post(endPoint, { passwordResetCode, newPassword })
                console.log("response", response)
                console.log(response.status)
                if (response.status === 200) {
                  history.push('/login');
                }
            } catch (e) {
                console.log(e);
            }
  }

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        
        <Col className='d-none d-lg-flex align-items-center p-5' lg='6' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={Bot} alt='Login' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='6' sm='12'>
          
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='8'>
          <img src={logo} alt="invozone logo" style={{marginBottom: '10rem', height: '50px', width:"270px"}}/>
            <CardTitle tag='h4' className='font-weight-bold mb-0'>
              Find & Reset 
            </CardTitle>
            <CardText tag='h1' className='font-weigh-bold mb-1' style={{color: 'black', fontWeight:"800"}}>Reset Your Password</CardText>            
            <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
            <FormGroup>
                <Label className='form-label email-wrapper' for='login-email'>
                  Authentication code
                </Label>
                <Input type='text' id='login' placeholder='code here' onChange={(e) => { setCode(e.target.value) }} autoFocus />
              </FormGroup>
              <FormGroup>
                <Label className='form-label email-wrapper' for='login-email'>
                  Password
                </Label>
                <Input type='password' id='newPassword' placeholder='new password' onChange={(e) => { setPassword(e.target.value) }} autoFocus />
              </FormGroup>
             
              <Button.Ripple tag={Link} color='info' block style={{height:"3rem",marginTop:"2rem"}} onClick={()=>{resetPassword()}}>
                Reset Password
              </Button.Ripple>
              <Button className="back-btn-wrapper"  tag={Link} color='light' block style={{height:"3rem",marginTop:"2rem"}}>
                  Back
              </Button>
            </Form>
                    <p tag="h2" className="text-center mt-2 ">Already have an account?<span onClick={() => handleLogin()} className="login-wrap"><b>Login</b></span></p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default ResetPassword