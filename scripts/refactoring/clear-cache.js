const { log } = require('console');
const fs = require('fs');


fs.rmdir('./node_modules/.cache', {
    recursive: true
},  () => {
 console.log('Cache forder from node_modules was deleting.')
})