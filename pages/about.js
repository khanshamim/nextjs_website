import * as React from 'react';
import ResponsiveAppBar from '../components/ui/appBar';
import Footer from '../components/ui/footer';

export default function AboutPage() {
    return (
        <>
            <header>
                <ResponsiveAppBar />
            </header>
            <main>
                <h1>About</h1>
            </main>
            <Footer />
        </>
    )
}