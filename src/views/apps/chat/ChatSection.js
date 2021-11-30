import React, { useEffect, useState, useRef } from "react";
import User1 from "../../../assets/images/avatars/demo_user.png";
import { Delete, Smile, Send } from "react-feather";
import Modal from "./ChatModal";
import axios from "axios";
import Picker from "emoji-picker-react";
import { useLocation } from "react-router-dom";
var moment = require("moment");
//dummy

const ChatSection = ({ chat, sendMessageParent }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  const [user, setUser] = useState({});
  const [isAssigned, setIsAssigned] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject.emoji);
    let tempString = message + " " + emojiObject.emoji;
    setMessage(tempString);
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [setUser, isAssigned, message]);

  function sendMessage(chat_id) {
    if (message !== "") {
      sendMessageParent(chat_id, message);
      setMessage("");
    }
  }
  const joinChat = async (chatId) => {
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL;
    const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION;
    const entity = "chat";
    const endPoint = `${baseUrl}/${apiVersion}/${entity}/assign`;
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        endPoint,
        { chatId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        setIsAssigned(true);
      }

      // eslint-disable-next-line no-undef
    } catch (e) {}
  };
  const fetchAdmins = async () => {
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL;
    const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION;
    const entity = "user";
    const endPoint = `${baseUrl}/${apiVersion}/${entity}/admin`;
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(endPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAdmins(response.data.adminUsers);
      if (response.status == 200) {
        setShowModal(!showModal);
      }
    } catch (e) {
      if (e && e?.response && e?.response?.status === 400) {
      }
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(chat._id);
    }
  };

  const closeChat = async () => {
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL;
    const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION;
    const entity = "chat";
    const endPoint = `${baseUrl}/${apiVersion}/${entity}/status-update`;
    const token = localStorage.getItem("token");
    const chatId = chat._id;
    const status = "CLOSED";
    try {
      const response = await axios.post(
        endPoint,
        { chatId, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>{showModal ? <Modal admins={admins} chatId={chat._id} /> : ""}</div>

      <div className="complete_right_side">
        <div>
          <div className="headRight-sub">
            <div className="image_name_header">
              <img src={User1} />
              <h3>
                {user.role === "SUPER_ADMIN" || user.role === "ADMIN"
                  ? chat?.client?.username
                  : chat?.superAdmin?.username}
              </h3>
            </div>
            <div className="chat_head_right_icons">
              <Delete
                onClick={() => {
                  closeChat();
                }}
              />
            </div>
          </div>
        </div>
        <div className="right-section">
          <div
            className="message mCustomScrollbar"
            data-mcs-theme="minimal-dark"
          >
            <ul>
              {chat &&
                chat?.messages &&
                chat.messages?.length > 0 &&
                chat.messages.map((message) =>
                  message?.sender !== chat.client?._id ? (
                    <li className="msg-right">
                      <div className="msg-right-sub">
                        <div className="msg-desc">
                          <p>{message?.message}</p>
                        </div>
                        <small>
                          {moment(message?.createdAt).format("hh:mm a")}
                        </small>
                      </div>
                    </li>
                  ) : (
                    <li className="msg-left">
                      <div className="msg-left-sub">
                        <div className="msg-desc">
                          <p>{message?.message}</p>
                        </div>
                        <small>
                          {moment(message?.createdAt).format("hh:mm a")}
                        </small>
                      </div>
                    </li>
                  )
                )}
            </ul>
            <AlwaysScrollToBottom />
          </div>
          <div className="right-section-bottom">
            {chat.STATUS != "CLOSED" ? (
              <input
                type="text"
                name=""
                value={message}
                placeholder="type a message..."
                onClick={() => {
                  setShowEmoji(false);
                }}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
            ) : (
              <div className="d-flex align-items-center justify-content-between right-section-bottom-restrict">
                <div>This conversation is CLOSED</div>
              </div>
            )}
            {chat.STATUS != "CLOSED" ? (
              chat.STATUS != "PENDING" || isAssigned ? (
                <div className="input_footer_emojis">
                  {showEmoji ? (
                    <div className="emoji_picker">
                      <Picker
                        onEmojiClick={(event, emojiObject) =>
                          onEmojiClick(event, emojiObject)
                        }
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    onClick={() =>
                      showEmoji ? setShowEmoji(false) : setShowEmoji(true)
                    }
                  >
                    <Smile size={32} />
                  </div>
                  <button
                    className="footer_button_send"
                    onClick={() => sendMessage(chat._id)}
                  >
                    <p>Send</p>
                    <Send size={18} />
                  </button>
                </div>
              ) : (
                <div className="d-flex align-items-center justify-content-between right-section-bottom-restrict">
                  <div>
                    This conversation is not assigned to you. In order to write
                    a message, click "join" or "assign"
                  </div>
                  <div className="right-section-bottom-restrict-buttons">
                    <div
                      className="right-section-bottom-restrict-buttons-join"
                      onClick={() => {
                        joinChat(chat._id);
                      }}
                    >
                      <strong>Join</strong>
                    </div>
                    <div
                      className="right-section-bottom-restrict-buttons-join"
                      onClick={() => fetchAdmins()}
                    >
                      <strong>Assign</strong>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div className="d-flex align-items-center justify-content-between right-section-bottom-restrict">
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "-60px",
                  }}
                >
                  This conversation is <strong>CLOSED</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSection;
