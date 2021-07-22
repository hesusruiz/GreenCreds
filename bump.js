const fs = require('fs');
const { exit } = require('process');

const versionFileName = "src/VERSION.txt"

if (!fs.statSync(versionFileName, {throwIfNoEntry: false})) {
    fs.writeFileSync(versionFileName, "1.0.0")
}

var text = fs.readFileSync(versionFileName, "utf8")    

var ver = text.split(".")
if (ver.length !== 3) {
    throw "Not three components"
}

var patch = parseInt(ver[2])
patch = patch + 1

console.log("Old version:", text)
text = ver[0] + "." + ver[1] + "." + patch
console.log("New version:", text)

fs.writeFileSync(versionFileName, text)