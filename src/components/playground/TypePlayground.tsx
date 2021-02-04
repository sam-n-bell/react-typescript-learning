import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';


export const TypePlayground: React.FC = (props) => {
    const dispatch = useDispatch();

    type movieType = {
        id: number,
        name: string
    }
    type movieArrayType = Array<movieType>
    const [tableData, setTableData] = useState<movieArrayType>([
        { id: 1, name: 'Movie One' },
        { id: 2, name: 'Movie Two' }
    ]);

    type columnType = {
        dataField: string,
        text: string
    }

    type Address = {
        street: string;
        ZIP: number;
        city: string;
        state: string;
    }

    type Extra = {
        somethingA?: string;
        somethingB?: string;
    }

    type Deeper = {
        EvenDeeper: Extra
    }

    type ExampleResponse = {
        locationName: string;
        ownerName: string;
        address: Address;
        extra?: Extra,
        deeper?: Deeper
    }

    const er1: ExampleResponse = {
        locationName: "Austin Home",
        ownerName: "Sam",
        address: {
            street: "College Hills",
            ZIP: 78759,
            city: "Austin",
            state: "TX"
        },
        extra: {
            somethingA: "im here"
        },
    }

    const extra = er1 && er1.extra;
    const sA = extra && extra.somethingA;
    const sB = extra && extra.somethingB;

    const eD = er1 && er1.deeper;
    const eDEA = eD && eD.EvenDeeper.somethingA

    return (
        <div>
            <h1>hello, world</h1>
            <h3>{er1.extra && er1.extra.somethingB}</h3>
            <h3>{er1.extra && er1.extra.somethingA}</h3>
            <h4>{typeof(sA)}{sA}</h4>
    <h4>{typeof(sB)}{sB}</h4>
            <h5>eDEA {eDEA}</h5>
            <h5>{typeof(eDEA)}</h5>
        </div>
    )
}


// hello, world
// im here
// stringim here
// undefined
// eDEA
// undefined