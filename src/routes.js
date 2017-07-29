import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
	App,
	ScreensTab,
} from './containers';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ScreensTab} />
	</Route>
);