<template>
  <div class="loader">
    <div class="abs">
      <div class="lds-heart">
        <div></div>
      </div>
      <h1>أنتظر قليلاً ...</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.loader {
  width: 100%;
  height: 100vh;
  background: $txtColor;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
  .abs {
    position: absolute;
    top: 48%;
    left: 48%;
    transform: translate(-50%, -50%);
    h1 {
      color: #fff;
      font-weight: bold;
      font-family: "Kufam", cursive !important;
    }
  }
  .lds-heart {
    display: inline-block;
    position: relative;
    width: 150px;
    height: 150px;
    transform: rotate(45deg);
    transform-origin: 40px 40px;
  }
  .lds-heart div {
    top: 32px;
    left: 32px;
    position: absolute;
    width: 64px;
    height: 64px;
    background: #fff;
    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .lds-heart div:after,
  .lds-heart div:before {
    content: " ";
    position: absolute;
    display: block;
    width: 64px;
    height: 64px;
    background: #fff;
  }
  .lds-heart div:before {
    left: -34px;
    border-radius: 50% 0 0 50%;
  }
  .lds-heart div:after {
    top: -34px;
    border-radius: 50% 50% 0 0;
  }
  @keyframes lds-heart {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }
}
</style>
