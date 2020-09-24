<template>
  <div class="open-api-container"></div>
</template>

<script>
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

export default {
  name: "OpenApi",
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  watch: {
    page: {
      immediate: true,
      handler () {
        const { servers = [] } = this.$themeConfig;
        const composedNameSpec = this.page.regularPath.split('/').filter((item) => !!item).join('-').replace(/\..*$/, '')
        import(`../../specs/${composedNameSpec}.${this.yaml ? 'yaml' : 'json'}`).then(spec => {
          SwaggerUI({
            spec: { ...spec, servers: servers.map(url => ({ url })) },
            domNode: this.$el
          })
        }).catch(() => {
          this.$el.innerHTML = ''
        })
      }
    }
  },
  computed: {
    yaml () {
      return this.$frontmatter.openapi === 'yaml'
    }
  }
}
</script>

<style scope>
.open-api-container pre {
  background-color: rgb(125, 132, 146);
}
</style>


