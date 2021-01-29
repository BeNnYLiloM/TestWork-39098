<template>
  <div class="container">
    <div class="main-wrap">
      <div class="sidebar">
        <SidebarItem :title="'Categories'">
          <Categories />
        </SidebarItem>
      </div>

      <div class="content">
        <Products />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarItem from '@/components/SidebarItem'
import Categories from '@/components/Categories'
import Products from '@/components/Products'

export default {
  name: 'Home',
  components: {
    SidebarItem,
    Categories,
    Products
  }
}
</script>
