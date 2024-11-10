const fs = require('fs').promises;

async function readFiles() {
    try {
        const file1 = await fs.readFile('./file1.txt', 'utf8');
        const file2 = await fs.readFile('./file2.txt', 'utf8');
        const file3 = await fs.readFile('./file3.txt', 'utf8');

        console.log("Contents of file1.txt:\n", file1);
        console.log("Contents of file2.txt:\n", file2);
        console.log("Contents of file3.txt:\n", file3);
    } catch (error) {
        console.error("Error reading files:", error);
    }
}

readFiles();