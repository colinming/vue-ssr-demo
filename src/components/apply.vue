<template>
	<div class="apply-wrapper">
		<header>
			<h1></h1>
			<h2>免费申请体验课</h2>
		</header>
		<section class="form-wrapper">
			<el-form ref="form" :model="form" 
			:rules="rules" label-width = "80px">
				<i class="guide-edit"></i>
				<el-form-item prop = "phoneNum" label = "手机号码">
			    	<el-input v-model="form.phoneNum" placeholder = "请输入您的手机号码" maxlength = "11"></el-input>
			  	</el-form-item>
			  	<el-form-item prop = "smsCode" label="验证码">
			    	<el-input v-model="form.smsCode" placeholder = "请输入短信验证码" maxlength = "6"></el-input>
				    <span class="code-msg" @click = "getSmsCode">{{ smsMes }}</span>
			  	</el-form-item>
			  	<el-form-item prop = "babyName" label="宝宝姓名">
			    	<el-input v-model="form.babyName" placeholder = "请输入您的宝宝姓名" maxlength = "20"></el-input>
			  	</el-form-item>
			  	<el-form-item prop = "babyBirthday" label="宝宝生日">
			  		<el-date-picker
			  			:editable = "false"
				      	v-model="form.babyBirthday"
				      	type="date"
				      	placeholder="点击选择宝宝出生日期"
				      	:picker-options = "dateOptions"
				    >
				    </el-date-picker>
			  	</el-form-item>
			</el-form>
			<div class="apply-btn-wrapper">
				<i class="apply-guide"></i>
				<el-button type="primary" class = "apply-btn" @click = "applyBtn">免费申请</el-button>
			</div>
		</section>
		<footer>
			<ul class="footer-list">
				<li>
					<router-link to = "/index">首页</router-link>
				</li>
				<li>
					<router-link to = "/techMode">教学模式</router-link>
				</li>
				<li>
					<router-link to = "/courseSystem">课程体系</router-link>
				</li>
				<li>
					<router-link to = "/about">关于我们</router-link>
				</li>
			</ul>
			<p>粤ICP备10086502</p>
		</footer>
	</div>
</template>

<script>
import { testPhoneNum, formatDate } from 'assets/js/tools.js'

export default {
	data(){
		const validPhone = (rule, value, callback) => {
			if(!value){
				return callback(new Error('请输入您的手机号码'))
			}else if(!testPhoneNum(value)){
				return callback(new Error('请输入正确的手机号码'))
			}else{
				callback()
			}
		}
		const validSmsCode = (rule, value, callback) => {
			if(!value){
				return callback(new Error('请输入短信验证码'))
			}else{
				callback()
			}
		}
		const validBabyName = (rule, value, callback) => {
			
            if(!this.form.babyName){
                return callback(new Error('请输入宝宝姓名'))
            }else{
            	let userNameLen = this.form.babyName.length
            	let zhLen = 0
           		if(this.form.babyName.match(/[\u4e00-\u9fa5]/g)){
           			zhLen  = this.form.babyName.match(/[\u4e00-\u9fa5]/g).length
           		}
      
            	if(userNameLen + zhLen > 20){
                	return callback(new Error('宝宝姓名不得超过20字符'))
            	}else{
            		callback()
            	}
            }
		}
		const validBirthday = (rule, value, callback) => {
			if(!this.form.babyBirthday){
                return callback(new Error('请选择宝宝的出生日期'))
			}else{
				callback()
			}
		}
		return {
			smsMes: '获取验证码',
			codeFlag: false,
			form: {	
				phoneNum: '',
				smsCode: '',
				babyName: '',
				babyBirthday: new Date() // 设置默认日期
			},
			rules: {
				phoneNum: [
					{validator: validPhone, trigger: 'blur'}
				],
				smsCode: [
					{validator: validSmsCode, trigger: 'blur'}
				],
				babyName: [
					{validator: validBabyName, trigger: 'blur'}
				],
				babyBirthday: [
					{validator: validBirthday, trigger: 'change'}
				]
			},
			dateOptions: { // 年龄选择区间控制
                disabledDate(time) { // 日期选择区间限制： 12岁之前到今天的日期可选择
                    let curDate = (new Date()).getTime() // 当前时间
                    let rangeTime = 12 * 365 * 24 * 3600 * 1000 // 12年的时间戳
                    let threeMonths = curDate - rangeTime      

                    return time.getTime() > Date.now() || time.getTime() < threeMonths
                }
            },
            TIME_COUNT: 60
		}
	},
	watch:{
		'form.phoneNum'(newVal, oldVal){
			if(newVal){
				this.$nextTick(() => {
					this.form.phoneNum = newVal.replace(/\D/g,'')
				})
			}
		},
		'form.smsCode'(newVal, oldVal){
			if(newVal){
				this.$nextTick(() => {
					this.form.smsCode = newVal.replace(/\D/g,'')
				})
			}
		}
	},
	beforeRouteLeave(to, from, next){	
		this.TIME_COUNT = 60
		this.$refs.form.resetFields() // 清除数据及校验效果
		next()
	},
	mounted(){
		if(localStorage.getItem('userPhone')){
			this.form.phoneNum = localStorage.getItem('userPhone')
			this.$message('短信发送成功')
			if(!this.codeFlag){
				this.codeFlag = true
				let Timer = setInterval(() => { // 59~1
					this.TIME_COUNT--
					this.smsMes = `${this.TIME_COUNT}s`
					if(this.TIME_COUNT == 0){
						clearInterval(Timer)
						this.smsMes = '获取验证码'
						this.TIME_COUNT = 60
						this.codeFlag = false
					}
				}, 1000)
			}	
			localStorage.clear()
		}
	},
	methods: {
		getSmsCode(){
			let This = this	
			this.$refs.form.validateField('phoneNum', (data) => {
				if(!data){ // 验证通过
					
					if(!this.codeFlag){
						// 调用接口
						this.tools.loading()
						this.http.getSMSCode(this.form.phoneNum)
						.then(res => {
							this.tools.loading().close()
							// console.log(res)
							if(res.data.code == '0042'){
								this.codeFlag = true
								let Timer = setInterval(() => { // 59~1
									This.TIME_COUNT--
									This.smsMes = `${This.TIME_COUNT}s`
									if(This.TIME_COUNT == 0){
										clearInterval(Timer)
										This.smsMes = '获取验证码'
										This.TIME_COUNT = 60
										This.codeFlag = false
									}
								}, 1000)
							}
							this.$message(res.data.msg)
						})

					}

				}
			})

		},
		applyBtn(){
			this.$refs.form.validate(valid => {
				if(valid){
					let params = {
						tel: this.form.phoneNum,
						name: this.form.babyName.trim(),
						birthday: formatDate(this.form.babyBirthday),
						verify_code: this.form.smsCode
					}
					this.tools.loading()
					this.http.apply(params)
					.then(res => {
						this.tools.loading().close()
						// console.log(res)
						this.$message(res.data.msg)
						if(res.data.code == '0082'){
							
							this.$router.push('/index')
						}
					})
				}	
				
			})
			
		}
	}
}
</script>

