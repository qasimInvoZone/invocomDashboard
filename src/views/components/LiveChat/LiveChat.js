import React, { Fragment, useState } from 'react'
import { Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MessageCircle, User, Bell, Edit2,MessageSquare } from 'react-feather'
import {Tab, Nav} from 'react-bootstrap'
import ArrowBottom from '../../../assets/images/icons/customIcons/arrowbottom.svg'
import Button from 'reactstrap/lib/Button'
import axios from 'axios'

const LiveChat = () => {
    const [backgroundColor, setBackgroundColor] = useState('')
    const [textColor, setTextColor] = useState('')
    const [chatVisibility, setChatVisibility] = useState('')
    const [backgroundStatus, setBackgroundStatus] = useState('Hi, I’m here to help you find your way.')
    const [message, setMessage] = useState('What would you like to do?')

    const postSettings = async () => {
        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
            const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
            const entity = 'user'
            const endPoint = `${baseUrl}/${apiVersion}/${entity}/config`
            const configObj = {
                backgroundColor,
                textColor,
                chatVisibility,
                backgroundStatus,
                message
            }
            try {
                const response = await axios.post(endPoint, { configObj },{
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                })
                if (response.status === 200) {
                }
            } catch (e) {
            }
    }
    return (
        
        <div className="Rightbar">
                    {/* <div className="rightbar_head">
                        <div className="right_rightbar_head_child">
                        <Edit2 />
                        <h3> Widget Setting</h3>
                        </div>

                        <img src={ArrowBottom} />
                    </div> */}
{/* 
                    <div className="background_colors">
                        <h4>Background Color:</h4>

                        <div className="color_options">
                            <div className="option1" onClick={() => {setBackgroundColor('rgb(232, 241, 104)')}}></div>
                            <div className="option2" onClick={() => {setBackgroundColor('rgb(47, 255, 158)')}}></div>
                            <div className="option3" onClick={() => {setBackgroundColor('rgb(199, 81, 81)')}}></div>
                            <div className="option4" onClick={() => {setBackgroundColor('rgb(45, 160, 160)')}}></div>
                            <div className="option5" onClick={() => {setBackgroundColor('rgb(0, 153, 255)')}}></div>
                        </div>
                    </div>

                    <div className="Text_color">
                        <h4>Text Color:</h4>

                        <div className="text_color_options">
                        <Button className="light_button" onClick={() => {setTextColor('white')}}>Light</Button>
                        <Button className="dark_button" onClick={() => {setTextColor('black')}}>Dark</Button>
                        </div>
                    </div>

                    <div className="chat_visibility_option">
                        <h4>Chat Visibility</h4>
                        <UncontrolledButtonDropdown>
                            <DropdownToggle outline color='primary' caret onClick={() => {setChatVisibility('Both')}}>
                                Both on Desktop and Mobile Devices
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem onClick={() => {setChatVisibility('Desktop Devices')}}>
                                Desktop Devices
                            </DropdownItem>
                            <DropdownItem onClick={() => {setChatVisibility('Mobile Device')}}>
                                Mobile Device
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                        
                    </div> */}
                    <div className="rightbar_head">
                        <div className="left_rightbar_head_child">
                        <Edit2 />
                        <h3>Get Started</h3>
                        </div>

                        <img src={ArrowBottom} />
                    </div>

                    <div className="background_status">
                        <h4>Background Status:</h4>

                        <input placeholder="hi, im IZ bot" value = {backgroundStatus} onChange={(e) => { setBackgroundStatus(e.target.value) }}/>
                    </div>
                    <div className="background_status">
                        <h4>Message</h4>

                        <input placeholder="What would You like to do" value = {message} onChange={(e) => { setMessage(e.target.value) }}/>
                    </div>
                    <button className="save-btn" onClick={()=>{postSettings()}}>Save</button>
                </div>
       
    )
}

export default LiveChat
