import fs from 'fs'
export default JSON.parse(fs.readFileSync('static/fakeData/p5subset.json', 'utf8'))
