const fileRegex = /\/node_modules/

export default function addLogo() {
  return {
    name: 'add-logo',
    transform() {
      const [src, id] = arguments
      if (!fileRegex.test(id)) {
        return {
          code: src,
          map: null, // 如果可行将提供 source map
        }
      }
    },
  }
}
