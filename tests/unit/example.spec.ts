import { mount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld)
  it('renders the heading', () => {
    const msg = 'Welcome to Vuetify'
    expect(wrapper.text()).toContain(msg)
  })
})
