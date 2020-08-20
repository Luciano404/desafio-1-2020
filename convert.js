const fs = require("fs");
var Jimp = require('jimp');

const PATHS = [
  "doc/source/dataset/lagarta",
  "doc/source/dataset/negativo",
  "doc/source/dataset/percevejo_marrom",
  "doc/source/dataset/percevejo_pequeno",
  "doc/source/dataset/percevejo_verde",
];

PATHS.forEach((path) => {
  fs.readdirSync(path).forEach((file) => {
      if(!file.startsWith("convertido-")){
        console.debug(path + "/" + file);
        Jimp.read(path + "/" + file)
        .then(img=>{
            for(var i=0; i<=3; i++){
            img
            .autocrop()
            .rotate(90*(i+1))
            .write(`${path}/convertido-${i}-${file}`);
        }
        });

      }

    })
});
