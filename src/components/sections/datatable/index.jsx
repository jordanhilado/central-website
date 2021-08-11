import React from "react";
import './index.css'

export default function Datatable({ data }) {
    console.log(data)
    const columns = data[0] && Object.keys(data[0])
    return (
    <div class="table-div">
        <table class="styled-table" cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>{data[0] && columns.map((heading) => <th style={{ textAlign:"center" }}>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {data.map((row => (
                    <tr>
                        {columns.map((column) => {
                            console.log('test:' + row[column].split('http'))
                            if ( row[column].includes('http') ) {
                                return (
                                    <td><a style={{ textAlign:"center" }} target="_blank" and rel="noopener noreferrer" href={row[column]}>{row[column]}</a></td>
                                )
                            } else {
                                return (
                                    <td style={{ textAlign:"center" }}>{row[column]}</td>
                                )
                            }
                        })}
                    </tr>
                )))}
            </tbody>
        </table>
    </div>
    )
}