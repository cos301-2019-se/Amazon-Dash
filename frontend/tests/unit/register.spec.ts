import { mount, createLocalVue } from '@vue/test-utils'
import router from '@/router'
import Register from '@/views/Register.vue'
import Router from 'vue-router'

describe('Register.vue', () => {
    const localVue = createLocalVue()
    localVue.use(Router)
    const wrapper = mount(Register, {
        localVue,
        router,
    })
    it('should display the title', () => {
        expect(wrapper.text()).toContain('Create account')
    })
    it('should have register button', () => {
        expect(wrapper.find('button[type="submit"]')).toBeTruthy()
    })
    it('should have other buttons', () => {
        expect(wrapper.find('button[type="button"]')).toBeTruthy()
    })
})
