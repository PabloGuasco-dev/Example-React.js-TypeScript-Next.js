import Head from 'next/head'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import Navbar from './Navbar';


const theme: DefaultTheme = {
    colors: {
        primary: '#111',
        secondary: '#0070f3',
    },
}

export default function Layout({ children }) {
    const title = 'Github for humans';

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Head>
                <title>{title}</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
                />
            </Head>
            <Navbar />
            <section className="section">
                {children}
            </section>
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                        Built with ❤️ and NextJS
                    </p>
                </div>
            </footer>
        </ThemeProvider>
    );
}
