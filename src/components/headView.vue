<template>
	<header class="index-title">
		<div class="clearfix header-content">
			<h1 class = "logo"><router-link to = "/index">logo</router-link></h1>
			<el-row class="clearfix">
				<el-col class = "item_li"><div class="grid-content bg-purple"><router-link to = "/index">首页</router-link></div></el-col>
				<el-col class = "item_li"><div class="grid-content bg-purple-light"><router-link to = "/techMode">教学模式</router-link></div></el-col>
				<el-col class = "item_li"><div class="grid-content bg-purple"><router-link to = "/courseSystem">课程体系</router-link></div></el-col>
				<el-col class = "item_li"><div class="grid-content bg-purple-light"><router-link to = "/about">关于我们</router-link></div></el-col>
			</el-row>
			<el-breadcrumb separator="/" v-if="!ifLogin">
				<i class="profile"></i>
  				<el-breadcrumb-item :to="'/signin'">登录</el-breadcrumb-item>
  				<el-breadcrumb-item :to="'/signup'">注册</el-breadcrumb-item>
  			</el-breadcrumb>
  			<el-dropdown v-else>
			  	<span class="el-dropdown-link">
					<i class="profile has-login"></i><span>{{userName}}</span>
			  	</span>
			  	<el-dropdown-menu slot="dropdown">
			    	<el-dropdown-item><router-link to="/usercenter">个人中心</router-link></el-dropdown-item>
			    	<el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
			  	</el-dropdown-menu>
			</el-dropdown>
		</div>
	</header>
</template>

<script>
export default{
	data(){
		return {
			ifLogin: false,
			userName: ''
		}
	},
	mouted(){
		this.eventBus.$on('userInfo', function(val){
      		this.userName = val.userName
    	})
		if(sessionStorage.getItem('ifLogin')){
			this.ifLogin = sessionStorage.getItem('ifLogin')
			this.userName = sessionStorage.getItem('userName')
		}else{
			this.ifLogin = false
		}
	},
	methods: {
		logout(){ // 退出登录
			this.tools.loading()
			this.http.logout()
			.then(res => {
				this.tools.loading().close()
				if(res.data.code == '0015'){ // 退出登录成功
					sessionStorage.clear()
					this.ifLogin = false
					this.$router.push('/index')
				}
			})
		}
	}
}
</script>

<style lang="scss">
	// 使用全局样式
	.el-dropdown-link{
		display: flex;
		align-items: center;
		cursor: pointer;
		span{
			margin-left: 10px;
			font-size: 16px;
			color: #333;
		}
	}
</style>