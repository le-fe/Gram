<template>
  <component :is="layout">
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </component>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const defaultLayout = 'app'
export default {
  setup () {
    const { currentRoute } = useRouter()
    const layout = computed(
      () => currentRoute.value.meta.layout ? `${currentRoute.value.meta.layout || defaultLayout}-layout` : 'app-layout'
    )
    return {
      layout
    }
  }
}
</script>
