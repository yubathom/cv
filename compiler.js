(() => {
  const yaml = require('js-yaml')
  const fs   = require('fs')

  const listFiles = (folder) => {
    return fs.readdirSync(folder, (err, files) => {
      if (err) {
        return 'Unable to scan directory: ' + err
      } 
      return files
    })
  }

  const compileYml = file => {
    const lang = file.replace('.yml', '')
    const cv = JSON.stringify(yaml.safeLoad(fs.readFileSync(`./resume/${file}`, 'utf8')))

    fs.writeFile(`src/${lang}.json`, cv, 'utf8', (err) => {
      if (err) {
        console.log("An error occured while writing JSON Object to File.")
        throw new Error(err)
      }
      console.log(`${lang}.json file has been updated from resume/${file}`)
    })
  }

  try {
    listFiles('./resume/')
      .filter(file => file.split('.').pop() === 'yml')
      .forEach(ymlFile => compileYml(ymlFile))
  } catch (e) {
    console.log(e);
  }
})()