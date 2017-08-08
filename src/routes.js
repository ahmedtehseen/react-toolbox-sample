import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
	App,
	ScreensTab,
	AddProduct
} from './containers';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={ScreensTab} />
		<Route path='add-product' component={AddProduct} />
	</Route>
);