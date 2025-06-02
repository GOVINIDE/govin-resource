const {hashElement} = require('folder-hash');
const crypto = require('crypto');
const path = require('path');

const dir = path.resolve('./external-resources');

const options = {
    algo: 'sha256',
    encoding: 'hex',
    folders: {exclude: ['.git', '.github']},
    files: {exclude: ['.gitignore', 'config.json']}
};

hashElement(dir, options)
    .then(hash => {
        const childrenString = hash.children.toString();
        const folderHash = crypto.createHash('sha256').update(childrenString).digest('hex');
        console.log('Calculated folder hash:', folderHash);
    })
    .catch(error => {
        console.error('Error calculating folder hash:', error);
    }); 