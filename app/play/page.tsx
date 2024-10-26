export const metadata = {
    title: "Home - Open PRO",
    description: "Page description",
};

import GameInstructions from "@/components/game-instructions";
import PageIllustration from "@/components/page-illustration";
import GameStarted from '@/components/game-started';

export default function Home() {
    return (
        <>
            <PageIllustration/>
            <GameInstructions />



        </>
    );
}
