import { Table } from '@mantine/core';
import React from 'react';
import { TthcDataType } from '../types/TthcDataType';
import TableHead from './TableHead';
import TableItem from './TableItems';

type Props = {
    data: TthcDataType[];
    handleViewPDF: (tthc: TthcDataType) => void;
    selectedId: number | undefined;
};

const Tablecomponent = (props: Props) => {
    return (
        <Table
            w='45%'
            withColumnBorders
            withBorder
        >
            <TableHead />
            <tbody>
                {props.data.map((item) => (
                    <TableItem
                        tthc={item}
                        key={item.id}
                        handleViewPDF={props.handleViewPDF}
                        selectedId={props.selectedId}
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default Tablecomponent;
