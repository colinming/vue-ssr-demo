 <template>
	<div class="index">
		<div class="banner-wrapper">
			<el-carousel :class = "{'slide': bannerList.length > 1}">
	      		<el-carousel-item v-for="item in bannerList" :key="item.id">
	        		<router-link :to = "item.url" class = "banner"><img :src="item.src" alt="" ref="oImg"></router-link>
	      		</el-carousel-item>
	    	</el-carousel>
			<div class="cover">
				<h2 class="apply-title">免费申请</h2>
				<h2 class="apply-title apply-title-bold">线上体验课</h2>
				<el-form ref="form" :model="form" :rules="rules">
					<el-form-item prop = "phoneNum">
						<el-input v-model="form.phoneNum" placeholder="请输入手机号码" maxlength = "11"></el-input>
					</el-form-item>
					<el-button type="primary" @click = "apply">立刻领取</el-button>
				</el-form>
			</div>
		</div>

		<div class="target-wrapper">
			<h3 class="title title-pos">教学目标</h3>
			<h5 class="description">综合提升孩子的记忆力、注意力、反应力、思维力、自控力</h5>
			<ul class="target-list">
        <li>
					<img src="~assets/images/menory.png" alt="">
					<p>记忆力</p>
				</li>
				<li>
					<img src="~assets/images/foucs.png" alt="">
					<p>注意力</p>
				</li>
				<li>
					<img src="~assets/images/reagency.png" alt="">
					<p>反应力</p>
				</li>
				<li>
					<img src="~assets/images/uuderstanding.png" alt="">
					<p>思维力</p>
				</li>
				<li>
					<img src="~assets/images/zizhili.png" alt="">
					<p>自控力</p>
				</li>
			</ul>
		</div>

		<div class="course-adv">
			<h5 class="course-title course-title-pos">课程优势</h5>
			<ul class="course-list">
				<li v-for = "(item, index) in courseList" :key="item.id">
					<div class="detail-wrapper">
						<div class="des">
							<img :src="item.src" alt="">
							<div class="des-title">
								<h5>{{ item.t1 }}</h5>
								<h5>{{ item.t2 }}</h5>
							</div>
						</div>
						<div class="detail">
							<h5>{{ item.t1 }}</h5>
							<h5>{{ item.t2 }}</h5>
							<p>{{ item.detail }}</p>
						</div>
					</div>	
				</li>
			</ul>
		</div>
    	
	</div>
</template>
 
<script>
import { testPhoneNum, courseAdv } from 'assets/js/tools'
export default{
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
		return {
			bannerList: [
				{"id": '1', "src": "https://sk-online-miniprogram.sikegroup.com/website/images/banner1-20181030.png", "url": ""}
			],
			form: {
				phoneNum: '',
			},
			rules: {
				phoneNum: [
					{validator: validPhone, trigger: 'blur'}
				]
			},
			courseList: courseAdv
		}
	},
	watch:{
		'form.phoneNum'(newVal, oldVal){
			if(newVal){
				this.$nextTick(() => {
					this.form.phoneNum = newVal.replace(/\D/g,'')
				})
			}
		}
	},
	methods: {
		apply(){
			this.$refs.form.validate(valid => {
				if(valid){
					this.tools.loading()
					this.http.getSMSCode(this.form.phoneNum)
					.then(res => {
						this.tools.loading().close()
						if(res.data.code == '0042'){ // 发送短信验证码成功
							localStorage.setItem('userPhone', this.form.phoneNum)
							this.$router.push('/apply')
						}else{
							this.$message(res.data.msg)
						}
					})
				}
			})
		}
	}
}
</script>

