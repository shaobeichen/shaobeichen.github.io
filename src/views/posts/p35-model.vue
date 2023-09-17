<template>
  <layout-default>
    <div class="content">
      <sh-input type="text" v-model="first" />
      <br />
      <sh-input type="text" :value="first" @input="value => (first = value)" />
      <br />
      <sh-input type="text" v-my-model="first" />
    </div>
  </layout-default>
</template>

<script>
export default {
  data() {
    return {
      first: '',
    }
  },
  directives: {
    myModel: {
      bind(el, bindings, vnode) {
        const context = vnode.context
        el.value = context[bindings.expression]

        el.oninput = e => {
          const value = e.target.value
          context[bindings.expression] = value
          // this.first = value
        }
      },
    },
  },
}
</script>
