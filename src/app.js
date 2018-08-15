import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Navigation from './components/navigation';

import Home from './views/home';
import About from './views/about';
import NotFound from './views/not-found';

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app" style={{ paddingTop: 55 }}>
				<Navigation />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<About path="/about" />

					<NotFound default />
				</Router>
			</div>
		);
	}
}


