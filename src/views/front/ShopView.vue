<script>
import 'bootstrap/js/src/modal';
import FavoriteBtn from '../../components/FavoriteBtn.vue';
import RateDisplay from '../../components/RateDisplay.vue';
import RateGroup from '../../components/RateGroup.vue';
import CommentDisplay from '../../components/CommentDisplay.vue';

export default {
  components: {
    RateDisplay,
    RateGroup,
    FavoriteBtn,
    CommentDisplay,
  },
};
</script>

<template>
  <div class="shopView pb-20">
    <header
      class="shopView-header position-relative
      d-flex align-items-center justify-content-center mb-20"
    >
      <img src="../../assets/images/logo_清心福全.svg" alt="" />
      <div class="shopView-header-content container position-absolute start-50 bottom-0">
        <div class="row justify-content-center">
          <div class="col-10 col-3xl-12 d-flex justify-content-between">
            <h2 class="fs-3 fw-bold title-stroke-2">清心福全</h2>
            <button
              type="button"
              class="btn border-0 p-0"
              data-bs-toggle="modal"
              data-bs-target="#shopRateModal"
            >
              <RateDisplay class="rateDisplay-md hasHandText strokeTitle mb-2" />
              <p class="text-end">57 則評論</p>
            </button>
          </div>
        </div>
      </div>
    </header>
    <section class="container">
      <div class="row justify-content-center">
        <div class="col-10 col-3xl-12">
          <div class="shopView-menu px-6 py-10 border border-3 border-secondary-600 rounded-4">
            <div class="row gy-10 gx-12">
              <div class="col-6">
                <table class="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col" colspan="4" class="fs-5 border-0">純茶</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">阿薩姆紅茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">
                        <a class="link-black" href="#">黃金JOJO麥茶</a>
                      </th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">喀什米爾羊毛茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">烏龍茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">綠茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-6">
                <table class="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col" colspan="4" class="fs-5 border-0">特調茶</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">喀什米爾羊毛茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">烏龍茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">綠茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-6">
                <table class="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col" colspan="4" class="fs-5 border-0">特調茶</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">喀什米爾羊毛茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">烏龍茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">綠茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-6">
                <table class="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col" colspan="4" class="fs-5 border-0">純茶</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">阿薩姆紅茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">黃金JOJO麥茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">喀什米爾羊毛茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">烏龍茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">綠茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-6">
                <table class="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col" colspan="4" class="fs-5 border-0">純茶</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">阿薩姆紅茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">黃金JOJO麥茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">喀什米爾羊毛茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">烏龍茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="fw-normal" width="30%">綠茶</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-1"
                            src="../../assets/images/icon-start-full.svg"
                            alt="rate"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">4.9</p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p class="font-handwriting mb-minus1">M $ 20 ｜ L $ 30</p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <ul class="shopView-menu-list list-unstyled">
              <li>
                <button type="button" class="btn shopView-menu-btn active">
                  <span>全部飲品</span>
                </button>
              </li>
              <li>
                <button type="button" class="btn shopView-menu-btn">
                  <span>純茶</span>
                </button>
              </li>
              <li>
                <button type="button" class="btn shopView-menu-btn">
                  <span>特調茶</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- shopRateModal -->
    <div class="modal fade" id="shopRateModal">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content rounded-4">
          <div class="modal-header border-bottom-0">
            <h1 class="modal-title fs-5 invisible" id="addCommentModalLabel">店家評價</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body pt-0 pb-10">
            <div class="container-fluid">
              <RateGroup class="mb-10" />
              <div class="d-flex align-items-center justify-content-end mb-4">
                <label for="type" class="me-4 fw-medium">排序</label>
                <select
                  id="type"
                  class="form-select py-2 px-4 border-black rounded-pill"
                  style="max-width: 180px"
                >
                  <option selected value="評分最高">評分最高</option>
                  <option value="最新日期">最新日期</option>
                  <option value="最冰溫度">最冰溫度</option>
                  <option value="最少甜度">最少甜度</option>
                </select>
              </div>
              <div class="px-5">
                <div class="pb-10 mb-10 border-bottom border-gray">
                  <div class="row">
                    <div class="col-5">
                      <div class="d-flex">
                        <img
                          width="170"
                          height="170"
                          class="me-3"
                          src="../../assets/images/drinkPhoto.png"
                          alt=""
                        />
                        <div class="d-flex flex-column justify-content-between">
                          <div>
                            <p class="fs-5 fw-medium mb-2">珍珠多多綠</p>
                            <div class="d-flex align-items-center">
                              <img
                                width="20"
                                class="me-1"
                                src="../../assets/images/icon-start-full.svg"
                                alt="rate"
                              />
                              <p class="fs-6 font-handwriting fw-bold mb-minus1">4.9</p>
                            </div>
                          </div>
                          <p class="fs-6 font-handwriting lh-lg">
                            M <span class="ms-1">$ 50</span>
                            <span class="mx-2">｜</span>
                            L <span class="ms-1">$ 60</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-7 d-flex">
                      <CommentDisplay />
                    </div>
                  </div>
                </div>
                <div class="pb-10 mb-10 border-bottom border-gray">
                  <div class="row">
                    <div class="col-4 d-flex">
                      <div class="w-55 me-3">
                        <img class="img-full" src="../../assets/images/drinkPhoto.png" alt="" />
                      </div>
                      <div class="d-flex flex-column justify-content-between">
                        <div>
                          <p class="fs-5 fw-medium mb-2">珍珠多多綠</p>
                          <div class="d-flex align-items-center">
                            <img
                              width="20"
                              class="me-1"
                              src="../../assets/images/icon-start-full.svg"
                              alt="rate"
                            />
                            <p class="fs-6 font-handwriting fw-bold mb-minus1">4.9</p>
                          </div>
                        </div>
                        <p class="fs-6 font-handwriting lh-lg">
                          M $50 <br />
                          L $60
                        </p>
                      </div>
                    </div>
                    <div class="col-8 d-flex">
                      <CommentDisplay />
                    </div>
                  </div>
                </div>
                <div class="pb-10 mb-10 border-bottom border-gray">
                  <div class="row">
                    <div class="col-4 d-flex">
                      <div class="w-55 me-3">
                        <img class="img-full" src="../../assets/images/drinkPhoto.png" alt="" />
                      </div>
                      <div class="d-flex flex-column justify-content-between">
                        <div>
                          <p class="fs-5 fw-medium mb-2">珍珠多多綠</p>
                          <div class="d-flex align-items-center">
                            <img
                              width="20"
                              class="me-1"
                              src="../../assets/images/icon-start-full.svg"
                              alt="rate"
                            />
                            <p class="fs-6 font-handwriting fw-bold mb-minus1">4.9</p>
                          </div>
                        </div>
                        <p class="fs-6 font-handwriting lh-lg">
                          M $50 <br />
                          L $60
                        </p>
                      </div>
                    </div>
                    <div class="col-8 d-flex">
                      <CommentDisplay />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/vendors/bootstrap';

