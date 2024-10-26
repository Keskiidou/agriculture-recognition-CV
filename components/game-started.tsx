"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import RandomImageDisplay from './generate-images';

export default function CropGuessingGame() {
    const [refreshKey, setRefreshKey] = useState(0);
    const [score, setScore] = useState(0);
    const [vggScore, setVggScore] = useState(0);
    const [clickedButton, setClickedButton] = useState('');
    const [imageFilePath, setImageFilePath] = useState('');
    const [predictedClass, setPredictedClass] = useState('');
    const [imageName, setImageName] = useState('');
    const maxScore = 10;

    const handleButtonClick = async (buttonContent: string) => {
        if (score < maxScore && vggScore < maxScore) {
            setClickedButton(buttonContent);
            await predictImage(buttonContent);
        }
    };

    const predictImage = async (buttonContent: string) => {
        const formData = new FormData();
        const imagePath = imageFilePath;

        try {
            const imageResponse = await fetch(imagePath);
            const imageBlob = await imageResponse.blob();
            formData.append('file', imageBlob, 'image.jpg');

            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            const data = response.data;
            if (response.status === 200) {
                const trueLabel = imagePath.split('/').pop()?.split('.')[0].toLowerCase();
                const vggPrediction = data.predicted_class.toLowerCase();

                if (buttonContent.toLowerCase() === trueLabel) {
                    setScore((prevScore) => prevScore + 1);
                }

                if (vggPrediction === trueLabel) {
                    setVggScore((prevScore) => prevScore + 1);
                }

                setPredictedClass(vggPrediction);
                setImageName(imagePath.split('/').pop() || '');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setRefreshKey((prevKey) => prevKey + 1);
    };

    // Clear chosen crop, VGG prediction, and image name after a short delay
    useEffect(() => {
        if (clickedButton || predictedClass || imageName) {
            const timer = setTimeout(() => {
                setClickedButton('');
                setPredictedClass('');
                setImageName('');
            }, 2000); // 2 seconds

            return () => clearTimeout(timer);
        }
    }, [clickedButton, predictedClass, imageName]);

    const isGameOver = score >= maxScore || vggScore >= maxScore;
    const crops = ['jute', 'maize', 'sugarcane', 'rice', 'wheat'];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl bg-gray-800 text-gray-100 rounded-lg shadow-xl overflow-hidden">
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-center mb-6">Crop Guessing Game</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                            {!isGameOver && (
                                <RandomImageDisplay
                                    width={300}
                                    height={300}
                                    refreshKey={refreshKey}
                                    setFilePath={setImageFilePath}
                                />
                            )}
                            <div className="text-center">
                                <p className="text-lg">Current Image: {imageName}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {crops.map((crop) => (
                                <button
                                    key={crop}
                                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-200 text-lg capitalize"
                                    onClick={() => handleButtonClick(crop)}
                                    disabled={isGameOver}
                                >
                                    {crop}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-gray-700 p-6">
                    <div className="w-full space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span>You: {score}</span>
                            <span>VGG16: {vggScore}</span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(score / maxScore) * 100}%` }}></div>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(vggScore / maxScore) * 100}%` }}></div>
                        </div>
                    </div>
                    {clickedButton && <p className="text-lg">You chose: {clickedButton}</p>}
                    {predictedClass && <p className="text-lg">VGG Predicted: {predictedClass}</p>}
                    {isGameOver && (
                        <p className="text-2xl font-bold text-red-500 mt-4">
                            Game Over! {score >= maxScore ? 'You reached 10 points.' : 'VGG16 reached 10 points.'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
