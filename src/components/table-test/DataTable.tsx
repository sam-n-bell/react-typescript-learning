import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


export const DataTable: React.FC = (props) => {
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
    type columnArrayType = Array<columnType>
    const [columns, setColumns] = useState<columnArrayType>(
        [
            {dataField: 'id',text: 'movie ID'},
            {dataField: 'name',text: 'movie name'}
        ]
    )



    return (
        <div>
            <h1>hello, world</h1>
            <hr />
            {tableData.map((data) => {
                return <div key={data.id}>{data.id}, {data.name}</div>
            })}
            {/* <Grid item xs={4}>
          {numCards.map((card) => {
            // return <MovieCard key={card}/>
            return <Paper key={card}>xs</Paper>
          })}
        </Grid> */}
            {/* {tableData.map(d) => } */}
            <BootstrapTable keyField='id' data={ tableData } columns={ columns } />
        </div>
    )
}