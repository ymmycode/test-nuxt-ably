<template>
  <transition name="fade">
    <div v-if="intro" class="fixed w-full h-full top-0 left-0 bg-black z-20 flex justify-center flex-col items-center text-primary-1">
      <h1 class="unbounded text-3xl -tracking-wide">Joined The Room</h1>
      <h2 class="text-xl">Share Your Thoughts</h2>
    </div>
  </transition>

  <div class="fixed top-0 left-0 bg-black full-height w-full">
    <div class="w-full h-full flex justify-start items-stretch max-w-screen-big-screen mx-auto">
      <div class="w-full h-full rounded-3xl border border-primary-1 overflow-clip">
        <div class="w-full h-full px-4 py-6 pb-12 flex flex-col gap-4">
          <div class="relative h-full w-full max-h-[90%] rounded-3xl border border-primary-1 overflow-clip">
            <LiveChat/>
          </div>
          <div class="py-2 px-1 border border-primary-1 rounded-3xl overflow-clip">
            <FormText/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'index-layout',
});

import makeID from '../../includes/MakeId';
const mainStore = useMainStore()

const id = makeID(20)
const intro = ref(true)

onMounted(async () => {
  await mainStore.setChatID(id)
  nextTick(() => {
    const to = setTimeout(() => {
      intro.value = false
      clearTimeout(to)
    }, 1000)
  })
})
</script>

<style lang="scss" scoped>

</style>