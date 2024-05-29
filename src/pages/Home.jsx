import React, { useState, useEffect } from "react";
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
function Home() {

    const [dots, setDots] = useState("");
    const [imageIndex, setImageIndex] = useState(1);
    const [imageIndex2, setImageIndex2] = useState(1);


    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -150])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => (prevDots === "..." ? "" : prevDots + "."));
        }, 400); // Adjust the interval duration as needed

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex((prevIndex) => {
                // Reset index to 1 if it reaches 70
                if (prevIndex === 70) {
                    return 1;
                }
                // Increment index
                return prevIndex + 1;
            });
        }, 200); // Adjust the interval duration as needed

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex2((prevIndex) => {
                // Reset index to 1 if it reaches 70
                if (prevIndex === 30) {
                    return 1;
                }
                // Increment index
                return prevIndex + 1;
            });
        }, 200); // Adjust the interval duration as needed

        return () => clearInterval(intervalId);
    }, []);




    return (
        <>
            <header className="md:pt- container relative mb-28 flex flex-col items-center justify-end pt-[360px] font-font-cartograph-cf-demi-bold text-xl lg:mb-52" id="hero">
                <div className="absolute left-1/2 top-[5%] w-full max-w-full -translate-x-1/2 overflow-hidden sm:-top-[5%]">
                    <p className="absolute left-1/2 top-[3%] z-50 w-max -translate-x-1/2 rounded-xl border border-[#667085] bg-dark-violet px-5 py-3 font-font-cartograph-cf-demi-bold text-base uppercase">Launching{dots}</p>
                    <img alt="hero-image" className="relative left-1/2 h-[394px] w-[571px] min-w-[500px] -translate-x-1/2 scale-125" src={`https://xield.io/images/hero-image/00${imageIndex < 10 ? `0${imageIndex}` : imageIndex}.webp`} />
                </div>
                <h1 className="relative z-50 text-center text-3xl uppercase leading-relaxed md:mb-12 md:text-4xl md:leading-snug lg:mb-0 lg:text-5xl">
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                         viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="transition-colors duration-300">Transforming</motion.span>
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                         viewport={{ once: true }}
                        transition={{ delay: 1.5 }}
                        className="transition-colors duration-300"> in-game</motion.span>
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                         viewport={{ once: true }}
                        transition={{ delay: 2 }}
                        className="transition-colors duration-300"> assets</motion.span>
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                         viewport={{ once: true }}
                        transition={{ delay: 2.5 }}
                        className="transition-colors duration-300"> into</motion.span>
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                         viewport={{ once: true }}
                        transition={{ delay: 3 }}
                        className="transition-colors duration-300"> yield</motion.span>
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                         viewport={{ once: true }}
                        transition={{ delay: 3.5 }}
                        className="transition-colors duration-300"> generating</motion.span>
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                         viewport={{ once: true }}
                        transition={{ delay: 4 }}
                        className="transition-colors duration-300"> liquid</motion.span>
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                         viewport={{ once: true }}
                        transition={{ delay: 4.5 }}
                        className="transition-colors duration-300"> assets</motion.span>
                </h1>
            </header>
            <section className="container  relative mb-28  grid h-[1000px] place-content-center overflow-x-clip md:mb-52 lg:h-screen lg:max-h-[800px]" id="highlights">
                <img className="min-w-[400px] opacity-30" src={`https://xield.io/images/highlights/00${imageIndex2 < 10 ? `0${imageIndex2}` : imageIndex2}.png`} />
                <motion.article
                    initial={{
                        y: -400,
                        x: 200,
                        rotate: -20,
                    }}
                    whileInView={{
                        x: 0,
                        y: 0,
                        rotate: -8,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 4, ease: "anticipate" }}
                    className="feature-card absolute flex max-w-[192px] flex-col items-center gap-5 rounded-[20px] border-2 border-[#667085] px-7 py-5 backdrop-blur-lg sm:max-w-[200px] sm:px-7 sm:py-10 md:max-w-[230px] lg:max-w-[250px]  z-50 w-full" style={{ left: "10%", top: "45% ", transform: "translateX(0%) rotate(-8deg) translateZ(0px)" }}>
                    <span className="absolute left-3 top-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]"></span>
                    <span className="absolute right-3 top-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]"></span>
                    <span className="absolute bottom-3 left-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]"></span>
                    <span className="absolute bottom-3 right-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]"></span>
                    <span className="absolute top-0 -translate-y-1/2 rounded-xl border border-[#425471] bg-white/[0.02] px-5 py-3 font-font-cartograph-cf-demi-bold text-sm uppercase text-[#D0D5DD] backdrop-blur-md md:text-base ">Pods</span>
                    <img alt="card-detail" loading="lazy" width="154" height="154" decoding="async" data-nimg="1" className="h-[133px] w-[133px] lg:h-[154px] lg:w-[154px] opacity-100 pointer-events-none transition-opacity" src="https://xield.io/_next/static/media/card_img_one.274f86bb.svg" />
                    <p className="pointer-events-none text-center font-font-cartograph-cf-bold text-sm uppercase sm:text-lg lg:text-xl opacity-100">LIQUID STAKING DERIVATIVES</p>
                    <div className="absolute inset-0 h-full w-full overflow-clip">
                        {/* <div class="absolute inset-0 h-full w-full overflow-clip"> <p class="absolute inset-0 flex h-full w-full items-center justify-center text-balance px-7 text-center text-[10px] capitalize leading-relaxed text-[#98A2B3] md:text-sm" style={{ opacity: 1, transform: "translateY(0%) translateZ(0px)" }}>Transforms static in-game assets into dynamic liquid wealth</p></div> */}
                    </div>
                </motion.article>
                <motion.article
                    initial={{
                        y: -100,
                        x: -200,
                    }}
                    whileInView={{
                        x: "-50%",
                        y: 0,
                        rotate: 15
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 4, ease: "anticipate" }}
                    className="feature-card absolute flex max-w-[192px] flex-col items-center gap-5 rounded-[20px] border-2 border-[#667085] px-7 py-5 backdrop-blur-lg sm:max-w-[200px] sm:px-7 sm:py-10 md:max-w-[230px] lg:max-w-[250px]  z-50 w-full" style={{ left: "50%", top: "5%", transform: "translateX(-50%) rotate(15deg) translateZ(0px)" }}>
                    <span className="absolute left-3 top-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]"></span>
                    <span className="absolute right-3 top-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]"></span>
                    <span className="absolute bottom-3 left-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]"></span>
                    <span className="absolute bottom-3 right-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]"></span>
                    <span className="absolute top-0 -translate-y-1/2 rounded-xl border border-[#425471] bg-white/[0.02] px-5 py-3 font-font-cartograph-cf-demi-bold text-sm uppercase text-[#D0D5DD] backdrop-blur-md md:text-base ">Pools</span>
                    <img alt="card-detail" loading="lazy" width="154" height="154" decoding="async" data-nimg="1" className="h-[133px] w-[133px] lg:h-[154px] lg:w-[154px] opacity-100 pointer-events-none transition-opacity" src="https://xield.io/_next/static/media/card_img_two.ac79c067.svg" />
                    <p className="pointer-events-none text-center font-font-cartograph-cf-bold text-sm uppercase sm:text-lg lg:text-xl opacity-100">Liquidity Aggregation</p>
                    <div className="absolute inset-0 h-full w-full overflow-clip">
                        {/* <p class="absolute inset-0 flex h-full w-full items-center justify-center text-balance px-7 text-center text-[10px] capitalize leading-relaxed text-[#98A2B3] md:text-sm" style={{ opacity: 1, transform: "translateY(0%) translateZ(0px)" }}>enables fluid &amp; interconnected economies by pooling fragmented liquidity</p> */}
                    </div>
                </motion.article>
                <motion.article
                    initial={{
                        y: -500,
                        x: -200,
                        rotate: 20,
                    }}
                    whileInView={{
                        x: 0,
                        y: 0,
                        rotate: -15,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 4, ease: "anticipate" }}
                    className="feature-card absolute flex max-w-[192px] flex-col items-center gap-5 rounded-[20px] border-2 border-[#667085] px-7 py-5 backdrop-blur-lg sm:max-w-[200px] sm:px-7 sm:py-10 md:max-w-[230px] lg:max-w-[250px]  z-50 w-full" style={{ left: "65%", top: "45%", transform: "translateX(0px) rotate(-15deg) translateZ(0px)" }}>
                    <span className="absolute left-3 top-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]">
                    </span>
                    <span className="absolute right-3 top-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]"></span>
                    <span className="absolute bottom-3 left-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]"></span>
                    <span className="absolute bottom-3 right-3 h-[2.5px] w-[2.5px] rounded-full bg-[#D9D9D9]"></span>
                    <span className="absolute top-0 -translate-y-1/2 rounded-xl border border-[#425471] bg-white/[0.02] px-5 py-3 font-font-cartograph-cf-demi-bold text-sm uppercase text-[#D0D5DD] backdrop-blur-md md:text-base ">Oasis</span>
                    <img alt="card-detail" className="h-[133px] w-[133px] lg:h-[154px] lg:w-[154px]  opacity-100  pointer-events-none transition-opacity" src="https://xield.io/_next/static/media/card_img_three.8b93518f.svg" />
                    <p className="pointer-events-none text-center font-font-cartograph-cf-bold text-sm uppercase sm:text-lg lg:text-xl opacity-100">SUPERCHARGED YIELD</p>
                    <div className="absolute inset-0 h-full w-full overflow-clip">
                        {/* <p className="absolute inset-0 flex h-full w-full items-center justify-center text-balance px-7 text-center text-[10px] capitalize leading-relaxed text-[#98A2B3] md:text-sm" style={{ opacity: 1, transform: "translateY(0%) translateZ(0px)" }}>Dynamically allocates resources across various yield-vaults, optimizing returns</p> */}
                    </div>
                </motion.article>
            </section>
            <section
                ref={container}
                className="relative mb-28 min-h-[50px] overflow-clip bg-[#E0E8F6] md:min-h-[100px]" id="launching-soon">
                <motion.div style={{ x: x1 }} className="bg-[#fff] flex w-full items-center gap-6 transition-transform ease-linear">
                    <div class="flex shrink-0 items-center gap-6 px-4 py-4">
                        <h3 class="w-max shrink-0 carto-bold text-4xl uppercase text-[#090B16] md:text-7xl">Launching soon</h3>
                        <img alt="star" className="h-8 w-8 md:h-14 md:w-14" src="https://xield.io/_next/static/media/star.30efb4cd.svg" />
                    </div>
                    <div class="flex shrink-0 items-center gap-6 px-4 py-4">
                        <h3 class="w-max shrink-0 carto-bold text-4xl uppercase text-[#090B16] md:text-7xl">Launching soon</h3>
                        <img alt="star" className="h-8 w-8 md:h-14 md:w-14" src="https://xield.io/_next/static/media/star.30efb4cd.svg" />
                    </div>
                    <div class="flex shrink-0 items-center gap-6 px-4 py-4">
                        <h3 class="w-max shrink-0 carto-bold text-4xl uppercase text-[#090B16] md:text-7xl">Launching soon</h3>
                        <img alt="star" className="h-8 w-8 md:h-14 md:w-14" src="https://xield.io/_next/static/media/star.30efb4cd.svg" />
                    </div>
                    <div class="flex shrink-0 items-center gap-6 px-4 py-4">
                        <h3 class="w-max shrink-0 carto-bold text-4xl uppercase text-[#090B16] md:text-7xl">Launching soon</h3>
                        <img alt="star" className="h-8 w-8 md:h-14 md:w-14" src="https://xield.io/_next/static/media/star.30efb4cd.svg" />
                    </div>
                    <div class="flex shrink-0 items-center gap-6 px-4 py-4">
                        <h3 class="w-max shrink-0 carto-bold text-4xl uppercase text-[#090B16] md:text-7xl">Launching soon</h3>
                        <img alt="star" className="h-8 w-8 md:h-14 md:w-14" src="https://xield.io/_next/static/media/star.30efb4cd.svg" />
                    </div>
                    <div class="flex shrink-0 items-center gap-6 px-4 py-4">
                        <h3 class="w-max shrink-0 carto-bold text-4xl uppercase text-[#090B16] md:text-7xl">Launching soon</h3>
                        <img alt="star" className="h-8 w-8 md:h-14 md:w-14" src="https://xield.io/_next/static/media/star.30efb4cd.svg" />
                    </div>
                    <div class="flex shrink-0 items-center gap-6 px-4 py-4">
                        <h3 class="w-max shrink-0 carto-bold text-4xl uppercase text-[#090B16] md:text-7xl">Launching soon</h3>
                        <img alt="star" className="h-8 w-8 md:h-14 md:w-14" src="https://xield.io/_next/static/media/star.30efb4cd.svg" />
                    </div>
                </motion.div>
            </section>
        </>
    )
}
export default Home
