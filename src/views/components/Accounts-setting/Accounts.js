
import React, { useState, useEffect } from 'react'
import {User} from 'react-feather'
import ArrowBottom from '../../../assets/images/icons/customIcons/arrowbottom.svg'
import axios from 'axios'
import validator from 'validator'
import { useHistory } from "react-router-dom";

const Accounts = () => {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const [fullname, setFullname] = useState(user?.fullname)
    const [email, setEmail] = useState(user?.email)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [emailError, setEmailError] = useState('')
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
    const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
    useEffect(()=>{

    },[errorMessage,password,confirmPassword])
    const updateUserPassword = async () => {
        if(password === confirmPassword && validate(password)){
                
                const entity = 'user'
                const token = localStorage.getItem('token');
                const endPoint = `${baseUrl}/${apiVersion}/${entity}/update-password `
                try {
                    const response = await axios.post(endPoint, { password },{
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    if(response.status == 200){
                        localStorage.clear();
                        history.push('/login');
                        //show snackBar success
                    }
                } catch (e) {
                    console.log(e)
                    //show snackBar failure
                }
        } else {
            setErrorMessage('Password do not match')
        }
        
    }
    const updateUserNameAndEmail = async () => {
        if(emailError == ''){
            const entity = 'user'
            const token = localStorage.getItem('token');
            const endPoint = `${baseUrl}/${apiVersion}/${entity}/update-profile`
            try {
                const response = await axios.post(endPoint, { email, fullname },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
                })
                if(response.status == 200){
                    const tempUser = JSON.parse(localStorage.getItem('user'));
                    tempUser.email = response.data.user.email;
                    tempUser.fullname = response.data.user.fullname;
                    localStorage.setItem('user',JSON.stringify(tempUser));
                    window.location.replace('/setting');
                }
            } catch (e) {
                console.log(e)
                //show snackBar failure
            }
        } else {
            setEmailError('Invalid Email');
        }
        
    }
    const validateEmail = (e) => {
        let email = e.target.value
        setEmail(e.target.value);
        if (validator.isEmail(email)) {
          setEmailError('')
        } else {
          setEmailError('Invalid Email!')
        }
      }
    const validate = (value) => {
  
        if (value.length >= 8) {
            setErrorMessage('')
            return true;
        } else {
            setErrorMessage('Password Must be 8 characters long')
            return false;
        }
      }
    return (
        
        <div className="Rightbar">
        <div className="rightbar_head">
            <div className="right_rightbar_head_child">
            <User />
            <h3> Accounts</h3>
            </div>

            <img src={ArrowBottom} />
        </div>

        <div className="d-flex">
         <div className="user_email_name"> 
         <div className="rightbar_head">
            <div className="right_rightbar_head_child">
            <h4> Change Name & Email</h4>
            </div>
        </div>  
            <div className="name-input-wrapper">
                <div className="label-wrapper">Name</div>
                <div><input type="text" placeholder="Usama" value={fullname} className="input-field" onChange={(e) => { setFullname(e.target.value) }}/></div>
            </div>
            <div className="email-input-wrapper">
                <div className="label-wrapper">Email</div>
                <div>
                    <input type="text" placeholder="email@invozone.com" value={email} className="input-field" onChange={(e) => { validateEmail(e) }}/>
                </div>
            </div>
            {emailError != '' ? <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span> : <span>{emailError}</span>}
            <button className="change-pass-btn" onClick={() => updateUserNameAndEmail()}>Save</button>
            <div className="rightbar_head">
            <div className="right_rightbar_head_child">
            <h4> Change Password</h4>
            </div>
        </div>
            <div className="name-input-wrapper">
                <div className="label-wrapper">Password</div>
                <div><input type="password" placeholder="********" className="input-field" onChange={(e) => { setPassword(e.target.value) }}/></div>
            </div>
            <br/>
            <div className="name-input-wrapper">
                <div className="label-wrapper">Confirm Password</div>
                <div><input type="password" placeholder="********" className="input-field" onChange={(e) => { setConfirmPassword(e.target.value) }}/></div>
            </div>
            {errorMessage != '' ? <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span> : <span>{errorMessage}</span>}
            <button className="change-pass-btn" onClick={() => updateUserPassword()}>Save</button>

            </div>
        </div>

          
    </div>
       
    )
}

export default Accounts
