
import React, { Fragment } from 'react'
import { Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MessageCircle, User, Bell, Edit2,MessageSquare } from 'react-feather'
import {Tab, Nav} from 'react-bootstrap'
import ArrowBottom from '../../../assets/images/icons/customIcons/arrowbottom.svg'
import Button from 'reactstrap/lib/Button'
const Notification = () => {
    return (
        <div className="Rightbar">
        <div className="rightbar_head">
            <div className="right_rightbar_head_child">
            <Bell />
            <h3> Notification</h3>
            </div>

            <img src={ArrowBottom} />
        </div>
        <div className="d-flex align-items-center noti-flex">
            <div className="notification-text">Incoming Visitor</div>
            <div className="notification-dropdown"><select>
                <option>Enable</option>
                <option>Disable</option>
                </select></div>
        </div>
        <div className="d-flex align-items-center noti-flex py-2">
            <div className="notification-text">New Chat Requested</div>
            <div className="notification-dropdown"><select>
                <option>Dong</option>
                <option>Disable</option>
                </select></div>
        </div>
        <div className="d-flex align-items-center noti-flex">
            <div className="notification-text">New Message</div>
            <div className="notification-dropdown"><select>
                <option>Dong</option>
                <option>Disable</option>
                </select></div>
        </div>
       
    <div className="email-notification">
        <MessageSquare />
        <span className="email-noti-text ml-2">Send email notifications</span>
    </div>
    <div className="d-flex align-items-center">
        <div className="notification-text">
            Enable
        </div>
        <div>
        <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
        </label>
        </div>
    </div>
    <div className="d-flex align-items-center py-3">
        <div className="notification-text">
            Send To
        </div>
        <div>
            <input type="text" placeholder="email@invozone.com" className="input-field"/>
        </div>
    </div>
    <div className="text-wrapper">Add new email address</div>
    <button className="save-btn">Save</button>
    </div>
       
    )
}

export default Notification
