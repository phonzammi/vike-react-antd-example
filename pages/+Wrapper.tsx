export { Wrapper }

import React from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { usePageContext } from 'vike-react/usePageContext';

function Wrapper({ children }: { children: React.ReactNode }) {
    const pageContext = usePageContext()

    return <StyleProvider cache={pageContext.config.antdCache}>{children}</StyleProvider>
}