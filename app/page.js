"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SocialButton = ({ src, alt, delay }) => {
  return (
    <motion.button
      className="inline-flex items-center justify-center p-2 h-10 w-10 md:h-24 md:w-24 border-2 border-black bg-[#feecd0] hover:bg-[#ffe6bd] rounded-full text-white transition-all duration-500 ease-out"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <img src={src} alt={alt} className="inline h-4 w-4 md:h-12 md:w-12 shadow-2xl" />
    </motion.button>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const lastSectionRef = useRef(null);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [animationsComplete, setAnimationsComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: lastSectionProgress } = useScroll({
    target: lastSectionRef,
    offset: ["start end", "end start"]
  });

  const buildingsY = useTransform(scrollYProgress, [0.2, 0.5], ["100%", "0%"]);
  const deadsY = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "0%"]);
  const zombiesYmd = useTransform(lastSectionProgress, [0.2, 0.6], ["100%", "0%"]);
  const zombiesYlg = useTransform(lastSectionProgress, [0.2, 0.6], ["100%", "0%"]);
  const textX = useTransform(scrollYProgress, [0.2, 0.4], ["-100%", "0%"]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.get() > 0.5 && !scrollLocked) {
        setScrollLocked(true);
        document.body.style.overflow = 'hidden';
      }
    };

    const unsubscribe = scrollYProgress.onChange(handleScroll);
    return () => {
      unsubscribe();
      document.body.style.overflow = '';
    };
  }, [scrollYProgress, scrollLocked]);

  useEffect(() => {
    if (animationsComplete) {
      setScrollLocked(false);
      document.body.style.overflow = '';
    }
  }, [animationsComplete]);

  const handleAnimationComplete = () => {
    setAnimationsComplete(true);
  };

  return (
    <div className={`wrapper bg-gray-100 flex-col min-h-screen max-w-full w-full overflow-hidden flex font-comic  ${scrollLocked ? 'overflow-hidden' : ''}`}>
      <div className="text-black z-20 text-[0.72rem] md:text-lg font-bold text-center px-2 border-b-2 border-black py-2">
        CA: AOQ1JQICAQINBBA3AD2JDAPCI09IEWQLSNCWOQLSANCH
      </div>
      <div
        className="w-full h-[300px] md:h-[900px] bg-gray-500 flex items-center justify-center overflow-hidden relative"
        style={{
          backgroundImage: "url('/gif-background.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="z-20 -mt-20 flex gap-x-8 md:gap-x-[10vw]">
          <SocialButton src="/x.png" alt="X" delay={1.6} />
          <SocialButton src="/telegram.png" alt="Telegram" delay={1.7} />
          <div className="h-9 w-9"></div>
          <div className="h-9 w-9"></div>
          <SocialButton src="/facebook.png" alt="Facebook" delay={1.8} />
          <SocialButton src="/instagram.png" alt="Instagram" delay={1.9} />
        </div>
        <motion.div
          className="flex items-center justify-center h-fit w-full absolute bottom-0 z-10"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img src="/snake-with-2-guys.png" className="" alt="Snake with 2 guys" />
        </motion.div>
      </div>

      <div ref={containerRef} className="section2 relative w-full h-fit -mt-1">
        <img className="w-full z-1" src="/sky.png" alt="Sky" />
        <motion.img
          className="w-full z-10 absolute top-0"
          src="/buildings.png"
          alt="Buildings"
          style={{ y: buildingsY }}
          onAnimationComplete={handleAnimationComplete}
        />
        <motion.div 
          className="absolute z-20 top-[10vw] w-full p-4 text-center text-black flex flex-col items-center h-fit justify-center gap-y-4"
          style={{ x: textX }}
        >
          <div className="w-[70vw] text-left text-[5.7vw] font-bold bg-blue-200/20">What is Worm?</div>
          <div className="w-[70vw] text-left text-[2vw] font-semibold flex flex-col gap-y-1 md:gap-y-6 bg-blue-100/40">
            <div className="w-full">Worm is no ordinary memecoin—it's a force that crawls into your mind, subtly influencing your decisions. Once it gets in, you won't be able to resist the urge to buy. Inspired by the uncontrollable cravings we feel in crypto—and beyond.</div>
            <div className="w-[30vw]">Whether you know it or not, Worm is already in your head, guiding you towards the next big move. The question isn't if you'll buy, but when Worm takes control.</div>
          </div>
        </motion.div>
        <motion.img
          className="w-full z-20 absolute top-0"
          src="/deads.png"
          alt="Deads"
          style={{ y: deadsY }}
          onAnimationComplete={handleAnimationComplete}
        />
        <img
          className="w-full z-30 absolute top-0"
          src="/bottom.png"
          alt="Deads"
        />
      </div>
      <div ref={lastSectionRef} className="h-fit w-full z-40 relative">
        <img className="w-full z-1" src="/bg-3.png" alt="Sky" />
        <div className="absolute z-10 w-full h-[27vw] top-[10vw] flex items-center justify-center text-black/90 text-[7.2vw] font-bold">HOW TO BUY?</div>
        <img 
          className="w-full z-20 absolute top-0 md:block lg:hidden"
          src="/zombies.png" 
          alt="Zombies"
         
        />
      
        <img 
          className="absolute w-full h-fit  top-[25vw] z-20"
          src="/light.png" 
          alt="how to buy"
         
        />
      
        <div className="absolute w-full h-[28vw]  top-[50vw] z-30">
        <div className="relative h-full w-full text-black font-alex font-bold">
          <div className="h-full w-[14vw] left-[7.3vw]  absolute text-center text-[1.4vw]  "> DOWNLOAD PHANTOM OR YOUR WALLET OF CHOICE FROM THE APP STORE FOR FREE. DESKTOP USERS, DOWNLOAD THE GOOGLE CHROME EXTENSION BY GIONG TO PHANTOM APP</div>
          <div className="h-full w-[14vw] left-[29.7vw]  absolute text-center text-[1.5vw]"> HAVE SOL IN YOUR WALLET TO SWITCH TO $WOLF IF YOU DON'T HAVE ANY SOL, YOU CAN BUY SOL FROM AN EXCHANGE OR CROSS CHAIN SWAP AND SEND IT TO YOUR WALLET</div>
          <div className="h-full w-[14vw] left-[51.4vw]  absolute text-center text-[1.15vw]" > CONNECT TO RAyDIUm. Go RAyDIum.io IN GOOGLE CHROME OR ON THE BROWSER INSIDE YOUR PHANTOM APP. CONNECT YOUR WALLET. PASTE THE $worm TOKEN ADDRESS INTO RAYDIUM AND CONFIRM THE SWAP. WHEN PHANTOM PROMPTS YOU FOR A WALLET SIGNATURE, SIGN.</div>
          <div className="h-full w-[14vw] left-[75vw] top-[7.5vw]  absolute text-center text-[2.8vw]"> SWITCH SOL FOR $WORM
          </div>
        </div>

        </div>
        
        <motion.img 
          className="w-full z-20 absolute top-0 lg:block md:hidden sm:hidden"
          src="/zombies.png" 
          alt="Zombies"
          style={{ y: zombiesYlg }}
        />
        
      </div>
    </div>
  );
}