import { mount, createLocalVue } from '@vue/test-utils'
import router from '@/router'
import Login from '@/views/Login.vue'
import Router from 'vue-router'

describe('Login.vue', () => {
    const localVue = createLocalVue()
    localVue.use(Router)
    const wrapper = mount(Login, {
        localVue,
        router,
    })
    it('displays the title', () => {
        expect(wrapper.text()).toContain('Amazon Dash')
    })
    it('has a login button', () => {
        expect(wrapper.find('button[type="submit"]')).toBeTruthy()
    })
    it('has other buttons', () => {
        expect(wrapper.find('button[type="button"]')).toBeTruthy()
    })
})
