<template>
  <div class="open-api-container">
  </div>
</template>

<script>
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

export default {
  name: "OpenApi",
  mounted () {
    const spec = this.$page.path.split('/').filter((item) => !!item)
    import(`../../../../openApiDefinitions/${spec.join('/')}.json`).then(spec => {
      SwaggerUI({
        spec,
        domNode: this.$el
      })
    })

  }
}
</script>

<style scope>
.open-api-container pre {
  background-color: rgb(125, 132, 146);
}
</style>


