import { Button } from '@mantine/core';
import React from 'react';
import { TthcDataType } from '../types/TthcDataType';

type Props = {
    tthc: TthcDataType;
    handleViewPDF: (tthc: TthcDataType) => void;
};

const TableItem = ({ tthc, handleViewPDF }: Props) => {
    

    return (
        <tr> 
            <td>{tthc.id}</td>
            <td>{tthc.title}</td>
            <td>{tthc.createAt}</td>
            <td>{tthc.author}</td>
            <td><Button onClick={() => handleViewPDF(tthc)}>Xem</Button></td>
        </tr>
    );
};

export default TableItem;
