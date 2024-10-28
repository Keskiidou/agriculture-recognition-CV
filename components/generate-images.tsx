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

                console.log("Fetched image data:", imageData); // Log the fetched data

                const folders = Object.keys(imageData);
                const randomFolder = folders[Math.floor(Math.random() * folders.length)];
                const images = imageData[randomFolder];

                console.log("Random folder:", randomFolder, "Images:", images); // Log the selected folder and its images

                const randomImageName = images[Math.floor(Math.random() * images.length)];
                const newImagePath = `/images/game-image/${randomFolder}/${randomImageName}`;

                console.log("Generated image path:", newImagePath); // Log the generated image path

                setImagePath(newImagePath);

                const backEndPath = newImagePath.replace('/images', '/app/images');
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
