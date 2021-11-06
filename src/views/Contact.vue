<template>
  <div class="Contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12">
          <div class="getInTouch">
            <h2>تواصل معنا!</h2>
            <input type="text" placeholder="أدخل إسمك">
            <input type="email" placeholder="البريد الالكتروني">
            <input type="text" placeholder="عنوان الموضوع" class="subject-input">
            <textarea placeholder="رجاءاُ أكتب رسالتك هنا" cols="30" rows="7"></textarea>
            <button>إرسال</button>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="info">
            <h2>طرق التواصل</h2>
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
        <div class="col-12">
          <hr>
          <div class="map">
            <iframe
              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "جــود هـيـلـث | تواصل معنا"
  },
  created() {
    window.scrollTo(0, 0);
    this.$store.commit("changePage", {
      name: "تواصل معنا",
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
.Contact {
  padding: 100px 0 200px;
  h2 {
    margin-bottom: 30px;
    color: $txtColor;
    font-family: "Kufam", cursive !important;
    @include md {
      text-align: center;
      margin: 30px auto;
    }
    &::after {
      content: "";
      display: block;
      width: 260px;
      height: 10px;
      background: rgba($color: $txtColor, $alpha: 0.5);
      margin: -15px 0 40px;
      @include md {
        width: 220px;
        margin: -13px auto 40px;
      }
      @include sm {
        width: 200px;
        margin: -12px auto 40px;
      }
      @include xs {
        width: 170px;
        margin: -10px auto 40px;
      }
    }
  }
  .getInTouch {
    input {
      @extend %form-element;
      width: calc(50% - 10px);
      margin: 10px 0 5px 10px;
      &.subject-input {
        width: calc(100% - 10px);
      }
      border: 3px solid $txtColor;
      border-radius: 30px;
      border-top-color: transparent;
      border-bottom-color: transparent;
      box-shadow: 0 0px 7px rgba($color: $txtColor, $alpha: 0.5);
      color: $txtColor;
      font-weight: bold;
      &:focus {
        border: 3px solid $txtColor;
        border-radius: 30px;
      }
    }
    textarea {
      @extend %form-element;
      width: calc(100% - 10px);
      margin: 10px 0 5px 10px;
      border: 3px solid $txtColor;
      border-radius: 30px;
      border-top-color: transparent;
      border-bottom-color: transparent;
      box-shadow: 0 0px 7px rgba($color: $txtColor, $alpha: 0.5);
      font-weight: bold;
      color: $txtColor;
      &:focus {
        border: 3px solid $txtColor;
      }
    }
    button {
      margin: 15px 0;
      @extend %btn;
      box-shadow: 0 0px 7px rgba($color: $txtColor, $alpha: 0.5);
      border: 3px solid $txtColor;
      border-radius: 30px;
      border-top-color: transparent;
      border-bottom-color: transparent;
      font-weight: bold;
      color: $txtColor;
      &:hover {
        background: $txtColor;
        color: #fff;
        border-color: $txtColor;
        border-top-color: #fff;
        border-bottom-color: #fff;
      }
    }
  }
  .info {
    p {
      color: $txtColor;
      font-size: 22px;
      margin: 20px 0;
      padding-top: 10px;
      i {
        padding: 10px;
        background: $txtColor;
        color: #fff;
        border-radius: 50%;
        margin-left: 7px;
        &.editIcon {
          padding: 10px 12px;
        }
      }
    }
  }
  .map {
    border: 10px double $txtColor;
    box-shadow: 0 0px 7px rgba($color: $txtColor, $alpha: 0.5);
    iframe {
      width: 100%;
      height: 450px;
      @include md {
        height: 400px;
      }
      @include xs {
        height: 375px;
      }
    }
  }
}
</style>
