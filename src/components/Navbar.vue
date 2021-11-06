<template>
  <nav class="Navbar">
    <div class="top-nav">
      <div class="container">
        <div class="left">
          <span>
            4632-1817 (11) 20+
            <i class="fas fa-phone-alt"></i>
          </span>
          <span>
            info@goodhealth.com
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <div class="right">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-linkedin-in"></i>
        </div>
      </div>
    </div>
    <div class="bottom-nav">
      <div class="container cont">
        <div class="logo">
          <img src="@imgs/logo.png" alt="logo">
          <span>GH</span>
        </div>
        <div class="routes">
          <router-link to="/" tag="button" exact>الرئيسية</router-link>
          <router-link to="/about" tag="button">عن الموقع</router-link>
          <router-link to="/events" tag="button">الايفينتات</router-link>
          <router-link to="/causes" tag="button">الحالات</router-link>
          <router-link to="/team" tag="button">الفريق</router-link>
          <router-link to="/contact" tag="button">تواصل معنا</router-link>
        </div>
        <div class="navbar-collapse">
          <i class="fas fa-bars" @click="toggleNav"></i>
        </div>
      </div>
      <div class="decoration"></div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      document.querySelector(".routes").classList.toggle("show");
    }
  }
};
</script>

<style lang="scss" scoped>
.Navbar {
  .top-nav {
    background: $mainColor;
    padding: 8px;
    direction: ltr;
    text-align: left;
    overflow: hidden;
    .left {
      float: left;
      padding-top: 3px;
      span {
        direction: ltr !important;
        padding: 0 30px 0 0;
        i {
          padding: 0 5px 0 0;
          position: relative;
          top: 2px;
        }
        @include xxs {
          width: 100%;
          text-align: center;
          display: block;
          margin-bottom: 10px;
          direction: rtl !important;
          font-size: 17px;
        }
      }
      @include sm {
        width: 100%;
        text-align: center;
      }
    }
    .right {
      float: right;
      direction: ltr;
      color: $mainColor;
      i {
        border-radius: 50%;
        margin: 0 5px;
        border: 1px solid;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        color: #fff;
        &:first-of-type {
          padding: 5px 9px;
          background: $facebook;
          border-color: $facebook;
          &:hover {
            color: $facebook;
          }
        }
        &:nth-of-type(2) {
          padding: 6px;
          background: $twitter;
          border-color: $twitter;
          &:hover {
            color: $twitter;
          }
        }
        &:nth-of-type(3) {
          padding: 6px 7px;
          background: $linkedin;
          border-color: $linkedin;
          &:hover {
            color: $linkedin;
          }
        }

        &:hover {
          background: #fff;
          color: #000;
        }
      }
      @include sm {
        display: none;
      }
    }
  }

  .bottom-nav {
    padding: 12px 0 0px;
    position: relative;
    .cont {
      display: flex;
      justify-content: space-between;
    }
    .decoration {
      background: url("../assets/images/paper.png");
      width: 100%;
      height: 15px;
      position: absolute;
      bottom: -10px;
      z-index: 999;
    }

    .navbar-collapse {
      display: none;
      @include sm {
        display: block;
      }
      i {
        float: left;
        color: #000;
        font-size: 24px;
        padding: 15px 0;
        cursor: pointer;
      }
    }

    .logo {
      display: inline-block;
      text-align: center;
      cursor: pointer;
      img {
        display: block;
        width: 42px;
        height: 42px;
        margin: 0;
        padding: 0;
      }
      span {
        font-size: 20px;
        font-weight: bold;
        color: $txtColor;
        margin: 0;
        padding: 0;
        position: relative;
        top: -6px;
      }
    }
    .routes {
      display: inline-block;
      button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 15px;
        font-size: 18px;
        font-weight: bold;
        color: $txtColor;
        &:focus {
          outline: none;
        }
        &:hover {
          color: darken($color: $mainColor, $amount: 20);
        }
        &.router-link-active {
          color: darken($color: $mainColor, $amount: 20);
        }
      }
      @include md {
        button {
          padding-top: 18px;
          font-size: 16px;
        }
      }
      @include sm {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        z-index: -1;
        background: $mainColor;
        opacity: 0;
        &.show {
          z-index: 9999;
          opacity: 1;
        }
        button {
          display: block;
          color: $txtColor;
          background: $mainColor;
          width: 100%;
          border-bottom: 1px solid #fff;
          padding: 15px;
          font-size: 18px;
          &:hover {
            background: $txtColor;
            color: #fff;
          }
          &.router-link-active {
            background: $txtColor;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
