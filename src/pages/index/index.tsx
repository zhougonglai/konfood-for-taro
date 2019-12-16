import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { AtTabBar, AtGrid } from 'taro-ui';
import { observer, inject } from '@tarojs/mobx';

import './index.scss';

type PageStateProps = {
	counter: {
		counter: number;
		increment: Function;
		decrement: Function;
		incrementAsync: Function;
	};
};

interface Index {
	props: PageStateProps;
}

@observer
@inject('counter')
class Index extends Component {
	/**
	 * 指定config的类型声明为: Taro.Config
	 *
	 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
	 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
	 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
	 */
	config: Config = {
		navigationBarTitleText: '首页',
	};

	state = {
		current: 0,
	};

	onTabChange = current => {
		this.setState({
			current,
		});
	};

	render() {
		const { current } = this.state;

		return (
			<View className='index'>
				<AtTabBar
					tabList={[
						{ title: '热门' },
						{ title: '男装' },
						{ title: '美妆' },
						{ title: '手机' },
						{ title: '鞋包' },
						{ title: '食品' },
						{ title: '电器' },
						{ title: '女装' },
						{ title: '百货' },
					]}
					current={current}
					onClick={index => this.onTabChange(index)}
				/>
				<Swiper
					indicatorColor='#999'
					indicatorActiveColor='#333'
					circular
					indicatorDots
					autoplay>
					<SwiperItem>
						<Image
							className='full-width'
							src='http://lorempixel.com/375/150/business/1'
						/>
					</SwiperItem>
					<SwiperItem>
						<Image
							className='full-width'
							src='http://lorempixel.com/375/150/business/2'
						/>
					</SwiperItem>
					<SwiperItem>
						<Image
							className='full-width'
							src='http://lorempixel.com/375/150/business/3'
						/>
					</SwiperItem>
				</Swiper>
				<Swiper className='app-menus'>
					<SwiperItem>
						<AtGrid
							hasBorder={false}
							columnNum={5}
							data={[
								{
									image:
										'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
									value: '领取中心',
								},
								{
									image:
										'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
									value: '找折扣',
								},
								{
									image:
										'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
									value: '领会员',
								},
								{
									image:
										'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
									value: '新品首发',
								},
								{
									image:
										'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
									value: '领京豆',
								},
								{
									image:
										'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
									value: '手机馆',
								},
								{
									image:
										'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
									value: '新品首发',
								},
								{
									image:
										'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
									value: '领京豆',
								},
								{
									image:
										'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
									value: '手机馆',
								},
								{
									image:
										'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
									value: '手机馆',
								},
							]}
						/>
					</SwiperItem>
					<SwiperItem>
						<AtGrid
							hasBorder={false}
							columnNum={5}
							data={[
								{
									image:
										'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
									value: '领取中心',
								},
								{
									image:
										'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
									value: '找折扣',
								},
								{
									image:
										'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
									value: '领会员',
								},
								{
									image:
										'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
									value: '新品首发',
								},
								{
									image:
										'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
									value: '领京豆',
								},
								{
									image:
										'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
									value: '手机馆',
								},
								{
									image:
										'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
									value: '新品首发',
								},
								{
									image:
										'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
									value: '领京豆',
								},
								{
									image:
										'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
									value: '手机馆',
								},
								{
									image:
										'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
									value: '手机馆',
								},
							]}
						/>
					</SwiperItem>
				</Swiper>
			</View>
		);
	}
}

export default Index as ComponentType;
