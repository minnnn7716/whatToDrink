import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'FrontLayout',
    component: () => import('@/views/FrontLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/front/HomeView.vue'),
        meta: {
          title: 'What to Drink',
        },
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/front/SearchView.vue'),
        meta: {
          title: 'What to Drink - 搜尋',
        },
      },
      {
        path: '/shops',
        name: 'Shop',
        component: () => import('@/views/front/ShopsList.vue'),
        meta: {
          title: 'What to Drink - 店家列表',
        },
      },
      {
        path: '/shops/:id',
        component: () => import('@/views/front/ShopView.vue'),
        props: (route) => ({ id: route.params.id }),
        meta: {
          title: 'What to Drink - 店家',
        },
      },
      {
        path: '/drink/:id',
        component: () => import('@/views/front/DrinkView.vue'),
        props: (route) => ({ id: route.params.id }),
        meta: {
          title: 'What to Drink - 飲料',
        },
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/front/AboutView.vue'),
        meta: {
          title: 'What to Drink - 關於',
        },
      },
      {
        path: '/favorites',
        name: 'Favorite',
        component: () => import('@/views/front/FavoriteView.vue'),
        meta: {
          title: 'What to Drink - 喜愛清單',
        },
      },
      {
        path: '/wheel',
        name: 'SpinWheel',
        component: () => import('@/views/front/SpinWheel.vue'),
        meta: {
          title: 'What to Drink - 轉盤',
        },
      },
      {
        path: '/notfound',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
        meta: {
          title: 'What to Drink - 找不到頁面',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'NotFound',
      params: {},
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
