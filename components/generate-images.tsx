import { useState, useEffect } from 'react';
import axios from 'axios';

interface RandomImageDisplayProps {
    width: number;
    height: number;
    refreshKey: number; // Accept the refreshKey prop to trigger re-rendering
    setFilePath: (path: string) => void; // Function to set the file path
}

const RandomImageDisplay: React.FC<RandomImageDisplayProps> = ({ width, height, refreshKey, setFilePath }) => {
    const [randomImage, setRandomImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const response = await axios.get('/images/game-image/imageData.json'); // Adjust the path if needed
                const imageData = response.data;

                // Get a random folder from the keys of imageData
                const folders = Object.keys(imageData);
                const randomFolder = folders[Math.floor(Math.random() * folders.length)];

                // Get a random image from the selected folder
                const images = imageData[randomFolder];
                const randomImageName = images[Math.floor(Math.random() * images.length)];

                // Construct the full image path
                const imagePath = `/images/game-image/${randomFolder}/${randomImageName}`;

                // Set the random image and the file path
                setRandomImage(imagePath);
                setFilePath(imagePath); // Set the file path after fetching the image
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };

        fetchImageData();
    }, [refreshKey, setFilePath]); // Re-fetch image when refreshKey changes

    return (
        <div>
            {randomImage && (
                <img
                    src={randomImage}
                    alt="Random"
                    width={width}
                    height={height}
                    className="object-cover"
                />
            )}
        </div>
    );
};

export default RandomImageDisplay;
