<template>
	<footer class = "footer-wrapper">
		<div class="clearfix foot-main">
			<el-row>
				<el-col class="grid-content">
					<i class="iconfont icon-home"></i>
					<router-link to = "/index">首页</router-link>
				</el-col>
				<el-col class="grid-content">
					<i class="iconfont icon-modernofteching"></i>
					<router-link to = "/techMode">教学模式</router-link>
				</el-col>
				<el-col class="grid-content">
					<i class="iconfont icon-coursesystem"></i>
					<router-link to = "/courseSystem">课程体系</router-link>
				</el-col>
				<el-col class="grid-content">
					<i class="iconfont icon-aboutus"></i>
					<router-link to = "/about">关于我们</router-link>
				</el-col>
			</el-row>
			<img src="~assets/images/wechat.jpg">
		</div>
		
		<div class = "copy-right">
			<p>Copyright The Shichidachina Group Companies. All Rights Reserved 粤ICP备10086502 <a href="javascript:;">站长统计</a></p>
			<p>粤公网安备 44030502000413</p>
		</div>

	</footer>
</template>

<script>
export default{
	data(){
		return {	
		}
	}
}
</script>

<style lang="scss" scoped>
.footer-wrapper{
	min-width: 1200px;
	border-top: 1px solid #f5f5f5;
    height: 368px;
    margin: -368px auto 0;
    .foot-main{
    	display: flex;
    	justify-content: center;
    	margin-bottom: 36px;
    }
	.el-row{
		padding-top: 40px;
	}
	.grid-content{
		margin-right: 80px;
		a{
			color: #000;
			font-size: 16px;
		}
		i{
			font-size: 16px;
			color: #ffe349;
		}
	}
	.grid-content:last-child{
		margin-right: 0;
	}
	img{ 
		margin: 22px 0 0 430px;
		width: 176px;
		height: 176px;
	}
	.copy-right{
		text-align: center;
		font-size: 16px;
		color: #333;
		p:first-child{
			padding-bottom: 8px;
		}
		a{
			color: #333;
		}
	}
	.el-col-24{
		width: auto;
		display: flex;
		align-items: center;
	}	
}
@media screen and (min-width: 768px) and (max-width: 1199px) { 
	.footer-wrapper{
		min-width: 768px;
	}
	.footer-wrapper img{
		margin-left: 100px;
	}
	.footer-wrapper .grid-content{
		margin-right: 40px;
	}
}
@media screen and (min-width: 1200px) {
	.footer-wrapper{
		min-width: 1200px;
	}
}
</style>