<template>
  <VDropdown
    class="nav-dropdown"
    theme="header-card-bottom"
    container=".nav"
    v-bind="$attrs">
    <template v-for="(slot, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
  </VDropdown>
</template>

<style lang="scss" scoped>
.nav-dropdown {
  position: relative;
}
</style>
