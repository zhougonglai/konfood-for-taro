import { ComponentClass } from 'react';
import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './Index.scss';

type PageStateProps = {};

type PageDispatchProps = {};

type PageOwnProps = {};

type PageState = {
	name: string;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
	props: IProps;
	state: PageState;
}

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '小红',
		};
	}
	componentWillReceiveProps() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		const { name } = this.state;
		return (
			<View className='Index'>
				<Text>hello world! {name}</Text>
			</View>
		);
	}
}
export default Index as ComponentClass<PageOwnProps, PageState>;
