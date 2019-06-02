import React from 'react';
import {Pagination} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

export default function Pages({active, count, limit}) {
    let items = [];
    const pageCount = Math.ceil(count / limit);
    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <LinkContainer key={number} to={`/${number}`}>
                <Pagination.Item active={number === active} >
                    {number}
                </Pagination.Item>
            </LinkContainer>

        );
    }

    return (
        <Pagination>{items}</Pagination>
    )
}