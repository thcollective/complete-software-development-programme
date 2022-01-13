import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueI18n)

const messages = {
	en: {
		message: {
			placeholder: 'What needs to be done?',
			remaining: '{count} item left | {count} items left',
			all: 'All',
			active: 'Active',
			completed: 'Completed',
			archive: 'Clear completed'
		}
	},
	ja: {
		message: {
			placeholder: '予定の項目を入力',
			remaining: '残り{count}項目',
			all: 'すべて',
			active: '未処理',
			completed: '処理済み',
			archive: '断捨離'
		}
	}
};
const i18n = new VueI18n({
	locale: 'en', // set locale
	messages, // set locale messages
});
new Vue({
	i18n,
	render: h => h(App),
}).$mount('#app');
