import Head from 'next/head';
import Nav from '../components/nav';
import { withApollo } from '../lib/apollo';

import '../styles/main.css';

const IndexPage = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <div className="border border-8 border-blue-600">
            <p>some text</p>
        </div>
    </div>
);

export default withApollo(IndexPage);
