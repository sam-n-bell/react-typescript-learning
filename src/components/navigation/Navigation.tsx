import React from 'react';
import { Nav } from 'react-bootstrap'

export const Navigation: React.FC = (props) => {

    return (
        <Nav
            style={{borderBottom: '1px solid black', marginBottom: '5px'}}
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
    </Nav.Link>
            </Nav.Item>
        </Nav>
    )

}