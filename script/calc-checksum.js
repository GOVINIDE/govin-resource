const hashFiles = require('hash-files');
const path = require('path');

const filePath = path.resolve('./download/external-resources-v2_2.1.7.zip');

hashFiles({files: filePath, algorithm: 'sha256'}, (error, hash) => {
    if (error) {
        console.error('Error calculating hash:', error);
        return;
    }
    console.log('SHA256 checksum:', hash);
}); 