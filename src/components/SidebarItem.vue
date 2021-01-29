<template>
  <div class="sidebar__item">
    <div class="sidebar__item-title">{{ title }}</div>
    <div class="sidebar__item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
