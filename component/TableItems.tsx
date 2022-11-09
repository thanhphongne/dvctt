import { Button } from '@mantine/core';
import React from 'react';
import { TthcDataType } from '../types/TthcDataType';

type Props = {
    tthc: TthcDataType;
    handleViewPDF: (tthc: TthcDataType) => void;
    selectedId: number | undefined;
};

const TableItem = ({ tthc, handleViewPDF, selectedId }: Props) => {
    const active = tthc.id === selectedId ? '#CBD0D5' : '';
    const isDisable = tthc.id === selectedId ? true : false;

    return (
        <tr
            style={{
                backgroundColor: active,
            }}
        >
            <td>{tthc.id}</td>
            <td>{tthc.title}</td>
            <td>{tthc.createAt}</td>
            <td>{tthc.author}</td>
            <td>
                <Button onClick={() => handleViewPDF(tthc)} disabled={isDisable}>
                    Xem
                </Button>
            </td>
        </tr>
    );
};

export default TableItem;
