<script>
export default {
  data() {
    return {
      list: []
    }
  }
  // methods: {
  //   mouseenter(event) {
  //     let index = event.target.getAttribute('data-id')

  //     for (let i = 0; i <= this.list.length; i++) {
  //       this.list[i].classList.add('noHoverItem')
  //     }

  //     this.list[index].classList.remove('noHoverItem')
  //     this.list[index].classList.add('extendHover')
  //   }
  // },
  // mounted() {
  //   this.list = document.querySelectorAll('.allShop-item')
  // }
}
</script>

<template>
  <div class="allShop d-flex flex-column overflow-hidden">
    <ul class="allShop-list list-unstyled d-flex flex-grow-1">
      <li class="allShop-item">
        <RouterLink to="/shops/00" class="allShop-link allShop-link-keuke">
          <img
            class="allShop-link-img"
            src="../../assets/images/logo_可不可.svg"
            alt="可不可熟成紅茶"
          />
          <span class="allShop-link-tag border-2 link-light border border-light"
            >可不可熟成紅茶</span
          >
        </RouterLink>
      </li>
      <li class="allShop-item">
        <a href="#" class="allShop-link allShop-link-50lan">
          <img class="allShop-link-img" src="../../assets/images/logo_五十嵐.svg" alt="五十嵐" />
          <span class="allShop-link-tag border-2 link-gray-900 border border-gray-900">五十嵐</span>
        </a>
      </li>
      <li class="allShop-item">
        <a href="#" class="allShop-link allShop-link-aNiceHoliday">
          <img class="allShop-link-img" src="../../assets/images/logo_一沐日.svg" alt="一沐日" />
          <span class="allShop-link-tag border-2 link-gray-700 border border-gray-700">一沐日</span>
        </a>
      </li>
      <li class="allShop-item">
        <a href="#" class="allShop-link allShop-link-chingshin">
          <img
            class="allShop-link-img"
            src="../../assets/images/logo_清心福全.svg"
            alt="清心福全"
          />
          <span class="allShop-link-tag border-2 link-light border border-light">清心福全</span>
        </a>
      </li>
      <li class="allShop-item">
        <a href="#" class="allShop-link allShop-link-johnTeaCompany">
          <img
            class="allShop-link-img"
            src="../../assets/images/logo_約翰紅茶.svg"
            alt="約翰紅茶"
          />
          <span class="allShop-link-tag border-2 link-light border border-light">約翰紅茶</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.allShop-item {
  flex: 1 1 auto;
  margin: 0 -1px;
}

.allShop-link {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: skewX(4deg);
  transition: all ease 0.5s;

  &-img,
  &-tag {
    transform: skewX(-4deg);
    transition: all ease 0.5s;
  }

  &-img {
    width: 210px;
  }

  &-tag {
    display: inline-block;
    width: 170px;
    margin-top: 16px;
    padding: 6px 0;
    text-align: center;
    letter-spacing: 0.1em;
    font-weight: 500;
    border-radius: 50px;
  }

  &-keuke::after,
  &-johnTeaCompany::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 50%;
    height: 100%;
    top: 0;
    transform: skewX(-4deg);
  }

  &-keuke {
    background-color: #003c4f;

    &::after {
      left: 0;
      background-color: #003c4f;
    }
  }

  &-50lan {
    background-color: #f5e702;
  }

  &-aNiceHoliday {
    background-color: #ffffff;
  }

  &-chingshin {
    background-color: #005743;
  }

  &-johnTeaCompany {
    background-color: #183263;

    &::after {
      right: 0;
      background-color: #183263;
    }
  }
}

.allShop-list:hover {
  .allShop-link {
    transform: skewX(0);

    &-img,
    &-tag {
      transform: skewX(0);
    }

    &-img {
      opacity: 0.3;
    }

    &-tag {
      opacity: 0.2;
    }
  }
}

.allShop-item:hover {
  .allShop-link {
    padding: 0 88px;

    &-img,
    &-tag {
      opacity: 1;
    }
  }
}
</style>