.shopView {
  &-header {
    background-color: #005743;

    img {
      width: 180px;
    }

    &-content {
      transform: translate(-50%, 80%);
    }
  }

  &-menu {
    position: relative;
    margin-right: 44px;
    td {
      padding: 12px 4px;
    }

    &-list {
      position: absolute;
      right: 0;
      top: 32px;
      transform: translateX(100%);
      li:not(:last-child) {
        margin-bottom: 12px;
      }
    }

    &-btn {
      padding: 8px 12px;
      border-radius: 0 8px 8px 0;
      background-color: $gray-100;
      border: 1px solid #000;
      border-left: 3px solid $secondary-600;
      transition: all ease 0.3s;
      span {
        padding: 16px 0;
        writing-mode: vertical-lr;
        letter-spacing: 0.4em;
        margin-bottom: -0.6em;
        transition: all ease 0.3s;
      }

      &.active {
        margin-left: -1px;
        color: $secondary-700;
        font-weight: 500;
        background-color: #ffffff;
        border: 3px solid $secondary-600;
        border-left: 3px solid #ffffff;
        pointer-events: none;
      }

      &:not(.active):hover {
        background-color: $gray-100;
        border: 1px solid #000;
        border-left: 3px solid $secondary-600;
        padding-left: 20px;
      }
    }
  }
}
</style>
