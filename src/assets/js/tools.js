import Vue from 'vue'
import http from './api.js'

export const testPhoneNum = (phoneNum) => {
    return /^1\d{10}$/.test(phoneNum)
}

export let courseAdv = [
	{id: '0', showCover: false, src: 'https://sk-online-miniprogram.sikegroup.com/website/images/teacher-20181030.png', t1: '专业有爱的师资团队', t2: '用爱激发学习潜能', detail: '通过严格的人才选拔和录用筛选，为孩子选择有爱心、有责任心的教师，100%拥有专业早期教育背景。七田真教学法始终坚持：爱心激发潜能。以爱为基础，通过积极温暖的引导方式，可以更好地激发出孩子的学习潜能。'},
	{id: '1', showCover: false, src: 'http://pcs3r4wno.bkt.clouddn.com/official/image/kechengyoushi2.png', t1: '七田真60年记忆力教学', t2: '打造在线精品记忆力课', detail: '以七田真记忆训练法(连锁法记忆、BOX记忆、照相记忆等)为基础，结合丰富有趣的游戏化教学场景设计，辅以良好的互动教学氛围，刺激幼儿的大脑发育，为孩子在幼儿园、小学、中学乃至一生中的学习奠定记忆力基础。 '},
	{id: '2', showCover: false, src: 'http://pcs3r4wno.bkt.clouddn.com/official/image/kechengyoushi3.png', t1: '游戏化的趣味教学方式', t2: '让孩子轻松提升记忆力', detail: '游戏化教学场景设计，带来沉浸式的教学体验；有趣的互动方式，充分激发孩子学习兴趣；每节课设置不同的闯关主题，让课程充满新鲜感和趣味性，实现让孩子轻松提升记忆力的目的。'},
	{id: '3', showCover: false, src: 'http://pcs3r4wno.bkt.clouddn.com/official/image/kechengyoushi4.png', t1: '国际领先的大脑测评', t2: '全面评估孩子的认知能力', detail: '拥有国内外知名脑科学与教育研究专家联合打造的儿童核心学习能力评测系统，包含记忆力、注意力、自控力、反应力、思维力五个维度，全面评估孩子的基础认知能力。详细的反馈报告提供科学专业的指导，帮助家长更好的培养孩子各项学习能力。'}
]

export const formatDate = date => { // 格式化日期 Tue Jul 03 2018 00:00:00 GMT+0800
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    if (month < 10) {
        month = "0" + month
    }
    if (day < 10) {
        day = "0" + day
    }
    return year + "-" + month + "-" + day
}

export const globalData = {
    loading(){ // 全局 loading
        return new Vue().$loading({
            lock: true,
            text: "正在加载, 请稍后..."
        })
    },
    updateCourseStage(recorded_video_id, stage_now){ 
        http.updateStage(recorded_video_id, stage_now)
        .then(res => {
            // console.log(res)
        })
    },
    oSort(arr){
        var result= {}, newArr = [];
        for(var i=0; i < arr.length; i++) {
            if(!result[arr[i]]) {
                result[arr[i]] = true;
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
}