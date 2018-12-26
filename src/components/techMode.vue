<template>
  <!-- 教学模式 -->
	<div class="mode-wrap">
    <!-- item1 -->
    <div class="mode-item1-wrap">
      <div class="mode-item1-title-wrap">
        <div class="mode-item1-title">教学模式</div>
      </div>
      <div class="mode-item1-content">
        <div class="mode-item1-inner mode-item1-inner1">
          <div class="mode-item1-inner-img">
            <img class="mode-item1-inner-img" src="http://pcs3r4wno.bkt.clouddn.com/official/image/jiaoxue1.png" alt="">
          </div>
          <div class="mode-item1-inner-text">在线直播课堂</div>
        </div>
        <div class="mode-item1-inner mode-item1-inner2">
          <div class="mode-item1-inner-img">
            <img class="mode-item1-inner-img" src="https://sk-online-miniprogram.sikegroup.com/website/images/jiaoxue2-20181031.png" alt="">
          </div>
          <div class="mode-item1-inner-text">1 V 3小班制</div>
        </div>
        <div class="mode-item1-inner mode-item1-inner3">
          <div class="mode-item1-inner-img">
            <img class="mode-item1-inner-img" src="https://sk-online-miniprogram.sikegroup.com/website/images/jiaoxue3-20181030.png" alt="">
          </div>
          <div class="mode-item1-inner-text">游戏化教学</div>
        </div>
      </div>
    </div>

    <!-- item2 -->
    <div class="mode-item2-wrap">
      <div class="mode-item2-inner">
        <div class="mode-item2-left">
          <img class="mode-item2-left-img" src="http://pcs3r4wno.bkt.clouddn.com/official/image/jiaoxue4.png" alt="">
        </div>
        <div class="mode-item2-right">
          <img class="mode-item2-right-img" src="../assets/images/cloud.png" alt="">
          <div class="mode-item2-right-text">
            <div class="mode-item2-right-text1">教学方法</div>
            <div class="mode-item2-right-text2 mode-item2-right-text3">秉承七田真的教学理念，用认可、赞赏、爱护的方式</div>
            <div class="mode-item2-right-text2 mode-item2-right-text4">来培养每一个孩子。游戏化的教学情景，寓教于乐，</div>
            <div class="mode-item2-right-text2 mode-item2-right-text5">以趣味易懂的方式给孩子带来奇妙的记忆力学习体验。</div>
          </div>
        </div>
      </div>
    </div>


    <div class="mode-item3-wrap">
      <div class="mode-item3-inner">
        <div class="mode-item3-title">
          <div class="mode-item3-title-content">LIFT早教上课流程</div>
        </div>
        <div>
          <div class="mode-item3-item">
            <div class="mode-item3-text1">第一步：注册领取体验课</div>
            <div class="mode-item3-text2">注册后我们会尽快与您联系</div>
            <img class="mode-item3-foot1" src="../assets/images/foot1.png" alt="">
          </div>
          <div class="mode-item3-item">
            <div class="mode-item3-text1">第二步：预约课程表</div>
            <div class="mode-item3-text2">扫描官网底部的二维码通过小程序进行课程预约</div>
            <img class="mode-item3-foot2" src="../assets/images/foot2.png" alt="">
          </div>
          <div class="mode-item3-item">
            <div class="mode-item3-text1">第三步：进入教室上课</div>
            <div class="mode-item3-text2">专业技术支持帮您顺利接入在线教室</div>
            <img class="mode-item3-foot3" src="../assets/images/foot3.png" alt="">
          </div>
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
.mode-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

/* item1 */
.mode-item1-wrap {
  width: 1200px;
  height: 580px;
  .mode-item1-title-wrap {
    padding-top: 40px;
    padding-bottom: 60px;
    display: flex;
    justify-content: center;
    .mode-item1-title {
      display: inline;
      text-align: center;
      position: relative;
      font-size: 30px;
      font-weight: bold;
      color: #333333;
    }
    .mode-item1-title::before,
    .mode-item1-title::after {
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ffcc33;
    }
    .mode-item1-title::before {
      top: 16px;
      left: -40px;
    }
    .mode-item1-title::after {
      top: 16px;
      right: -40px;
    }
  }

  /* item1-图片 */
  .mode-item1-content {
    display: flex;
    justify-content: space-between;
    .mode-item1-inner {
      padding: 8px 8px 0px 8px;
      width: 360px;
      height: 320px;
      border-radius: 20px;
      .mode-item1-inner-img {
        width: 100%;
        height: 242px;
      }
      .mode-item1-inner-img img {
        width: 100%;
        height: 100%;
      }
    }
    .mode-item1-inner1 {
      background: #a0e75a;
    }
    .mode-item1-inner2 {
      background: #ffe349;
    }
    .mode-item1-inner3 {
      background: #5bbbf3;
    }
    .mode-item1-inner-text {
      width: 100%;
      height: 70px;
      line-height: 70px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #333333;
    }
  }
}
/* item1-标题 */

/* item2 */
.mode-item2-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  background: #ffe349;
  .mode-item2-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 500px;
    .mode-item2-left {
      width: 490px;
      height: 330px;
      .mode-item2-left-img {
        width: 100%;
        height: 100%;
      }
    }
    .mode-item2-right {
      position: relative;
      padding-right: 70px;
      width: 650px;
      height: 360px;
      .mode-item2-right-img {
        width: 100%;
        height: 100%;
      }
      .mode-item2-right-text {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        .mode-item2-right-text1 {
          position: absolute;
          top: 83px;
          left: 95px;
          font-size: 24px;
          font-weight: bold;
          color: #333333;
        }
        .mode-item2-right-text2 {
          position: absolute;
          font-size: 18px;
          color: #333333;
        }
        .mode-item2-right-text3 {
          top: 149px;
          left: 95px;
        }
        .mode-item2-right-text4 {
          top: 183px;
          left: 95px;
        }
        .mode-item2-right-text5 {
          top: 218px;
          left: 95px;
        }
      }
    }
  }
}

/* item3 */
.mode-item3-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  .mode-item3-inner {
    padding: 80px 0px 80px 0px;
    .mode-item3-title {
      padding: 0px 150px 0px 0px;
      display: flex;
      justify-content: center;
      .mode-item3-title-content {
        display: inline;
        position: relative;
        font-size: 30px;
        font-weight: bold;
        color: #333333;
      }
      .mode-item3-title-content::before,
      .mode-item3-title-content::after {
        position: absolute;
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background: #ffcc33;
        border-radius: 50%;
      }
      .mode-item3-title-content::before {
        top: 11px;
        left: -40px;
      }
      .mode-item3-title-content::after {
        top: 11px;
        right: -40px;
      }
    }
    .mode-item3-item {
      position: relative;
      padding-top: 50px;
      .mode-item3-text1 {
        font-size: 24px;
        font-weight: bold;
        color: #333333;
      }
      .mode-item3-text2 {
        padding-top: 10px;
        font-size: 18px;
        color: #333333;
      }
      .mode-item3-foot1 {
        position: absolute;
        top: 57px;
        left: -50px;
        width: 38px;
        height: 57px;
      }
      .mode-item3-foot2 {
        position: absolute;
        top: 55px;
        left: -85px;
        width: 50px;
        height: 69px;
      }
      .mode-item3-foot3 {
        position: absolute;
        top: 49px;
        left: -65px;
        width: 48px;
        height: 71px;
      }
    }
  }
}
</style>