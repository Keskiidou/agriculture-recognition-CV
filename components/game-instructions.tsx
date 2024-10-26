"use client";

import { useState } from 'react';
import GameStarted from '@/components/game-started';
import RandomImageDisplay from './generate-images';

export default function GameInstructions() {
    const [isGameStarted, setIsGameStarted] = useState(false);

    const handleStartGame = () => {
        setIsGameStarted(true);
    };

    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 md:py-20">


                    {!isGameStarted && (
                        <div className="pb-12 text-center md:pb-20">
                            <h1
                                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                                data-aos="fade-up"
                            >
                                AI-driven tools for product teams
                            </h1>
                            <div className="mx-auto max-w-3xl">
                                <p
                                    className="mb-8 text-xl text-indigo-200/65"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    Challenge VGG16 in a game in which we will generate agriculture images.
                                    The first who gets to 10 points wins.
                                </p>
                                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                                    <div data-aos="fade-up" data-aos-delay={400}>
                                        <button
                                            className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                                            onClick={handleStartGame}
                                            aria-label="Start Playing"
                                        >
                                            <span className="relative inline-flex items-center">
                                                Start Playing
                                                <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                                    -&gt;
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {isGameStarted && <GameStarted />}

                </div>
            </div>
        </section>
    );
}
