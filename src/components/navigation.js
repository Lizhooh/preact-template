import { Component } from 'preact';
import { Link } from 'preact-router/match';

// 顶端的导航
export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div class="menu">
                    <Link activeClassName="active" href="/">Home</Link>
                    <Link activeClassName="active" href="/about">About</Link>
                    <Link activeClassName="active" href="/404">404</Link>
                </div>
            </div>
        );
    }
}

