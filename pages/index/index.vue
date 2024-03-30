<template>
	<view class="container-all">

		<view class='title'>陈桂芳族系成员检索</view>
		<view class="search-view">
			<a-space direction="vertical">

				<a-input-search size="large" v-model:value="searchname" placeholder="输入要搜索的人名彧关键字" enter-button
					@search="onSearch" />


			</a-space>
		</view>
		<uni-table  stripe  border="false" emptyText="暂无更多数据" >
			<uni-tr>
				<uni-th align="center">照片</uni-th>
				<uni-th align="center">姓名</uni-th>
				<uni-th align="center">简介</uni-th>
				<uni-th align="center">联系电话</uni-th>
				<uni-th align="center">编辑</uni-th>
			</uni-tr>
			<uni-tr v-for="(item,index) in context  " :key='index'>
				<uni-td  align="center"><image :src="item.imgurl" @click="clickImg(item)"></image></uni-td>
				<uni-td  align="center"> <text v-for="(i,d) in item.name.split('')" :key='d' :style="setColor(i)">{{i}} </text></uni-td>
				<uni-td><text v-for="(i,d) in item.detail.split('')" :key='d' :style="setColor(i)">{{i}} </text></uni-td>
				<uni-td><text>{{item.phone}}</text></uni-td>
				<uni-td><a href="javascript:;" @click="edit(item)"> 编辑意见</a> </uni-td>
			</uni-tr>
		</uni-table>

	</view>
</template>
<script>
	import {
		message
	} from 'ant-design-vue'
	export default {
		data() {
			return {
				context: [],
				searchname: '',

				getdatas: ''
			}
		},
		onLoad(op) {

		},
		computed: {

		},
		methods: {

			edit(items) {

				uni.navigateTo({
						url: "/pages/modify/modify?name=" + items.name + "&detail=" + items.detail + "&url=" + items
							.imgurl+"&phone=" + items.phone
					}),
					console.log(name)
			},
			onSearch() {
				if (this.searchname) {
					uni.request({
						url: "http://120.26.48.204:3000/getData?name=" + this.searchname,
						success: res => {
							this.context = res.data
							console.log("this.context--->", this.context)

						}
					})
				} else {
					message.error('请输入搜索关键字！')
				}


			},

			setColor(i) {
				if (this.searchname.indexOf(i) != -1) {
					return 'color:#007aff'
				}
			},
			clickImg(item) {

				uni.previewImage({
					urls: [item.imgurl], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
					current: 'item.url', // 当前显示图片的http链接，默认是第一个
					success: function(res) {},
					fail: function(res) {},
					complete: function(res) {},
				})
			}
		}
	}
</script>


<style>
	.title {

		font-size: 38px;
		color: beige;
		margin-top: 80px;
	}

	.search-view {
		color: aliceblue;
		margin-top: 80px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 850px;
		height: 180px;
	}

	.utable {
	    border-collapse: collapse;
		 border-color:green
	  }

	image {
		width: 66px;
		height: 106px;
	}

	table,
	th,
	td {
		margin: 50px;
		border: solid 1px;
	}

	.container-all {
		height: auto;
		width: auto;
		background: linear-gradient(to bottom, #11264f, #90d7ec);

		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
	}
</style>