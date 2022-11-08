import React from 'react';
import { createStyles } from '@mantine/core';

type Props = {};
const TableHead = (props: Props) => {
    const { classes } = useStyles();
    return (
        <thead>
            <tr className={classes.thead}>
                <th>ID</th>
                <th>Tên văn bản</th>
                <th>Ngày đăng</th>
                <th>Người đăng</th>
                <th>Xem Thêm</th>
            </tr>
        </thead>
    );
};

const useStyles = createStyles((theme) => ({
    thead: {
        color: theme.white,
        backgroundColor: theme.colors.gray[2],
    },
}));

export default TableHead;
