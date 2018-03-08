import Launcher from './Launcher.vue'

const defaultComponentName = 'beautiful-chat'

const Plugin = {
  install (Vue, options = {}) {
    /**
     * Makes sure that plugin can be insstalled only once
     */
    if (this.installed) {
      return
    }

    this.installed = true
    this.event = new Vue()
    this.dynamicContainer = null
    this.componentName = options.componentName || defaultComponentName
    /**
     * Plugin API
     */
    Vue.prototype.$modal = {
      _setDynamicContainer (dynamicContainer) {
        Plugin.dynamicContainer = dynamicContainer
      }
      // show (modal, paramsOrProps, params) {
      //   if (typeof modal === 'string') {
      //     Plugin.event.$emit('toggle', modal, true, paramsOrProps)
      //   } else {
      //     if (Plugin.dynamicContainer === null) {
      //       console.warn('[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page')
      //     } else {
      //       Plugin.dynamicContainer.add(modal, paramsOrProps, params)
      //     }
      //   }
      // },
      // hide (name, params) {
      //   Plugin.event.$emit('toggle', name, false, params)
      // },

      // toggle (name, params) {
      //   Plugin.event.$emit('toggle', name, undefined, params)
      // }
    }
    /**
     * Sets custom component name (if provided)
     */
    Vue.component(this.componentName, Launcher)
  }
}

export default Plugin
