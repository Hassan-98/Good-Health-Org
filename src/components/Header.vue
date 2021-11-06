<template>
  <header class="Header">
    <Navbar/>
    <div class="header" :class="{alt: alt}">
      <div class="overlay">
        <div class="center" v-if="!alt">
          <h4>هيا بنا</h4>
          <h1>لنساعد الاطفال متى احتاجوا</h1>
          <p>نحن منظمة خيرية لمساعدة الاطفال عندما يحتاجوا الى المساعدة و توفير سبل الراحة والحياة الكريمة لهم دائما ف هذا حقهم</p>
          <button>تبرع الان</button>
        </div>
        <div class="altCenter" v-else>
          <h1>{{pageName}}</h1>
          <p>الرئيسية -- {{pageName}}</p>
        </div>
      </div>
    </div>
    <div class="decoration"></div>
  </header>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar
  },
  computed: {
    alt() {
      return this.$store.state.page.alt;
    },
    pageName() {
      return this.$store.state.page.name;
    }
  },
  methods: {
    changeImages() {
      var num = 1;
      var imgs = [
        require(`@imgs/header1.jpg`),
        require(`@imgs/header2.jpg`),
        require(`@imgs/reasons2.jpg`)
      ];
      setInterval(() => {
        num++;
        if (num > 3) {
          num = 1;
        }
        document.querySelector(".header").style.backgroundImage = `url(${
          imgs[num - 1]
        })`;
      }, 5000);
    }
  },
  created() {
    window.scrollTo(0, 0);
    this.changeImages();
  }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  .header {
    @include fixedBack("../assets/images/header2.jpg");
    width: 100vw;
    height: 850px;
    @include xxs {
      height: 650px;
    }
    .overlay {
      @include overlay($txtColor, 0.4);
      position: relative;
      color: #fff;
      z-index: 1;
      .center {
        @include center(true);
        top: 38%;
        background: rgba($color: $mainColor, $alpha: 0.15);
        padding: 50px;
        width: 50%;
        border: 5px double $mainColor;
        border-left: 0;
        border-right: 0;
        border-radius: 30px;
        @include md {
          width: 60%;
          padding: 40px;
        }
        @include sm {
          width: 70%;
          padding: 40px;
        }
        @include xs {
          width: 80%;
          padding: 40px;
          top: 45%;
        }
        @include xxs {
          width: 95%;
          padding: 20px;
        }
        h4 {
          text-align: center;
        }
        h1 {
          color: #fff;
          font-family: "Kufam", cursive;
          text-align: center;
        }
        p {
          color: #f6f6f6;
          text-align: center;
        }
        button {
          @extend %btn;
          margin: 15px 0 0;
          background: $mainColor;
          border: 2px solid $mainColor;
          font-weight: bold;
          border-radius: 0;
          padding: 10px 50px;
          &:hover {
            background: transparent;
            color: $mainColor;
            border-color: $mainColor;
          }
        }
      }
    }
    &.alt {
      height: 450px;
      .altCenter {
        @include center(true);
        top: 49%;
        background: rgba($color: $mainColor, $alpha: 0.15);
        padding: 50px;
        width: 50%;
        border: 5px double $mainColor;
        border-left: 0;
        border-right: 0;
        border-radius: 30px;
        @include md {
          width: 60%;
          padding: 40px;
        }
        @include sm {
          width: 70%;
          padding: 40px;
        }
        @include xs {
          width: 80%;
          padding: 40px;
          top: 45%;
        }
        @include xxs {
          width: 95%;
          padding: 20px;
        }
        h1 {
          color: #fff;
          font-family: "Kufam", cursive;
          text-align: center;
        }
        p {
          color: #f6f6f6;
          text-align: center;
        }
      }
    }
  }
  .decoration {
    background: url("../assets/images/paper.png");
    width: 100%;
    height: 15px;
    position: relative;
    top: -10px;
    transform: rotate(180deg);
    z-index: 999;
  }
}
</style>
