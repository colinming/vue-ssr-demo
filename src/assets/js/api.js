import axios from 'axios'
export default {
/********登录注册****************/
	getSMSCode(tel){ // 首页--获取验证码
		return axios.post('home/Users/sendVerifyCode', {tel})
	},
	apply(params){ // 首页--提交申请
		return axios.post('home/Users/makeAppointment', params)
  },
  
  // 登录-发送验证码
  userLoginSendSignCode(tel){
    return axios.post('admin/Officialuser/userLoginSendSignCode', {tel:tel})
  },

  // 登录-登录
  login(params){
    return axios.post('admin/Officialuser/login', {tel:params.tel,sign_code : params.sign_code })
  },
  logout(){ // 退出登录
    return axios.post('admin/Officialuser/logout')
  },

  // 注册-发送验证码
  addBabySendSignCode(tel){
    return axios.post('admin/Officialuser/addBabySendSignCode', {tel:tel})
  },

  // 注册-验证用户验证码
  checkAddBabySignCode(params){
    return axios.post('admin/Officialuser/checkAddBabySignCode', {tel:params.tel,sign_code : params.sign_code })
  },

  // 注册-填写用户信息完成注册
  addBaby(params){
    return axios.post('admin/Officialuser/addBaby', {tel:params.tel,baby_name : params.baby_name,birthday:params.birthday,sex : params.sex })
  },

/************个人信息**************************/
  // 获取个人信息
  getBabyInfo(){
    return axios.post('admin/Officialuser/getBabyInfo', {})
  },
  // 个人主页
  userPage(){
    return axios.post('admin/Officialpersonal/showPersonalInfo')
  },
  // 获取教室链接
  roomLink(class_id){
    return axios.post('admin/Officialclass/getAutoHuoKeLink', {class_id})
  },
  // 测评链接
  testLink(type){
    return axios.post('admin/Officialpersonal/getDetermineLinkByType', {type})
  },

  // 判断是否需要测评
  checkIsDetermin(type){
    return axios.post('admin/Officialclass/checkIsDetermin', {type})
  },
  

/*****************在线课程*******************/
  // 在线课程展示(是否有课)
  showClassInfo(){
    return axios.post('admin/Officialclass/showClassInfo', {})
  },
  // 是否符合年龄段
  checkBabyBirthday(){
    return axios.post('admin/Officialclass/checkBabyBirthday')
  },
  // 推荐时间
  showRecommend(){
    return axios.post('admin/Officialclass/showRecommend', {})
  },
  // 自主选择时间
  showOption(){
    return axios.post('admin/Officialclass/showOption', {})
  },

  // 在线视课程示状态
  getBabyClassStatus(){
    return axios.post('admin/Officialclass/getBabyClassStatus')
  },

  // 体验课上课记录
  getExRecordList(){
    return axios.post('admin/Officialclass/getExRecordList')
  },

  // 正式课上课记录
  getOfRecordList(pageNow){
    return axios.post('admin/Officialclass/getOfRecordList', pageNow)
  },

  // 查看评价
  getSummary(signup_id){
    return axios.post('admin/Officialclass/getSummary', signup_id)
  },

  // 直播课兑换
  exchangeClass(parameter){
    return axios.post('admin/Officialclass/exchangeClass', parameter)
  },


/***************录播课程*******************/
  // 兑换课程
  exchangeCourse(al_cdk){
    return axios.post('admin/Officialvideo/exchangeVideo', {al_cdk})
  },
  // 录播课展示
  recordList(){
    return axios.post('admin/Officialvideo/showVideoInfo')
  },
  updateStage(recorded_video_id, stage_now){ // 更新学习阶段
    return axios.post('admin/Officialvideo/stageChange', {recorded_video_id, stage_now})
  },


  /*****************订单信息*******************/
  getOrderListInfo(){
    return axios.post('admin/Officialpersonal/getOrderListInfo')
  },




}