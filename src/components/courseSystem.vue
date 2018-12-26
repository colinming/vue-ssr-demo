<template>
	<div class="systemm-wrap">
    <div class="systemm-item1">
      <img class="systemm-item1-img" src="http://pcs3r4wno.bkt.clouddn.com/official/image/kechengtixi-banner.png" alt="">
      <div class="systemm-item1-text">基于60年七田真教学实践经验和课程体系，融合国际前沿脑科学理论，为4-6岁儿童研发精品记忆力课程，包括连锁记忆、直观像记忆、BOX记忆、PEG记忆等独具七田真特色的记忆方法。</div>
    </div>
    <div class="systemm-item2">
      <div class="systemm-title-wrap">
        <div class="systemm-title">记忆力专项课</div>
      </div>
      <div class="systemm-item2-content">
        <div class="systemm-item2-left">
          <img class="systemm-item2-left-rec1" src="../assets/images/rec.png" alt="">
          <img class="systemm-item2-left-rec2" src="../assets/images/rec.png" alt="">
          <img class="systemm-item2-left-rec3" src="../assets/images/rec.png" alt="">
          <img class="systemm-item2-left-rec4" src="../assets/images/rec.png" alt="">
          <div class="systemm-item2-left-text">以七田真记忆训练法(联想记忆、连锁记忆、照相记忆等)为基础结合丰富有趣的游戏化教学场景设计，辅以良好的互动教学氛围，刺激幼儿大脑发育，充分开发大脑潜能，为孩子的幼儿园、小学、中学乃至一生的学习奠定记忆力基础！</div>
        </div>
        <div class="systemm-item2-right">
          <img class="systemm-item2-right-img" src="http://pcs3r4wno.bkt.clouddn.com/official/image/kechengjieshao.png" alt="">
        </div>
      </div>
    </div>
    <div class="systemm-item3">
      <div class="systemm-title-wrap">
        <div class="systemm-title">课程体系</div>
      </div>
      <div class="systemm-item3-content">
        <div class="systemm-item3-content-text">儿童大脑发展的规律及学习特性，按照周龄为4-6岁的孩子设计了384套教案，</div>
        <div class="systemm-item3-content-text">针对性地根据孩子的能力来选择课程等级，循序渐进真正做到因材施教。</div>
        <div class="systemm-item3-content-img-wrap">
          <img class="systemm-item3-content-img" src="https://sk-online-miniprogram.sikegroup.com/image/%E8%AF%BE%E7%A8%8B%E4%BD%93%E7%B3%BB%E5%9B%BE%281%29%281%29.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.systemm-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.systemm-item1 {
  position: relative;
  width: 100%;
  .systemm-item1-img {
    width: 100%;
  }
  .systemm-item1-text {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    padding-right: 600px;
    display: inline-block;
    width: 1110px;
    height: 200px;
    font-size: 18px;
    text-indent: 36px;
    letter-spacing: 0px;
    color: #fefefe;
    line-height: 36px;
  }
}

.systemm-item2 {
  padding-top: 80px;
  padding-bottom: 60px;
  width: 1250px;
  .systemm-title-wrap {
    display: flex;
    justify-content: center;
    .systemm-title {
      display: inline;
      position: relative;
      font-size: 30px;
      font-weight: bold;
      color: #333333;
    }
    .systemm-title::before,
    .systemm-title::after {
      position: absolute;
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background: #ffcc33;
      border-radius: 50%;
    }
    .systemm-title::before {
      top: 16px;
      left: -40px;
    }
    .systemm-title::after {
      top: 16px;
      right: -40px;
    }
  }
  .systemm-item2-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 55px;
    width: 100%;
    .systemm-item2-left {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 600px;
      height: 250px;
      .systemm-item2-left-rec1 {
        position: absolute;
        top: 0px;
        left: 0px;
      }
      .systemm-item2-left-rec2 {
        position: absolute;
        top: 0px;
        right: 0px;
        transform: rotate(90deg);
      }
      .systemm-item2-left-rec3 {
        position: absolute;
        right: 0px;
        bottom: 0px;
        transform: rotate(180deg);
      }
      .systemm-item2-left-rec4 {
        position: absolute;
        bottom: 0px;
        left: 0px;
        transform: rotate(270deg);
      }
      .systemm-item2-left-text {
        width: 560px;
        height: 135px;
        font-size: 18px;
        line-height: 36px;
        color: #333333;
      }
    }
    .systemm-item2-right {
      width: 614px;
      height: 503px;
      .systemm-item2-right-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.systemm-item3 {
  width: 1200px;
  margin-bottom: 80px;
  .systemm-title-wrap {
    display: flex;
    justify-content: center;
    .systemm-title {
      display: inline;
      position: relative;
      font-size: 30px;
      font-weight: bold;
      color: #333333;
    }
    .systemm-title::before,
    .systemm-title::after {
      position: absolute;
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background: #ffcc33;
      border-radius: 50%;
    }
    .systemm-title::before {
      top: 16px;
      left: -40px;
    }
    .systemm-title::after {
      top: 16px;
      right: -40px;
    }
  }
  .systemm-item3-content {
    padding-top: 30px;
    .systemm-item3-content-text {
      text-align: center;
      font-size: 24px;
      line-height: 36px;
      color: #333333;
    }
    .systemm-item3-content-img-wrap{
      display: flex;
      justify-content: center;
      margin-top: 30px;
      height: 661px;
      .systemm-item3-content-img{
        width: 1038px;
        height: 661px;
      }
    }
    
  }
}
</style>