<style lang="scss">
.index{
	.banner-wrapper{
		position: relative;
		width: 100%;
		height: 690px;
	}
	.el-carousel{
		position: absolute;
		z-index: 5;
		width: 100%;
	}
	.el-carousel__container{
		height: 690px;
		img{
			width: 100%;
			height: 690px; 
		}
	}
	.cover{
		position: absolute;
		top: 150px;
		left: 390px;
		z-index: 10;
		display: flex;
		flex-direction: column;
		.el-form{
			display: flex;
			flex-direction: column;
		}
		.el-input__inner{
			width: 278px;
			height: 46px;
			color: #000;
			font-size: 18px;
			padding-left: 20px;
		}
		::-webkit-input-placeholder{
			color: #999;
		}
		:-ms-input-placeholder{
			color: #999;
		}
		input{
			border: 0;
		}
		.el-button{
			width: 278px;
			height: 56px;
			background-color: #ffe349;
			border-radius: 10px;
			border: none;
			font-size: 24px;
			color: #fff;
			font-weight: bold;
		}
		.apply-title{
			text-align: center;
			color: #ffffff;
			font-size: 54px;
			font-weight: normal;
		}
		.apply-title-bold{
			font-weight: bold;
			margin-bottom: 36px;
		}
	}
	.target-wrapper{
		display: flex;
		flex-direction: column;
		align-items: center;
		.title{
			text-align: center;
			font-size: 30px;
			color: #333;
			position: relative;
			margin: 80px auto 18px;
		}
		.title:before, .title:after{
			position: absolute;
			top: 50%;
			margin-top: -5px;
			content: "";
			width: 10px;
			height: 10px;
			border-radius: 5px;
			background-color: #ffcc33;
		}
		.title-pos:before{
			left: -30px;
		}
		.title-pos:after{
			right: -30px;
		}
		.description{
			font-size: 24px;
			color: #333;
			font-weight: normal;
		}
		
	}
	.target-list{
		display: flex;
		margin: 62px auto 80px;
		li{
			text-align: center;
			margin-right: 130px;
			display: flex;
			flex-direction: column;
		}
		li:last-child{
			margin-right: 0;
		}
		img{
			width: 110px;
			height: 110px;
		}
		p{
			margin-top: 20px;
			font-size: 18px;
			color: #333;
		}
	}
	.course-adv{
		height: 1026px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: url('~assets/images/ditu.png') no-repeat center center /cover;
		.course-title{
			font-size: 30px;
			color: #333;
			position: relative;
			margin: 80px auto;
		} 
		.course-title:before, .course-title:after{
			position: absolute;
			top: 50%;
			margin-top: -5px;
			content: "";
			width: 10px;
			height: 10px;
			border-radius: 5px;
			background-color: #ffcc33;
		}
		.course-title-pos:before{
			left: -30px;
		}
		.course-title-pos:after{
			right: -30px;
		}
		
	}
	.course-list{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		width: 1200px;
		li{
			position: relative;
			width: 570px;
			height: 350px;
			box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.3);
			border-radius: 20px;
			margin: 0 60px 50px 0;
			cursor: pointer;
		}
		li:hover{
			box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.5);
		}
		li:hover .detail{
			animation: fadeIn 0.1s forwards;
		}
		.detail-wrapper{
			height: 100%;
		}
		li:nth-child(2n){
			margin-right: 0;
		}
		li:first-child{ 
			.des-title{
				background: rgba(102, 102, 102, 0.5);
			}
		}
		.des{ // 标题
			position: absolute;
			width: 570px;
			height: 350px;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			border-radius: 20px;
			z-index: 10;
			img{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: 1;
			}
			.des-title{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: 2;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border-radius: 20px;
    			background: rgba(125, 125, 125, 0.5);
			}
			h5{
				font-size: 24px;
				line-height: 39px;
				color: #fff;
			}
		}
		.detail{ // 详情
			position: absolute;
			left: 0;
			top: 0;
			width: 570px;
			height: 350px;
			background-color: #ffe349;
			border-radius: 20px;
			z-index: 5;
			opacity: 0;
			h5{
				text-align: center;
				font-size: 24px;
				line-height: 36px;
				color: #fefefe;
			}
			h5:first-child{
				margin-top: 38px;
			}
			h5:nth-child(2){
				margin-bottom: 40px;
			}
			p{
				font-size: 18px;
				color: #fefefe;
				padding: 0 30px;
				text-indent: 2em;
				line-height: 30px;
			}
		}

	}
}	

@keyframes fadeIn{
	form{
		opacity: 0;
		z-index: 5;
	}
	to{
		opacity: 1;
		z-index: 10;
	}
}

</style>
