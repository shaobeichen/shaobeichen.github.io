export default function addLogo() {
  return {
    name: 'test',
    options() {
      //   console.warn(1, arguments)
    },
    buildStart() {
      //   console.warn(2, arguments)
    },
    resolveId() {
      //   console.warn(3, arguments)
    },
    load() {
      //   console.warn(4, arguments)
    },
    buildEnd() {
      //   console.warn(5, arguments)
    },
    closeBundle() {
      //   console.warn(6, arguments)
    },
    transform() {
      const [src, id] = arguments
      if (/nimble\.vue/.test(id)) {
        console.warn(src)
        return {
          code: src,
          map: null, // 如果可行将提供 source map
        }
      }
    },
  }
}
