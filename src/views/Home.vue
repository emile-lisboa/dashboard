<template>
    <custom-header />
    <contact />
    <div class="flex align-center jc-center bg-brand-gray footer">
        <p class="text-center font-bold">feedbacker &copy; 2021</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomHeader from '@/components/CustomHeader'
import Contact from '@/components/Contact'

export default defineComponent({
  components: {
    CustomHeader,
    Contact
  }
})
</script>

<style lang="scss">
.footer {
    padding: 2.8125rem 0;
}
</style>
