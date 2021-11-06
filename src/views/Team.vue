<template>
  <div class="Team">
    <!-- TEAM SECTION -->
    <section class="team">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-12">
            <div class="member">
              <img src="@imgs/team1.jpg" alt="memeber">
              <div class="box">
                <h3>ياسمين السيد</h3>
                <p>مدرس بجامعة القاهرة</p>
              </div>
              <hr>
              <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-pinterest-p"></i>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="member">
              <img src="@imgs/team2.jpg" alt="memeber">
              <div class="box">
                <h3>عبدالله محمد جمال</h3>
                <p>مدرس بجامعة القاهرة</p>
              </div>
              <hr>
              <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-pinterest-p"></i>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="member">
              <img src="@imgs/team3.jpg" alt="memeber">
              <div class="box">
                <h3>أحمد محمد إبراهيم</h3>
                <p>مدرس بجامعة القاهرة</p>
              </div>
              <hr>
              <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-pinterest-p"></i>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="member">
              <img src="@imgs/team1.jpg" alt="memeber">
              <div class="box">
                <h3>ياسمين السيد</h3>
                <p>مدرس بجامعة القاهرة</p>
              </div>
              <hr>
              <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-pinterest-p"></i>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="member">
              <img src="@imgs/team2.jpg" alt="memeber">
              <div class="box">
                <h3>عبدالله محمد جمال</h3>
                <p>مدرس بجامعة القاهرة</p>
              </div>
              <hr>
              <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-pinterest-p"></i>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="member">
              <img src="@imgs/team3.jpg" alt="memeber">
              <div class="box">
                <h3>أحمد محمد إبراهيم</h3>
                <p>مدرس بجامعة القاهرة</p>
              </div>
              <hr>
              <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-pinterest-p"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "جــود هـيـلـث | الفريق"
  },
  created() {
    window.scrollTo(0, 0);
    this.$store.commit("changePage", {
      name: "الفريق",
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
.Team {
  // TEAM SECTION
  .team {
    margin: 150px 0;
    @include xs {
      margin: 100px 0;
    }

    .member {
      box-shadow: 2px 10px 4px rgba($color: $txtColor, $alpha: 0.1);
      overflow: hidden;
      border-radius: 15px;
      text-align: center;
      margin-bottom: 30px;
      &:hover {
        transform: translateY(-5px);
        box-shadow: 2px 20px 5px rgba($color: $txtColor, $alpha: 0.2);
      }
      img {
        width: 100%;
        height: 300px;
        border-bottom: 5px solid $txtColor;
        @include sm {
          height: 250px;
        }
      }
      .box {
        padding: 10px 0 0px;
        h3 {
          margin-bottom: 5px;
          color: $txtColor;
          font-weight: bold;
          padding: 0 20px;
        }
        p {
          padding: 0 20px;
        }
      }
      .social-icons {
        padding: 0px 15px 15px;
        @extend %social-icons;
        i {
          color: $txtColor;
          border-color: $txtColor;
          background: none;
          transition: all 0.3s ease-in-out;
          &:first-of-type {
            padding: 5px 9px;
          }
          &:nth-of-type(2) {
            padding: 6px;
          }
          &:nth-of-type(3) {
            padding: 6px 7px;
          }
          &:nth-of-type(4) {
            padding: 6px 8px;
          }
          &:hover {
            color: #fff;
            &:first-of-type {
              background: $facebook;
              border-color: $facebook;
            }
            &:nth-of-type(2) {
              background: $twitter;
              border-color: $twitter;
            }
            &:nth-of-type(3) {
              background: $linkedin;
              border-color: $linkedin;
            }
            &:nth-of-type(4) {
              background: $pinterest;
              border-color: $pinterest;
            }
          }
        }
      }
    }
  }
}
</style>