<style lang="scss">
.apply-wrapper{
	min-width: 1200px;
	header{
		height: 92px;
		background-color: #ffe349;
		display: flex;
		align-items: center;
		h1{
			width: 150px;
			height: 55px;
			margin-left: 360px;
			background: url('~assets/images/logo.png') no-repeat center center /100% 100%;
		}
		h2{
			margin-left: 20px;
			font-size: 30px;
			color: #333;
		}
	}
	.form-wrapper{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 140px;
		box-sizing: border-box;
		border-top: 1px solid #f5f5f5;
		padding-bottom: 194px;
		.el-form{
			position: relative;
		}
		.guide-edit{
			position: absolute;
			top: -42px;
			left: -36px;
			width: 88px;
			height: 32px;
			background: url(~assets/images/pencil.png) no-repeat center center /cover;
		}
		.el-form-item__content{
			margin-left: 0 !important; 
			width: 285px;
		}
		.el-form-item{
			margin-bottom: 40px;
			width: 410px;
			height: 58px;
			box-sizing: border-box;
			border-radius: 4px;
			background-color: #fff;
			padding: 20px;
			border: 1px solid #ccc;
			display: flex;
			align-items: center;
		}
		.el-form-item__label{
			padding-right: 0;
			font-size: 18px;
			color: #333;
			text-align: center;
		}
		.el-form-item:last-child .el-input__inner{
			padding-left: 30px;

		}
		.el-input{
		}

		.el-input__inner{
			font-size: 18px;
			color: #000;
			border: none;
			padding: 0 0 0 10px;
		}
		::-webkit-input-placeholder {
			color: #999;
		}
		:-ms-input-placeholder{
			color: #999;
		}
		.code-msg{
			width: 114px;
			height: 40px;
			background-color: #e5e5e5;
			border-radius: 4px;
			position: absolute;
			top: 50%;
			margin-top: -20px;
			right: 0;
			font-size: 18px; 
			color: #333;
			text-align: center;
			cursor: pointer;
		}
		.apply-btn-wrapper{
			position: relative;
		}
		.apply-guide{
			position: absolute;
			top: -48px;
			right: -34px;
			width: 34px;
			height: 48px;
			background: url(~assets/images/jiantou.png) no-repeat center center /cover;
		}
		.apply-btn{
			width: 410px;
			height: 56px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #ffe349;
			box-shadow: 0px 4px 0px 0px #999999;
			border-radius: 10px;
			text-align: center;
			border: none;
			color: #fff;
			font-size: 20px;
			font-weight: bold;
		}
		.el-form-item__error{
			padding-top: 15px;
			font-size:16px;
		}
	}
	footer{
		display: flex;
		border-top: 1px solid #f5f5f5;
		height: 108px;
		justify-content: center;
		padding-top: 42px;
		.footer-list{
			display: flex;
			margin-right: 400px;
			li{
				margin-right: 90px;
				display: flex;
			}
			li:first-child a{
				font-size: 16px;
				color: #ffcc00;
			    font-weight: bold;
			    padding-bottom: 6px;
			    border-bottom: 1px solid #ffe349;
			}
			li:last-child{
				margin-right: 0;
			}
			a{
				font-size: 16px;
				color: #333;
			}
		}
		p{
			color: #333;
			font-size: 16px;
		}
	}
}	
</style>