import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "pagelist",
    component: () => import("../views/pages/index.vue"),
    meta: {
      depth01: '',
      depth02: '',
      depth03: '',
      id: '',
      name: '',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Typography",
    name: "Typography",
    component: () => import("../views/guide/TypographyGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Typography',
      depth03: '',
      id: '',
      name: 'Typography',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Colors",
    name: "Colors",
    component: () => import("../views/guide/ColorsGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Colors',
      depth03: '',
      id: '',
      name: 'Colors',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Icon",
    name: "Icon",
    component: () => import("../views/guide/IconGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Icon',
      depth03: '',
      id: '',
      name: 'Icon',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Button",
    name: "Button",
    component: () => import("../views/guide/ButtonGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Button',
      depth03: '',
      id: '',
      name: 'Button',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Modal",
    name: "Modal",
    component: () => import("../views/guide/ModalGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Modal',
      depth03: '',
      id: '',
      name: 'Modal',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Layout",
    name: "Layout",
    component: () => import("../views/guide/LayoutGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Layout',
      depth03: '',
      id: '',
      name: 'Layout',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Form",
    name: "Form",
    component: () => import("../views/guide/FormGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Form',
      depth03: '',
      id: '',
      name: 'Form',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Select",
    name: "Select",
    component: () => import("../views/guide/SelectGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Select',
      depth03: '',
      id: '',
      name: 'Select',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Divider",
    name: "Divider",
    component: () => import("../views/guide/DividerGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Divider',
      depth03: '',
      id: '',
      name: 'Divider',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Tabs",
    name: "Tabs",
    component: () => import("../views/guide/TabsGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Tabs',
      depth03: '',
      id: '',
      name: 'Tabs',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Tooltip",
    name: "Tooltip",
    component: () => import("../views/guide/TooltipGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Tooltip',
      depth03: '',
      id: '',
      name: 'Tooltip',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/Agreement",
    name: "Agreement",
    component: () => import("../views/guide/AgreementGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'Agreement',
      depth03: '',
      id: '',
      name: 'Agreement',
      author: '',
      state: '진행중',
      createdDate: '',
      note: ''
    }
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
