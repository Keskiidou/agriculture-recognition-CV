import { useState, useEffect } from 'react';
import axios from 'axios';

interface RandomImageDisplayProps {
    width: number;
    height: number;
    refreshKey: number; // Accept the refreshKey prop to trigger re-rendering
    setFilePath: (path: string) => void; // Function to set the file path
}

const RandomImageDisplay: React.FC<RandomImageDisplayProps> = ({ width, height, refreshKey, setFilePath }) => {
    const [imagePath, setImagePath] = useState<string | null>(null);

    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const response = await axios.get('/images/game-image/imageData.json');
                const imageData = response.data;

                const folders = Object.keys(imageData);
                const randomFolder = folders[Math.floor(Math.random() * folders.length)];
                const images = imageData[randomFolder];
                const randomImageName = images[Math.floor(Math.random() * images.length)];

                // Generate the relative image path
                const relativeImagePath = `/images/game-image/${randomFolder}/${randomImageName}`;
                setImagePath(relativeImagePath); // Update the local state

                // Define the base path for your images
                const basePath = 'C:\\Users\\DepressingPp\\Desktop\\agriculture-recognition-CV\\public';

                // Generate the absolute path for the backend
                const backEndPath = `${basePath}${relativeImagePath.replace('/', '\\')}`; // Adjust this path as necessary
                console.log("Backend image path:", backEndPath);
                setFilePath(backEndPath);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };

        fetchImageData();
    }, [refreshKey, setFilePath]);

    return (
        <div>
            {imagePath && (
                <img
                    src={imagePath}
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