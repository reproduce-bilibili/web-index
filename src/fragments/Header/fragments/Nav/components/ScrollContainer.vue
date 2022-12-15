<template>
  <div class="scroll-container"><slot /></div>
</template>

<style lang="scss" scoped>
.scroll-container {
  overflow-y: scroll;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--text4);
  }
}
</style>
