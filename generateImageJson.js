const fs = require('fs');
const path = require('path');

// Specify the directory containing your images
const baseDir = path.join(__dirname, 'public', 'images', 'game-image');
const outputPath = path.join(baseDir, 'imageData.json');

const generateImageJson = () => {
    const imageData = {};

    // Read directories in the baseDir
    fs.readdir(baseDir, (err, folders) => {
        if (err) {
            console.error('Error reading directories:', err);
            return;
        }

        // Iterate over each folder
        folders.forEach(folder => {
            const folderPath = path.join(baseDir, folder);
            if (fs.statSync(folderPath).isDirectory()) {
                // Read files in the folder
                const images = fs.readdirSync(folderPath).filter(file => {
                    const ext = path.extname(file).toLowerCase();
                    return ext === '.jpg' || ext === '.jpeg' || ext === '.png'; // Add other image formats if needed
                });

                // Add the images to the imageData object
                imageData[folder] = images;
            }
        });

        // Write the imageData to a JSON file
        fs.writeFileSync(outputPath, JSON.stringify(imageData, null, 2));
        console.log('imageData.json has been generated:', outputPath);
    });
};

// Run the function
generateImageJson();
