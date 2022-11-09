import { Flex, MediaQuery, Table, Title } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';
import PdfReader from '../component/PdfReader';
import Tablecomponent from '../component/Tablecomponent';
import TableHead from '../component/TableHead';
import styles from '../styles/Home.module.css';
import { TthcDataType } from '../types/TthcDataType';

const data: TthcDataType[] = [
    {
        id: 1,
        title: 'Kết quả đánh giá, phân loại việc giải quyết TTHC năm 2021',
        createAt: '12-12-2022',
        author: 'Portal Admin',
        src: 'sample.pdf',
    },
    {
        id: 2,
        title: 'Kết quả đánh giá, phân loại việc giải quyết TTHC năm 2021',
        createAt: '12-12-2022',
        author: 'Portal Admin',
        src: 'sample2.pdf',
    },
    {
        id: 3,
        title: 'Kết quả đánh giá, phân loại việc giải quyết TTHC năm 2021',
        createAt: '12-12-2022',
        author: 'Portal Admin',
        src: 'sample3.pdf',
    },
    {
        id: 4,
        title: 'Kết quả đánh giá, phân loại việc giải quyết TTHC năm 2021',
        createAt: '12-12-2022',
        author: 'Portal Admin',
        src: 'sample.pdf',
    },
    {
        id: 5,
        title: 'Kết quả đánh giá, phân loại việc giải quyết TTHC năm 2021',
        createAt: '12-12-2022',
        author: 'Portal Admin',
        src: 'sample2.pdf',
    },
];

export default function Home() {
    const [tthc, setTthc] = useState(data);
    const [selectedTthc, setSelectedTthc] = useState<
        TthcDataType | undefined
    >();
    const [pdfSource, setPdfSource] = useState({});
    const handleViewPDF = (tthc: TthcDataType) => {
        setSelectedTthc(tthc);
        // console.log(selectedTthc?.src);

    };

    return (
        <Flex
            direction='column'
            justify='center'
            c='blue'
            align='center'
            mt='1rem'
            w='100%'
        >
            <Title order={3}>KẾT QUẢ PHÂN LOẠI GIẢI QUYẾT TTHC</Title>

            <Flex w='100%' justify='space-around' mt='1rem' direction={{ base: 'column', sm: 'row' }}>
                <Tablecomponent data={data} handleViewPDF={handleViewPDF} selectedId={selectedTthc && selectedTthc.id}/>
                <PdfReader src={`asset/${selectedTthc?.src}`} />
            </Flex>
        </Flex>
    );
}
