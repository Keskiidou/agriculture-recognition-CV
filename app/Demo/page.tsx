export const metadata = {
    title: "Home - Open PRO",
    description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Img_up from "@/components/img_up";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Demo() {
    return (
        <>
            <PageIllustration />
            <Img_up/>
        </>
    );
}
