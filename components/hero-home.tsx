import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="py-12 md:py-20">
            {/* Section header */}
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
                </p>
                <p
                    className="mb-8 text-xl text-indigo-200/65"
                    data-aos="fade-up"
                    data-aos-delay={400}
                >
                  This project aims to develop a robust AI model capable of classifying five major agricultural crops: wheat, rice, sugarcane, maize, and jute. Using a dataset of over 40 images per crop, which is further augmented to include 159 images per class through techniques such as horizontal flipping, rotation, and translation, we leverage the power of transfer learning with the VGG16 model.
                </p>
                <p
                    className="mb-8 text-xl text-indigo-200/65"
                    data-aos="fade-up"
                    data-aos-delay={600}
                >
                  The methodology includes data exploration to understand the dataset structure, preprocessing of images for optimal model input, and the creation of a convolutional neural network (CNN) using the VGG16 architecture.The model is trained and validated to ensure high accuracy and performance, with results presented through confusion matrices and ROC curves.
                </p>
                <p
                    className="mb-8 text-xl text-indigo-200/65"
                    data-aos="fade-up"
                    data-aos-delay={800}
                >
                  The final outcome will not only provide insights into agricultural crop classification but also offer a web-based application for users to upload images and receive instant predictions.
                </p>
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                  <div data-aos="fade-up" data-aos-delay={1000}>
                    <a
                        className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                        href="#0"
                    >
                    <span className="relative inline-flex items-center">
                      Play vs VGG16
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                    </a>
                  </div>
                  <div data-aos="fade-up" data-aos-delay={1200}>
                    <a
                        className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                        href="/Demo"
                    >
                      Try our Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
