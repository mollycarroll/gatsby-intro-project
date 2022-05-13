import * as React from 'react';
import { Link } from 'gatsby';

export default function indexPage() {
    return (
        <main>
            <h1>hello universe</h1>
            <Link to='/about'>About this site</Link>
        </main>
    )
}