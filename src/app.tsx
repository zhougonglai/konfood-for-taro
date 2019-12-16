import Taro, { Component, Config } from '@tarojs/taro';
import { Provider } from '@tarojs/mobx';
import Index from './pages/index';

import counter from './store/counter';

import './app.scss';

// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
// 	require('nerv-devtools');
// }

const store = {
	counter,
};

class App extends Component {
	/**
	 * 指定config的类型声明为: Taro.Config
	 *
	 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
	 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
	 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
	 */
	config: Config = {
		pages: ['pages/index/index', 'pages/user/index'],
		window: {
			navigationBarBackgroundColor: '#fff',
			navigationBarTextStyle: 'black',
			navigationBarTitleText: 'WeChat',
			backgroundTextStyle: 'light',
		},
		tabBar: {
			color: '#597ef7',
			selectedColor: '#2f54eb',
			backgroundColor: 'white',
			list: [
				{
					pagePath: 'pages/index/index',
					text: '首页',
					iconPath: 'static/home.outline.svg',
					selectedIconPath: 'static/home.filled.svg',
				},
				{
					pagePath: 'pages/user/index',
					text: '用户',
					iconPath: 'static/person.outline.svg',
					selectedIconPath: 'static/person.filled.svg',
				},
			],
		},
	};

	componentDidMount() {}

	componentDidShow() {}

	componentDidHide() {}

	componentDidCatchError() {}
	render() {
		return (
			<Provider store={store}>
				<Index />
			</Provider>
		);
	}
}

Taro.render(<App />, document.getElementById('app'));
