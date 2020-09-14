import React, {Component} from 'react';
import Link from 'next/link'
import Router from 'next/router';

class IndexPages extends Component {
    static getInitialProps(context) {
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: "Super App"});
            }, 1000);
        });
        return promise;
    }
    render() {
        return (
            <div>
                <h2>Index page : {this.props.appName}</h2>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>Go to Auth</button>
            </div>        
        );
    }
}

export default IndexPages;
