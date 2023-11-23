<template>
  <div>
    <header class="about-header"></header>
    <div class="container">
      <div class="row">
        <div class="col-8 mx-auto py-15">
          <section class="mb-12">
            <div class="mb-10">
              <h2 class="about-title mb-4 fs-3 fw-bold">關於 What to Drink</h2>
              <p>
                它朱風波去固手波葉錯苦記家米、各想辛科訴路至子間包早音杯主也婆子下住：一半色戶平進訴大黑借還士久習言兌采、尾校兄造收植下「出牛各七何」。
                現怕條自姊斤弓上視頭「去天」路尺種消什「訴」片比高玩禾食司長頭年菜停遠明天，國即蛋哪人音目首樹千丁公寸飛奶起成造下升、拍尺麼神可肖園夏丟朱己內抓別時別法春，左福房一。細午辛造能肖苦兌平。
              </p>
            </div>
            <div>
              <div class="d-flex align-items-center mb-4">
                <img class="me-10" src="../../assets/images/userPhoto.png" alt="" />
                <div>
                  <h3 class="mb-4 py-2 px-6 d-inline-block bg-accent-300 rounded-pill fs-5">
                    評價系統
                  </h3>
                  <p>
                    它朱風波去固手波葉錯苦記家米、各想辛科訴路至子間包早音杯主也婆子下住：一半色戶平進訴大黑借還士久習言兌采、尾校兄造收植下「出牛各七何」。
                  </p>
                </div>
              </div>
              <div class="d-flex flex-row-reverse align-items-center">
                <img class="ms-10" src="../../assets/images/userPhoto.png" alt="" />
                <div>
                  <h3 class="mb-4 py-2 px-6 d-inline-block bg-secondary-300 rounded-pill fs-5">
                    轉盤功能
                  </h3>
                  <p>
                    它朱風波去固手波葉錯苦記家米、各想辛科訴路至子間包早音杯主也婆子下住：一半色戶平進訴大黑借還士久習言兌采、尾校兄造收植下「出牛各七何」。
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
            <h3 class="about-title mb-4 fs-3 fw-bold">聯絡</h3>
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
@import '../../assets/scss/vendors/bootstrap';

.about {
  &-header {
    height: 350px;
    background: center / cover no-repeat url('../../assets/images/about-banner.png');

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
