<template>
  <div class="Single-Event">
    <div class="container">
      <h1 class="main-title">بعثة الدواء لجنوب مصر</h1>
      <div class="img">
        <img src="@imgs/event1.jpg" alt="event">
        <span>17 سبتمبر 2020</span>
      </div>
      <div class="details">
        <div class="timeNplace">
          <span class="time">
            <i class="far fa-clock"></i>
            5:00 م
          </span>
          <span class="place">
            <i class="fas fa-map-marker-alt"></i>
            سوهاج - الثقافة
          </span>
          <span class="ticket">
            <i class="fas fa-dollar-sign"></i>
            سعر التذكرة: 25
          </span>
          <span class="organizer">
            <i class="fas fa-user-tie"></i>
            المنظم: بريزينتيشن
          </span>
        </div>
        <h3>بعثة الدواء لجنوب مصر</h3>
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
      </div>
      <hr>
      <div class="getATicket">
        <h3>أحصل على تذكرة</h3>
        <input type="text" placeholder="الاسم كاملاً">
        <input type="text" placeholder="رقم الهاتف">
        <button>حجز التذكرة</button>
      </div>
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
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "جــود هـيـلـث | الاحداث - بعثة الدواء لجنوب مصر"
  },
  created() {
    window.scrollTo(0, 0);
    this.$store.commit("changePage", {
      name: "الاحداث",
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
.Single-Event {
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
    position: relative;
    img {
      height: 600px;
      @include md {
        height: 550px;
      }
      @include sm {
        height: 475px;
      }
      @include xs {
        height: 400px;
      }
      @include xxs {
        height: 350px;
      }
    }
    span {
      position: absolute;
      right: 15px;
      bottom: 15px;
      display: inline-block;
      background: $txtColor;
      font-weight: bold;
      padding: 10px 30px;
      color: #fff;
      border-radius: 5px;
      font-size: 24px;
    }
  }
  .timeNplace {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .time {
      flex: 0 0 50%;
      border-left: 1px solid #ccc;
      text-align: center;
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
      i {
        margin-left: 3px;
      }
      &:hover {
        background: $txtColor;
        color: #fff;
        border-bottom: 1px solid $mainColor;
      }
    }
    .place {
      flex: 0 0 50%;
      text-align: center;
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
      i {
        margin-left: 3px;
      }
      &:hover {
        background: $txtColor;
        color: #fff;
        border-bottom: 1px solid $mainColor;
      }
    }
    .organizer {
      flex: 0 0 50%;
      text-align: center;
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
      &:hover {
        background: $txtColor;
        color: #fff;
        border-bottom: 1px solid $mainColor;
      }
    }
    .ticket {
      flex: 0 0 50%;
      text-align: center;
      border-left: 1px solid #ccc;
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
      &:hover {
        background: $txtColor;
        color: #fff;
        border-bottom: 1px solid $mainColor;
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
  .getATicket {
    h3 {
      font-family: "Kufam", cursive !important;
      color: $txtColor;
      font-weight: bold;
      margin: 30px auto 20px;
      text-align: center;
    }
    input {
      border: 2px double $txtColor;
      color: $txtColor;
      padding: 8px 13px;
      border-radius: 0 30px 30px 0;
      width: 50%;
      outline: none;
      &:focus {
        border: 2px double $txtColor;
        border-radius: 0 30px 30px 0;
      }
      &:nth-of-type(2) {
        border-radius: 30px 0 0 30px;
        &:focus {
          border-radius: 30px 0 0 30px;
        }
      }
    }
    button {
      @extend %btn;
      display: block;
      margin: 20px auto 30px;
      border: 2px solid $txtColor;
      color: $txtColor;
      font-weight: bold;
      &:hover {
        background: $txtColor;
        color: #fff;
        border: 2px solid $txtColor;
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
}
</style>
