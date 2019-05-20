import React, {Component} from 'react';
import {Icon} from "react-icons-kit";
import {user} from 'react-icons-kit/icomoon/user'
import {phone} from 'react-icons-kit/icomoon/phone'
import {mail2 as mail} from 'react-icons-kit/icomoon/mail2'

export const IconUser = () => (
    <span className={'mr-1'} style={{width: 24, height: 24, display: 'inline-block', color: '#2A9D8F'}}>
            <Icon size={'100%'} icon={user}/>
        </span>
);
export const IconPhone = () => (
    <span className={'mr-1'} style={{width: 24, height: 24, display: 'inline-block', color: '#2A9D8F'}}>
            <Icon size={'100%'} icon={phone}/>
        </span>
);
export const IconMail = () => (
    <span className={'mr-1'} style={{width: 24, height: 24, display: 'inline-block', color: '#2A9D8F'}}>
            <Icon size={'100%'} icon={mail}/>
        </span>
);