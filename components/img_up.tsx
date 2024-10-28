"use client";

import { useState } from "react";

export default function Img_up() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [prediction, setPrediction] = useState<string | null>(null);

    // Function to handle file input change
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            setPrediction(null); // Clear any previous prediction
        }
    };

    // Function to handle image upload and model prediction
    const handleUploadClick = async () => {
        if (!selectedImage) {
            alert("Please select an image first.");
            return;
        }

        // Create a FormData object to send the image to the server
        const formData = new FormData();
        formData.append("file", selectedImage); // Change "image" to "file" to match the Flask API

        try {
            // Call your model's API endpoint
            const response = await fetch("http://localhost:5000/demo", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                setPrediction(result.predicted_class); // Set the predicted class
            } else {
                console.error("Prediction failed.");
            }
        } catch (error) {
            console.error("An error occurred while uploading the image:", error);
        }
    };

    // Function to handle canceling the upload
    const handleCancel = () => {
        setSelectedImage(null); // Clear selected image
        setPrediction(null); // Clear previous prediction
    };

    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="pb-12 text-center md:pb-20">
                        <h1
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                            data-aos="fade-up"
                        >
                            Image Classification of Agricultural Crops Using VGG16
                        </h1>
                        <div className="mx-auto max-w-3xl">
                            <p
                                className="mb-8 text-xl text-indigo-200/65"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                Demo
                            </p>
                            <p
                                className="mb-8 text-xl text-indigo-200/65"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                Upload an image and let our model predict its nature.
                            </p>

                            {/* File Input */}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                                id="upload-input"
                            />

                            {!selectedImage ? (
                                <label
                                    htmlFor="upload-input"
                                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto cursor-pointer"
                                >
                                    <span className="relative inline-flex items-center">
                                        Upload the image
                                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                            -&gt;
                                        </span>
                                    </span>
                                </label>
                            ) : (
                                <>
                                    {/* Show the uploaded image */}
                                    <div className="mt-4">
                                        <img
                                            src={URL.createObjectURL(selectedImage)}
                                            alt="Uploaded"
                                            className="mx-auto w-full max-w-xs rounded"
                                        />
                                    </div>
                                    {/* Predict Button */}
                                    <button
                                        onClick={handleUploadClick}
                                        className="mt-4 btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                                    >
                                        Predict
                                    </button>
                                    {/* Cancel Button */}
                                    <button
                                        onClick={handleCancel}
                                        className="mt-2 btn group mb-4 w-full bg-gray-400 text-white shadow sm:mb-0 sm:w-auto"
                                    >
                                        Cancel
                                    </button>
                                </>
                            )}

                            {prediction && (
                                <div className="mt-4 text-lg text-white">
                                    <p>Prediction: {prediction}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
