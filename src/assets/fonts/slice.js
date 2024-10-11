const path = require('path')
const createFontSlice = require('font-slice')

createFontSlice({
  // fontPath
  fontPath: path.resolve(__dirname, './SmileySans-Oblique-2.ttf'),
  // outputDir
  outputDir: path.resolve(__dirname, './SmileySans-Oblique'),
})
