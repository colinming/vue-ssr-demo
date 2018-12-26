<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    mounted(){
    }
}
</script>

<style lang="scss">
@import './assets/css/media.scss';

@font-face{
  font-family: "SourceHanSansCN-Regular";
  src: url('https://sk-online-miniprogram.sikegroup.com/website/fonts/SourceHanSansCN-Regular.eot?#iefix') format('embedded-opentype');
  // src: 
  //      url('https://sk-online-miniprogram.sikegroup.com/website/fonts/SourceHanSansCN-Regular.otf') format('opentype');
}

body{
  font-family: "SourceHanSansCN-Regular";
}
#app {
    height: 100%;
}

.el-carousel__button, .el-carousel__arrow{ // banner 箭头、原点隐藏
  display: none;
}
.el-dialog{ // 弹窗

}
.el-dialog__header{ // 弹窗 header
  display: flex;
}

.slide{
    .el-carousel__arrow{
      display: block;
    }
    .el-carousel__item{

    }
    .el-carousel__indicators{
      display: flex;
      height: 30px;
      bottom: 20px;
      .el-carousel__button{
        display: block;
        width: 30px;
        height: 30px;
        border-radius:15px;
      }
      .el-carousel__indicator{
        padding: 0;
        margin-right: 10px;
        @extend .el-carousel__button;
        background: #dbdbdb;
      }
      .is-active, .is-active > .el-carousel__button{
        background: gray;
      }
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active{
  opacity: 0
}


// loading 样式重置
.el-loading-spinner .path{
    stroke: #ffe349 !important;
}
.el-loading-spinner .el-loading-text{
    color: #ffe349 !important;
    font-size: 16px !important;
}

// toast 样式重置i
.el-message{
    border-color: #e1f3d8 !important;
    background-color: #f0f9eb !important;
}
.el-message__icon{ // toast 提示 icon 大小
    font-size: 24px !important;
}
.el-message .el-icon-info{
    color: #67c23a !important;
}
.el-message--info .el-message__content{
    color: #67c23a !important;
    font-size: 18px !important;
}


.index-title{
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
  height: 92px;
  .header-content{
    display: flex;
    justify-content: center;  
  }
  .logo{
    width: 150px;
    height: 60px;
    margin-top: 17px;
    a{
      display: block;
      width: 150px;
      height: 60px;
      background: url(~assets/images/logo.png) no-repeat center center / 100% 100%;
      text-indent: -99999em;
    }
  }
  .el-row{
    margin: 40px 0 0 410px;
    display: flex;
    .item_li{
      margin-right: 114px;
    }
    .item_li:last-child{
      margin-right: 0;
    }
    .grid-content{
      text-align: center;
      display: flex;
      a{
        color: #333;
        font-size: 18px;
        &:hover{
          color: #ffe349;
          font-weight: bold;
        }
      }
      .tab-class{  // 路由选中颜色
          color: #ffe349;
          font-weight: bold;
          padding-bottom: 10px;
          border-bottom: 2px solid #ffe349;
      }
    }
  }
  .el-col-24{
    width: auto;
  }

  .el-breadcrumb{
    position: absolute;
    right: 140px;
    top: 45px;
    cursor: pointer;
  }
  .el-breadcrumb__item{
    display: flex;
    align-items: center;
  }
  .el-breadcrumb__inner{
    font-weight: normal !important;
    color: #333 !important;
    font-size: 16px;
  }
  .el-breadcrumb__inner:hover{
    color: #ffe349 !important;
      cursor: pointer !important;
  }
  .el-breadcrumb__separator{
    color: #333;
    margin: 0;
    font-weight: normal;
  }
  .profile{
    position: absolute;
    top: 50%;
    left: -40px;
    margin-top: -15px;
    width: 30px;
    height: 30px;
    user-select: none;
    background: url('assets/images/user-profille.png') no-repeat center center /100% 100%;
  }
  .el-dropdown{
    position: absolute;
    top: 38px;
    right: 140px;
  }
  .has-login{
    position: static;
    display: block;
    cursor: pointer;
    margin-top: 0;
  }

} 
.el-dropdown-menu{ // 下拉框
  background-color: #ffe349 !important;
  width: 112px !important;
  height: 80px !important;
  border-color: #ffe349 !important;
  padding: 0 !important;
  margin: 10px 10px 0 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-dropdown-menu__item{
  width: 92px !important;
  padding: 0 !important;
  height: 40px !important;
  line-height: 40px !important;
  font-size: 18px !important;
  color: #fff !important;
  text-align: center;
  a{
    color: #fff;
  }
}
.el-dropdown-menu__item:first-child{
  border-bottom: dotted 1px #fff;
}
.el-dropdown-menu__item:hover{
  color: #333 !important;
  background-color: #ffe349 !important;
  a{
    color: #333 !important;
  }
}
.el-popper .popper__arrow::after{
  border-width: 0 !important;
}
.el-popper[x-placement^=bottom] .popper__arrow{
  border-bottom-color: transparent !important;
}

// button 颜色状态改变
.el-button--primary:focus, .el-button--primary:hover{
  background: #ffe349 !important;
  border-color: #ffe349 !important; 
}


.info-title{ // 标题
  font-size: 24px;
  position: relative;
  padding-left: 20px;
  margin-bottom: 20px;
  color: #333;
}
.info-title:before{
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ffcc33;
  top: 50%;
  left: 50%;
  margin-top: -5px;
  left: 0;
}
.title-border:after{
  position: absolute;
  content: "";
  height: 1px;
  width: 100%;
  bottom: -20px;
  left: 0;
  background-color: #ffcc33;
}

// button 重置
.el-button:focus, .el-button:hover, .el-button:active{
  color: #fff;
  border-color: #ffe349;
  background-color: #ffe349;  
}
.el-button{
  border: none !important;
  font-weight: bold !important;
}

.v-modal{ // 浮层
  opacity: 0.3 !important;
}
</style>
