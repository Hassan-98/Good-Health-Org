<template>
  <div class="Single-Cause">
    <div class="container">
      <h1 class="main-title">حالات الإعاقة الدائمة</h1>
      <div class="img">
        <img src="@imgs/gallery4.jpg" alt="cause">
      </div>
      <div class="donation">
        <h5>الهدف: 2000</h5>
        <h5>تحقق: 1460</h5>
      </div>
      <div class="details">
        <h3>حالات الإعاقة الدائمة</h3>
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
          هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
        </p>
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
          هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
        </p>
        <hr>
        <div class="contact">
          <p>
            <i class="fas fa-map-marker-alt editIcon"></i>
            15ش سوهاج شارع التحرير
          </p>
          <p>
            <i class="fas fa-phone"></i>
            114632-1817 (20) +
          </p>
          <p>
            <i class="fas fa-envelope"></i>
            info@goodhealth.com
          </p>
        </div>
      </div>
      <!-- DONATION SECTION -->
      <section class="Donation">
        <div class="container">
          <h1>تبرع الان</h1>
          <div class="donate">
            <input type="number" placeholder="5">
            <span class="dollar">$</span>
          </div>
          <button>تبرع الان</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "جــود هـيـلـث | الحالات - حالات الإعاقة الدائمة"
  },
  created() {
    window.scrollTo(0, 0);
    this.$store.commit("changePage", {
      name: "الحالات",
      alt: true,
      engName: this.$router.history.current.name
    });
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit("stopLoading");
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.Single-Cause {
  margin: 120px 0;
  .main-title {
    font-family: "Kufam", cursive !important;
    color: $txtColor;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    @include xs {
      margin-top: 10px;
      text-align: center;
    }
    &::after {
      content: "";
      display: block;
      width: 550px;
      height: 13px;
      background: rgba($color: $mainColor, $alpha: 0.85);
      margin: -20px auto 70px;
      @include lg {
        height: 11px;
        width: 500px;
        margin: -17px auto 70px;
      }
      @include md {
        height: 11px;
        width: 420px;
        margin: -16px auto 70px;
      }
      @include sm {
        height: 10px;
        width: 350px;
        margin: -14px auto 70px;
      }
      @include xs {
        height: 10px;
        width: 300px;
        margin: -14px auto 60px;
      }
      @include xxs {
        height: 8px;
        width: 280px;
        margin: -10px auto 60px;
      }
    }
  }
  .img {
    img {
      width: 100%;
      height: 650px;
      border-bottom: 10px solid $txtColor;
      border-radius: 10px 10px 0 0;
      @include md {
        height: 450px;
      }
      @include sm {
        height: 400px;
      }
      @include xs {
        height: 350px;
      }
    }
  }
  .donation {
    h5 {
      position: relative;
      top: -4px;
      color: #fff;
      display: inline-block;
      width: 50%;
      padding: 10px;
      background: rgba($color: $txtColor, $alpha: 0.8);
      border: 3px double $txtColor;
      border-left: 0;
      border-right: 0;
      text-align: center;
      &:nth-of-type(2) {
        background: rgba($color: $txtColor, $alpha: 0.7);
      }
    }
  }
  .details {
    h3 {
      font-family: "Kufam", cursive !important;
      color: $txtColor;
      font-weight: bold;
      margin: 20px 0;
    }
    p {
      line-height: 35px;
      &:nth-of-type(2) {
        @include sm {
          display: none;
        }
      }
    }
  }

  .contact {
    display: flex;
    flex-wrap: wrap;
    p {
      text-align: center;
      flex: 0 0 33.333%;
      color: $txtColor;
      font-weight: bold;
      margin: 0;
      @include sm {
        flex: 0 0 100%;
        text-align: right;
        margin-bottom: 15px;
      }
      i {
        position: relative;
        top: 2px;
        padding: 8px;
        background: $txtColor;
        color: #fff;
        border-radius: 50%;
        margin-left: 7px;
        &.editIcon {
          padding: 8px 10px;
        }
      }
    }
  }

  // DONATION SECTION
  .Donation {
    margin-top: 50px;
    margin-bottom: 80px;
    h1 {
      font-family: "Kufam", cursive !important;
      color: $txtColor;
      font-weight: bold;
      margin-bottom: 10px;
      text-align: center;
      @include xs {
        margin-top: 10px;
        text-align: center;
      }
      &::after {
        content: "";
        display: block;
        width: 210px;
        height: 13px;
        background: rgba($color: $mainColor, $alpha: 0.85);
        margin: -19px auto 40px;
        @include md {
          height: 11px;
          width: 170px;
          margin: -16px auto 40px;
        }
        @include sm {
          height: 10px;
          width: 150px;
          margin: -14px auto 40px;
        }
        @include xs {
          height: 10px;
          width: 140px;
          margin: -14px auto 40px;
        }
        @include xxs {
          height: 8px;
          width: 130px;
          margin: -10px auto 40px;
        }
      }
    }
    .donate {
      display: flex;
      text-align: center;
      justify-content: center;
      input {
        @extend %form-element;
        width: 200px;
        text-align: left;
        font-size: 24px;
        padding: 5px 15px;
        border-radius: 0 10px 10px 0;
        border: 2px solid $txtColor;
        border-left: 0;
        color: $txtColor;
        font-weight: bold;
        &:focus {
          border: 2px solid $txtColor;
          border-left: 0;
        }
        box-shadow: 5px 5px 5px rgba($color: $txtColor, $alpha: 0.5);
        font-family: "Kufam", cursive;
        margin: 0;
      }
      span {
        font-family: "Kufam", cursive;
        border-radius: 10px 0 0 10px;
        border: 2px solid $txtColor;
        padding: 5px 15px;
        font-size: 24px;
        color: $txtColor;
        font-weight: bold;
        box-shadow: -5px 5px 5px rgba($color: $txtColor, $alpha: 0.5);
      }
    }
    button {
      display: block;
      margin: 25px auto;
      padding: 8px 30px;
      border-radius: 6px;
      border: 2px solid $txtColor;
      font-weight: bold;
      background: $txtColor;
      color: $mainColor;
      outline: none;
      &:hover {
        background: #fff;
        color: $txtColor;
      }
    }
  }
}
</style>
