import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/styles.scss';
import '@/assets/tailwind.css';
import BlockViewer from '@/components/BlockViewer.vue';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';


//导入JQuery库，因为Ajax用起来非常方便，支持同步和异步的Ajax请求
//因为jQuery 不是es6模块,所以在加载时 需要特别注意.
import * as jQuery from 'jquery';
window.$ = window.jQuery = jQuery.default || jQuery;

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);
app.component('BlockViewer', BlockViewer);

const toast = app.config.globalProperties.$toast;

const baseUrl = "/server/api"
// const baseUrl = "https://localhost:8000/api"
// const baseUrl = "https://www.source-cn.net:8000/api"

//封装全局Ajax公共函数
app.config.globalProperties.$http = function(url, method, data, async, fun) {
    $.ajax({
        url: baseUrl + url,
        type: method,
        dataType: 'json',
        contentType: "application/json",
        traditional: true,
        xhrFields: {
            withCredentials: true
        },
        headers: {
        },
        async: async,
        data: JSON.stringify(data),
        success: function(resp) {
            console.log("this is resp", resp)
            if (resp.code == 200) {
                fun(resp)
            } else {
                toast.add({ severity: 'error', summary: 'Error', detail: resp, life: 3000 });
            }
        },
        error: function(e) {
            if (e.status == undefined) {
                toast.add({ severity: 'error', summary: 'Error', detail: "前端页面错误", life: 3000 });
            } else {
                console.log(e)
                toast.add({ severity: 'error', summary: 'Error', detail: e.responseJSON.error, life: 3000 });
            }
        }
    })
}


app.mount('#app');
