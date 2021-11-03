
import React from 'react';
import  io  from 'socket.io-client';
import  SOCKET_URL from './config';

export const socket = io(SOCKET_URL, {
  'reconnection': true,
  'reconnectionDelay': 1000,
  'reconnectionDelayMax' : 5000,
  'reconnectionAttempts': 5,
  transports: ['websocket'],
  upgrade: false,
});

export const SocketContext = React.createContext();