<template>
<router-link :to="{path: path}" class="tab-item" active-class="active" replace>
    <span class="icon" :class="iconClass"></span>
    <span class="tab-label">
        <slot></slot>
    </span>
</router-link>
</template>

<script>
export default {
  props: {
    path: '',
    icon: ''
  },
  computed: {
    iconClass () {
      return `icon-${this.icon}`
    }
  }
}
</script>
