const path = require('path')
// const fs = require('fs')
const fsEx = require('fs-extra')

const originPath = path.join(__dirname, '../app/viz')

const targetPath = path.join(__dirname, '../distAssets/win-unpacked/app/viz')

fsEx.copy(originPath, targetPath)

// function copyFile(srcPath, targetPath) {
//   const readStream = fs.createReadStream(srcPath)
//   const writeStream = fs.createWriteStream(targetPath)
//   readStream.on('error', err => {
//     console.log('read file err', err)
//     console.log('read err file is', srcPath)
//   })

//   writeStream.on('error', err => {
//     if (err) {
//       console.log('write file err', err)
//       console.log('write err file is', srcPath)
//     }
//   })

//   writeStream.on('close', e => {
//     console.log('e', e)
//   })
//   readStream.pipe(writeStream)
// }

// function copyDir(srcDir, targetDir) {
//   if (fs.existsSync(targetDir)) {
//     fs.readdir(srcDir, (err, files) => {
//       let count = 0
//       let checkEnd = () => {
//         console.log(`${count}/${files.length}`)
//       }
//       if (err) {
//         console.log('readdir err, err')
//         checkEnd()
//         return
//       }
//       files.forEach(file => {
//         let srcPath = path.join(srcDir, file)
//         let targetPath = path.join(targetDir, file)
//         fs.stat(srcPath, (err, stats) => {
//           if (stats.isDirectory()) {
//             copyDir(srcPath, targetPath)
//           } else {
//             copyFile(srcPath, targetPath)
//           }
//         })
//       })
//     })
//   } else {
//     console.log(targetDir)
//     fs.mkdir(targetDir, err => {
//       if (err) {
//         console.log('mkdir err', err)
//         return
//       }
//       copyDir(srcDir, targetDir)
//     })
//   }
// }

// // copyDir(originPath, targetPath)
