/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true, // 只需将该项设置为 true 即可
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
