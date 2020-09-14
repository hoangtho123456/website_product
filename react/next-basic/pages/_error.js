import React from 'react';
import Link from 'next/link'
import Router from 'next/router';
const errorPage = () => (
    <div>
        <h2>Ops, something went wrong!</h2>
        <p>Go to <Link href="/"><a>Go back</a></Link></p>
    </div>
);

export default errorPage;
