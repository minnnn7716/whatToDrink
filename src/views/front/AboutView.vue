<template>
  <div>
    <header class="about-header"></header>
    <div class="container">
      <div class="row">
        <div class="col-10 col-md-9 mx-auto pt-15 pt-md-18 pb-20 p-md-25">
          <section class="mb-12">
            <div class="mb-10">
              <h2 class="about-title mb-6 fs-4 fs-md-3 fw-bold">關於 What to Drink</h2>
              <p>
                嗨，大家好！你今天想喝什麼呢？身為手搖飲大國一員的各位，是不是經常為了這個問題苦惱，還沒想好要喝什麼，但總之今天至少來個一杯、兩杯或三杯！你有以下困擾嗎？

                <ul class="my-6">
                  <li>想老半天還是猶豫不決到底要點什麼（但是就是想喝一杯啊！）</li>
                  <li>嘴癢想多喝但又有點擔心熱量超標</li>
                  <li>超過二十五歲開始在意起咖啡因含量</li>
                  <li>新品那麼多，看名字根本不知道內容物啦</li>
                </ul>

                基於以上天天困擾我微小卻重大的問題，催生了這裡！目前仍在起步中，資料與功能還不完善，未來會逐步規畫進行。
                <br><br>
                這裡目前蒐羅五家飲料店菜單，分別是「可不可熟成紅茶」、「五十嵐」、「一沐日」、「清心福全」與「約翰紅茶」，
                並盡力收集相關資訊，包含價錢、內容物、熱量、咖啡因，讓你可以從中挑選更符合你心意的飲料。
              </p>
            </div>
            <div>
              <div class="row flex-column flex-md-row align-items-center mb-10 mb-md-10">
                <div class="col-12 col-md-5">
                  <img
                    class="img-fluid mb-6 mb-md-0 me-md-6"
                    src="@/assets/images/about-wheel.svg"
                    alt="評價系統"
                  />
                </div>
                <div class="col-12 col-md-7">
                  <h3 class="mb-4 py-2 px-6 d-inline-block bg-accent-300 rounded-pill fs-6">
                    轉盤功能
                  </h3>
                  <p>
                    看了那麼多杯飲料資訊，反而讓你更加選擇困難嗎？
                    <br>
                    不要緊，那麼讓我們隨機給你一杯飲料。
                    即使是隨機飲料仍可以挑選大方向的偏好，如果你是純茶派，不要擔心，我們就給你只有茶的選項。
                  </p>
                </div>
              </div>
              <div class="row flex-column flex-md-row-reverse align-items-center">
                <div class="col-12 col-md-5">
                  <img
                    class="img-fluid mb-6 mb-md-0 ms-md-6"
                    src="@/assets/images/about-message.svg"
                    alt="轉盤功能"
                  />
                </div>
                <div class="col-12 col-md-7">
                  <h3 class="mb-4 py-2 px-6 d-inline-block bg-secondary-300 rounded-pill fs-6">
                    評價系統
                  </h3>
                  <p>
                    「受不了！太好喝了！怎麼可以只有我知道！」
                    <br>
                    在世界中心大聲呼喊你推的飲料！
                    他的風味、他的美好，告訴大家他有多讚！（當然或...「太ㄋㄏ」也可以讓大家避雷，好人一生平安）
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div>
            <div class="about-deco-dot">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3 class="about-title mb-4 fs-4 fs-md-3 fw-bold">聯絡</h3>
            <p class="fs-6">
              有任何問題或建議都歡迎寄信至：
              <a href="mailto:polaris.map.1618@gmail.com">polaris.map.1618@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';

.about {
  &-header {
    height: 280px;
    background: center / cover no-repeat;
    background-image: url('@/assets/images/about-banner-sm.webp');

    @include media-breakpoint-up(md) {
      height: 350px;
      background-image: url('@/assets/images/about-banner.webp');
    }

    @include media-breakpoint-up(3xl) {
      height: 410px;
    }
  }

  &-title {
    padding-left: 16px;
    padding-bottom: 4px;
    border-left: 8px solid $primary-600;
  }
}
</style>
