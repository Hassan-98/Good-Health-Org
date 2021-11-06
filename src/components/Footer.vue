<template>
  <footer class="Footer">
    <div class="background">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-md-6 col-12">
            <div class="info">
              <h1>جود هيلث</h1>
              <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
              <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="contacts">
              <h2>أتصل بنا</h2>
              <p>
                <i class="fas fa-phone"></i>
                114632-1817 (20) +
              </p>
              <p>
                <i class="fas fa-envelope"></i>
                info@goodhealth.com
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i>
                15ش سوهاج شارع التحرير
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="decoration"></div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  padding: 30px 0;
  background: $txtColor;
  .background {
    padding: 20px 0;
    background: url("../assets/images/footer-map.png") no-repeat;
    background-size: cover;
  }
  .info {
    h1 {
      color: #fff;
      font-family: "Kufam", cursive !important;
    }
    p {
      color: #aaa;
    }
    .social-icons {
      padding: 15px 0;
      @extend %social-icons;
      i {
        &:first-of-type {
          padding: 5px 9px;
          color: $facebook;
          border-color: $facebook;
          &:hover {
            background: $facebook;
            color: #fff;
          }
        }
        &:nth-of-type(2) {
          padding: 6px;
          color: $twitter;
          border-color: $twitter;
          &:hover {
            background: $twitter;
            color: #fff;
          }
        }
        &:nth-of-type(3) {
          padding: 6px 7px;
          color: $linkedin;
          border-color: $linkedin;
          &:hover {
            background: $linkedin;
            color: #fff;
          }
        }
        background: none;
      }
    }
  }
  .contacts {
    h2 {
      font-family: "Kufam", cursive !important;
      color: #fff;
      margin-bottom: 15px;
    }
    p {
      color: #aaa;
      i {
        margin-left: 5px;
      }
    }
  }
  .decoration {
    background: url("../assets/images/paper.png");
    width: 100%;
    height: 15px;
    position: absolute;
    top: -8px;
    z-index: 999;
  }
}
</style>
