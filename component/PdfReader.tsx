import React from 'react';
// Core viewer
import { CharacterMap, Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Flex, Title } from '@mantine/core';

type Props = {
    src: string;
};

const PdfReader = ({ src }: Props) => {
    // console.log(src);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const characterMap: CharacterMap = {
        isCompressed: true,
        // The url has to end with "/"
        url: 'https://unpkg.com/pdfjs-dist@2.6.347/cmaps/',
    };

    return (
        <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js'>
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    height: '750px',
                    width: '52%',
                }}
            >
                {(src != 'asset/undefined' && (
                    <Viewer characterMap={characterMap} fileUrl={src} plugins={[defaultLayoutPluginInstance]}/>
                )) || (
                    <Flex justify='center' mt='50%'>
                        <Title order={5}>Chọn tài liệu để hiển thị!</Title>
                    </Flex>
                )}
            </div>
        </Worker>
    );
};

export default PdfReader;
