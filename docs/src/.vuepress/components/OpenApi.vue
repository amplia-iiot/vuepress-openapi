<template>
  <div class="open-api-container"></div>
</template>

<script>
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

export default {
  name: "OpenApi",
  mounted () {
    //coger del config.js baseurl => para que apunte por defecto, sección [Try it now] 
    const composedNameSpec = this.$page.regularPath.split('/').filter((item)=>!!item).join('-')
    import(`../../specs/${composedNameSpec}.json`).then(spec => {
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


