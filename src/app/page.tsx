"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import Image from "next/image";

interface Step {
  number: number;
  title: string;
  duration: string;
  description: string;
  image: string | null;
  video: string | null;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Prepare Equipment and Workspace",
    duration: "5 min",
    description:
      "Sterilize all tools and surfaces, verify the complete equipment checklist",
    image: "/images/step-1.png",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/step%200-EUDsvPUOAsZdrbjmyf3xEK2qgl9SiT.mp4",
  },
  {
    number: 2,
    title: "Hand Disinfection",
    duration: "2 min",
    description:
      "Mandatory surgical handwashing, drying with sterile towel",
    image: "/images/step-2.png",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/step%200-EUDsvPUOAsZdrbjmyf3xEK2qgl9SiT.mp4",
  },
  {
    number: 3,
    title: "Skin Preparation",
    duration: "5 min",
    description:
      "Start by thoroughly cleaning the eyebrow area. Remove all makeup, oil, or dirt to have clean skin before beginning.",
    image: "/images/step-3.png",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2814%29%20%28online-video-cutter.com%29-pxYJ8Em18CtnzI3NyoaHMnkpO6aFxM.mp4",
  },
  {
    number: 4,
    title: "Anesthesia",
    duration: "30 min",
    description:
      "Apply a numbing cream to the eyebrows to reduce pain. Leave it on for approximately 30 minutes.",
    image: "/images/step-4.png",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2814%29%20%28online-video-cutter.com%29-pxYJ8Em18CtnzI3NyoaHMnkpO6aFxM.mp4",
  },
  {
    number: 5,
    title: "Taking Measurements",
    duration: "10 min",
    description:
      "Use a white eyebrow pencil or makeup pencil to mark the key reference points. Use an eyebrow ruler (or eyebrow compass) to precisely determine the start, arch, and end of each eyebrow. Measure carefully to ensure perfect symmetry between both eyebrows.",
    image: "/images/step-5.png",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2816%29%20%28online-video-cutter.com%29-0D555SBa04Vwm3y1r16a75F7uNwwNo.mp4",
  },
  {
    number: 6,
    title: "Eyebrow Design",
    duration: "10 min",
    description:
      "Discuss with the client the desired eyebrow shape and thickness. Precisely trace the final eyebrow contour using a specialized pencil. Draw the definitive shape following the reference points established in the previous step. Ensure both eyebrows are perfectly symmetrical before proceeding with microblading.",
    image: "/images/step-6.png",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2816%29%20%28online-video-cutter.com%29-0D555SBa04Vwm3y1r16a75F7uNwwNo.mp4",
  },
  {
    number: 7,
    title: "Start Microblading Strokes",
    duration: "10 min",
    description:
      "Prepare the microblading tool with a sterile blade and pigment matched to the natural eyebrow color. Begin creating fine, precise strokes, mimicking the natural hair growth pattern. Work methodically following the pre-drawn contour, respecting the angle and natural direction of each hair for a realistic result.",
    image: "/images/step-7.png",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre19-ezgif.com-crop-video%20%281%29-O33amVNCF8lMc93bPWPncNXKBQMymR.mp4",
  },
  {
    number: 8,
    title: "First Pigment Application",
    duration: "5 min",
    description:
      "Gently apply the pigment directly onto the freshly created strokes. Use a fine brush or sterilized applicator to work the pigment into each incision. Work methodically to ensure uniform saturation and allow optimal pigment absorption into the skin.",
    image: "/images/step-8.png",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre19-ezgif.com-crop-video%20%281%29-O33amVNCF8lMc93bPWPncNXKBQMymR.mp4",
  },
  {
    number: 9,
    title: "Area Cleaning",
    duration: "3 min",
    description:
      "Gently clean the excess pigment with a cotton swab or soft wipe to reveal the initial result. Use light, precise movements so as not to disturb the freshly created strokes. This step allows you to evaluate the quality of the work and verify eyebrow symmetry before applying the healing cream.",
    image: "/images/step-9.png",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre21-ezgif.com-crop-video-k6uNi4ecTobRYntkaxT8Ne3h6kyv5x.mp4",
  },
  {
    number: 10,
    title: "Touch-ups and Finishing",
    duration: "10 min",
    description:
      "Carefully examine the initial result and make any necessary touch-ups. Add additional strokes in areas lacking density or definition. Refine existing contours to achieve perfect symmetry and a natural appearance. This final step ensures a professional and harmonious result.",
    image: "/images/step-10.png",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre21-ezgif.com-crop-video-k6uNi4ecTobRYntkaxT8Ne3h6kyv5x.mp4",
  },
  {
    number: 11,
    title: "Final Result",
    duration: "",
    description:
      "Here is the final result obtained after the complete microblading protocol application.",
    image: null,
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre23-ezgif.com-crop-video-4EJZlx86JYvSQBBbwbiMRPwd9zWyHW.mp4",
  },
  {
    number: 12,
    title: "Full Video",
    duration: "",
    description:
      "Watch the complete microblading protocol in a single uninterrupted video.",
    image: null,
    video: null,
  },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const step = steps[currentStep];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentStep]);

  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStep(index);
    }
  };

  const reset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-2 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="w-full max-w-7xl mx-auto p-2 md:p-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 bg-clip-text text-transparent">
              Complete Microblading Protocol
            </h1>
          </div>

          <div className="flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm mb-2">
            <span className="bg-purple-100 text-purple-700 px-2 py-0.5 md:px-3 md:py-1 rounded-full font-medium">
              Step {currentStep + 1}/{steps.length}
            </span>
            {step.duration && (
              <span className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-0.5 md:px-3 md:py-1 rounded-full font-medium">
                <Clock className="w-3 h-3" />
                {step.duration}
              </span>
            )}
            <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 md:px-3 md:py-1 rounded-full font-medium">
              <Clock className="w-3 h-3" />
              90 min
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 text-[10px] md:text-xs text-gray-500">
            <span className="bg-white/70 px-2 py-0.5 rounded-full">
              Professional procedure
            </span>
            <span>&#8226;</span>
            <span className="bg-white/70 px-2 py-0.5 rounded-full">
              12 essential steps
            </span>
            <span>&#8226;</span>
            <span className="bg-white/70 px-2 py-0.5 rounded-full">
              Maximum safety
            </span>
            <span>&#8226;</span>
            <span className="bg-white/70 px-2 py-0.5 rounded-full">
              Guaranteed result
            </span>
          </div>
        </motion.div>

        {/* Main Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-3 md:p-6 mb-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Left Panel: Image + Text */}
              <div className="flex flex-col">
                {step.image && (
                  <div className="relative w-full aspect-[4/3] mb-3 md:mb-4 rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                )}

                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">
                  <span className="text-purple-600">
                    Step {step.number}.
                  </span>{" "}
                  {step.title}
                </h2>

                {step.duration && (
                  <div className="flex items-center gap-1 mb-2">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-medium text-purple-600">
                      Duration: {step.duration}
                    </span>
                  </div>
                )}

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Right Panel: Video */}
              <div className="flex flex-col">
                {step.video ? (
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black">
                    <video
                      ref={videoRef}
                      key={step.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      <source src={step.video} type="video/mp4" />
                    </video>
                  </div>
                ) : (
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-500 text-sm">
                        {step.number === 12
                          ? "Full video coming soon"
                          : "No video for this step"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-3">
          {/* Arrow Navigation + Reset */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToStep(currentStep - 1)}
              disabled={currentStep === 0}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={reset}
              className="flex items-center gap-1 px-3 py-2 md:px-4 md:py-2 rounded-full bg-white shadow-md border border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-xs md:text-sm font-medium transition-colors"
            >
              <RotateCcw className="w-3 h-3 md:w-4 md:h-4" />
              Reset
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToStep(currentStep + 1)}
              disabled={currentStep === steps.length - 1}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>

          {/* Step Number Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1 md:gap-1.5">
            {steps.map((s, index) => (
              <motion.button
                key={s.number}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToStep(index)}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${
                  currentStep === index
                    ? "bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-300/50 scale-110"
                    : "bg-white text-purple-700 border border-purple-200 hover:bg-purple-50 hover:border-purple-400 shadow-sm"
                }`}
              >
                {s.number}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
