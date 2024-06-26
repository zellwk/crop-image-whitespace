import glob from 'glob-promise'
import path from 'node:path'
import sharp from 'sharp'

const files = await glob('./images/*')

files.forEach(file => trimImage(file))

function trimImage(imagePath) {
  const filename = path.basename(imagePath)
  sharp(imagePath)
    .trim()
    .toFile(`./out/${filename}`, err => {
      if (err) console.error('Error cropping the image:', err)
      else console.log('Image cropped successfully')
    })
}
