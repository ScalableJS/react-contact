import React from 'react';
import {ListGroup, Row, Col} from 'react-bootstrap';
import {IconIncoming, IconOutgoing} from "./Icons";


export default function UserCall({contact}) {
    const CallDirect = ({type})=>{
        if(type === 1){
            return <Col>{'Incoming'}<IconIncoming /></Col>
        } else if(type === 2){
            return <Col>{'Outgoing'}<IconOutgoing /></Col>
        }
        return <Col>'Didn\'t connect'</Col>
    };

    return (
        contact.callHistory.map((item) => {
            const formatCallDate = new Intl.DateTimeFormat('en-GB', {
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            }).format(item.timestamp);

            const formatCallDuration = new Intl.DateTimeFormat('en-GB', {
                minute: 'numeric',
                second: 'numeric'
            }).format(item.duration);


            return <ListGroup.Item key={item._id}>
                <Row>
                    <Col className={'text-nowrap'}>{formatCallDate}</Col>
                    <CallDirect type={item.type}/>
                    <Col className={'text-nowrap'}>Duration: {formatCallDuration}</Col>
                </Row>
            </ListGroup.Item>
        })
    )
}
