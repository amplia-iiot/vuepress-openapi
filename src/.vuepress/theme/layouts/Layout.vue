<template>
  <div>
    <ParentLayout>
      <template v-slot:page-bottom>
        <ClientOnly>
          <open-api :page="$page"></open-api>
        </ClientOnly>
      </template>
    </ParentLayout>
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: {
    ParentLayout
  }
}
</script>
