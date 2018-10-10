import Cookies from 'js-cookie'
import { stat } from 'fs';

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    host: 'http://localhost/repaire.dnpuzi.com/',
    userInfo: JSON.parse(localStorage.getItem('puziUserInfo')),
    collegeList: [
      {
        value: '马克思主义学院',
        label: '马克思主义学院'
      },
      {
        value: '历史与社会学院',
        label: '历史与社会学院'
      },
      {
        value: '教育科学学院',
        label: '教育科学学院'
      },
      {
        value: '体育与健康科学学院',
        label: '体育与健康科学学院'
      },
      {
        value: '文学院',
        label: '文学院'
      },
      {
        value: '外国语学院',
        label: '外国语学院'
      },
      {
        value: '音乐学院',
        label: '音乐学院'
      },
      {
        value: '美术学院',
        label: '美术学院'
      },
      {
        value: '新闻与传媒学院（新媒体学院）',
        label: '新闻与传媒学院（新媒体学院）'
      },
      {
        value: '数学科学学院',
        label: '数学科学学院'
      },
      {
        value: '物理与电子工程学院',
        label: '物理与电子工程学院'
      },
      {
        value: '化学学院',
        label: '化学学院'
      },
      {
        value: '生命科学学院',
        label: '生命科学学院'
      },
      {
        value: '地理与旅游学院',
        label: '地理与旅游学院'
      },
      {
        value: '经济与管理学院',
        label: '经济与管理学院'
      },
      {
        value: '计算机与信息科学学院',
        label: '计算机与信息科学学院'
      },
      {
        value: '初等教育学院',
        label: '初等教育学院'
      },
      {
        value: '其他',
        label: '其他'
      },
    ],
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    ADD_PUZIUSERINFO: (state, puziUserInfo) => {
      state.userInfo = puziUserInfo
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    AddPuziUserInfo({ commit }, puziUserInfo) {
      commit('ADD_PUZIUSERINFO', puziUserInfo)
    }
  }
}

export default app
