import { Flex, Table, Title } from '@mantine/core';
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
        author:'Portal Admin',
        src: 'http://dvctt.camau.gov.vn/cgate-cong-chung-theme/js/main.js?browserId=other&minifierType=js&languageId=vi_VN&b=6102&t=1665886768555',
    },
    {
        id: 1,
        title: 'Kết quả đánh giá, phân loại việc giải quyết TTHC năm 2021',
        createAt: '12-12-2022',
        author:'Portal Admin',
        src: 'http://dvctt.camau.gov.vn/cgate-cong-chung-theme/js/main.js?browserId=other&minifierType=js&languageId=vi_VN&b=6102&t=1665886768555',
    },
    {
        id: 2,
        title: 'Kết quả đánh giá, phân loại việc giải quyết TTHC năm 2021',
        createAt: '12-12-2022',
        author:'Portal Admin',
        src: 'http://dvctt.camau.gov.vn/cgate-cong-chung-theme/js/main.js?browserId=other&minifierType=js&languageId=vi_VN&b=6102&t=1665886768555',
    },
    {
        id: 3,
        title: 'Kết quả đánh giá, phân loại việc giải quyết TTHC năm 2021',
        createAt: '12-12-2022',
        author:'Portal Admin',
        src: 'http://dvctt.camau.gov.vn/cgate-cong-chung-theme/js/main.js?browserId=other&minifierType=js&languageId=vi_VN&b=6102&t=1665886768555',
    },
    {
        id: 4,
        title: 'Kết quả đánh giá, phân loại việc giải quyết TTHC năm 2021',
        createAt: '12-12-2022',
        author:'Portal Admin',
        src: 'http://dvctt.camau.gov.vn/cgate-cong-chung-theme/js/main.js?browserId=other&minifierType=js&languageId=vi_VN&b=6102&t=1665886768555',
    },
    {
        id: 5,
        title: 'Kết quả đánh giá, phân loại việc giải quyết TTHC năm 2021',
        createAt: '12-12-2022',
        author:'Portal Admin',
        src: 'http://dvctt.camau.gov.vn/cgate-cong-chung-theme/js/main.js?browserId=other&minifierType=js&languageId=vi_VN&b=6102&t=1665886768555',
    },
];

export default function Home() {
    const [tthc, setTthc] = useState(data);
    const [selectedTthc, setSelectedTthc] = useState<
        TthcDataType | undefined
    >();
    const [pdfSource, setPdfSource] = useState({})
    const handleViewPDF = (tthc: TthcDataType) => {
        setSelectedTthc(tthc);
        console.log(selectedTthc?.src);
        
    }

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

            <Flex w='100%' justify='space-around' mt='1rem'>
                <Tablecomponent data={data} handleViewPDF={handleViewPDF}/>
                <PdfReader />
            </Flex>
        </Flex>
    );
}
