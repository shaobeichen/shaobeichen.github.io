export default function addLogo() {
  return {
    name: 'add-logo',
    transformIndexHtml() {
      const [html] = arguments
      return (
        `<!-- 
            ███████╗██╗  ██╗ █████╗  ██████╗ 
            ██╔════╝██║  ██║██╔══██╗██╔═══██╗
            ███████╗███████║███████║██║   ██║
            ╚════██║██╔══██║██╔══██║██║   ██║
            ███████║██║  ██║██║  ██║╚██████╔╝
            ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  
-->
        ` + html
      )
    },
  }
}
