import { useState } from 'react'
import { useSkin } from '@hooks/useSkin'
import { Link } from 'react-router-dom'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import Bot from '../assets/images/loginpicture.png'
import logo from '../assets/images/logo/invocom.png'
import axios  from 'axios'
import LoginError from '../views/components/Login-error/Login-error'


const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])
  const [hasError, setHasError] = useState(false)


  const handleLogin = () => {
      history.push('/login')
  }
  
  const sendEmail = async () => {
    if (email.trim() === '') {
      setHasError(true)
      setErrors(['Please enter email'])
    }

    
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
    const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
    const entity = 'user'
    const endPoint = `${baseUrl}/${apiVersion}/${entity}/forgot`

    axios.post(endPoint, { email }).then((response) => {
      history.push('/reset-password')
    }).catch(err => {
      let errors = err.response.data.message;
      setHasError(true)
      setErrors(errors)
    }) 
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
            <CardText tag='h1' className='font-weigh-bold mb-1' style={{color: 'black', fontWeight:"800"}}>Find your Account</CardText>            
            <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
            {hasError && <LoginError errors={errors} />}
             <FormGroup>
                <Label className='form-label email-wrapper' for='login-email'>
                  Email
                </Label>
                <Input type='email' required id='login-email' placeholder='username@invozone.com' onChange={(e) => { setEmail(e.target.value) }} autoFocus />
              </FormGroup>
             
              <Button.Ripple tag={Link} color='info' block style={{height:"3rem",marginTop:"2rem"}} onClick={() => sendEmail()}>
                Send reset email
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

export default ForgotPassword