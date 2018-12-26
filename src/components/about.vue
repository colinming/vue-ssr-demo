<template>
	<div class="about-wrap">
    <div class="about-item1">
      <div class="about-title-wrap">
        <div class="about-title">集团介绍</div>
      </div>
    </div>
    <div class="about-item2">
      <div class="about-item2-left">
        <img class="about-item2-left-img" src="http://pcs3r4wno.bkt.clouddn.com/official/image/jituanjieshao.png" alt="">
      </div>
      <div class="about-item2-right">
        <div class="about-item2-right-title">集团概况：</div>
        <div class="about-item2-right-text">思可教育投资开发(深圳)有限公司(以下简称"思可教育"、"思可集团")于2009年诞生于中国深圳，由前彭博资讯亚太区COO马思延先生归国后创立，全权代理七田真早教、胎教中国区的特许经营，著作翻译出版，教育产品研发、生产、销售等相关事宜；与Le Petit Prince法国小王子品牌独家授权合作建立小王子国际语言中心。</div>
        <div class="about-item2-right-text">短短几年时间，七田真国际教育已在中国市场拥有直营门店30余家，分布于北京、上海、广州、深圳、杭州、南京、重庆、西安等13个城市。经过多年发展，至今已成为融儿童早期教育培训(七田真国际教育)、教育产品研发(思可启智)、系统研发、线上教育(思可在线)四大主营业务为一体的教育集团企业。</div>
        <div class="about-item2-right-text">集团致力将全球一流的教育理念与教学方法引入中国，坚持科学理论引领教学，科技服务顾客的理念，推动幼儿早期教育事业与互联网教学事业的共同发展，为中国家长打造一站式教育服务体系，为股东提供长期稳定的价值回报。</div>
      </div>
    </div>
    <div class="about-item3">
      <div class="about-item3-content">
        <div class="about-item3-title">LIFT在线早教：</div>
        <div class="about-item3-text"><div class="about-item3-dot"></div>LIFT--Loving, Intelligent, Future, Talented.</div>
        <div class="about-item3-text"><div class="about-item3-dot"></div>培养充满爱心、智慧的、面向未来的天才。</div>
        <div class="about-item3-text"><div class="about-item3-dot"></div>Lift本身还有提升、提高的含义。</div>
      </div>
      <div class="about-item3-content">
        <div class="about-item3-title">联系我们：</div>
        <div class="about-item3-text"><div class="about-item3-icon iconfont icon-companyname"></div>公司名称：思可教育投资开发(深圳)有限公司</div>
        <div class="about-item3-text"><div class="about-item3-icon iconfont icon-location"></div>地址：深圳市南山区粤海街道芒果网大厦14思可教育</div>
        <div class="about-item3-text">
          <div class="about-item3-text1"><div class="about-item3-icon iconfont icon-wechat"></div>微信：liftedu</div>
          <div class="about-item3-text1"><div class="about-item3-icon iconfont icon-e-mail"></div>信箱:info@qitianzhen.cn</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.about-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.about-item1 {
  padding-top: 40px;
  padding-bottom: 60px;
  .about-title-wrap {
    display: flex;
    justify-content: center;
    .about-title {
      display: inline;
      position: relative;
      font-size: 30px;
      font-weight: bold;
      color: #333333;
    }
    .about-title::before,
    .about-title::after {
      position: absolute;
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background: #ffcc33;
      border-radius: 50%;
    }
    .about-title::before {
      top: 16px;
      left: -40px;
    }
    .about-title::after {
      top: 16px;
      right: -40px;
    }
  }
}

.about-item2 {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  .about-item2-left {
    width: 345px;
    height: 490px;
    .about-item2-left-img {
      width: 100%;
      height: 100%;
    }
  }
  .about-item2-right {
    width: 825px;
    height: 490px;
    .about-item2-right-title {
      padding-bottom: 15px;
      font-size: 24px;
      font-weight: bold;
      color: #333333;
    }
    .about-item2-right-text {
      text-indent: 40px;
      font-size: 20px;
      line-height: 40px;
      color: #333333;
    }
  }
}

.about-item3 {
  display: flex;
  justify-content: space-between;
  padding: 60px 0px 80px 0px;
  width: 1200px;
  .about-item3-content {
    .about-item3-title {
      padding-bottom: 15px;
      font-size: 24px;
      font-weight: bold;
      color: #333333;
    }
    .about-item3-text {
      position: relative;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      line-height: 36px;
      color: #333333;
      .about-item3-text1 {
        position: relative;
        padding-right: 30px;
        font-size: 18px;
        line-height: 36px;
        color: #333333;
      }
    }
    .about-item3-dot{
      position: absolute;
      top: 14px;
      left: -35px;
      width: 10px;
      height: 10px;
      background: #ffe349;
      border-radius: 50%;
    }
    .about-item3-icon{
      position: absolute;
      top: 0px;
      left: -25px;
      font-size: 18px;
      color: #ffe349;
    }
  }
}
</style>