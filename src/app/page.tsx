"use client";

import { useState, useRef, useEffect } from "react";
import { Clock, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
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
    description: "Sterilize all tools and surfaces, verify the complete equipment checklist",
    image: "/images/step-1.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/step%200-EUDsvPUOAsZdrbjmyf3xEK2qgl9SiT.mp4",
  },
  {
    number: 2,
    title: "Hand Disinfection",
    duration: "2 min",
    description: "Mandatory surgical handwashing, drying with sterile towel",
    image: "/images/step-2.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/step%200-EUDsvPUOAsZdrbjmyf3xEK2qgl9SiT.mp4",
  },
  {
    number: 3,
    title: "Skin Preparation",
    duration: "5 min",
    description: "Start by thoroughly cleaning the eyebrow area. Remove all makeup, oil, or dirt to have clean skin before beginning.",
    image: "/images/step-3.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2814%29%20%28online-video-cutter.com%29-pxYJ8Em18CtnzI3NyoaHMnkpO6aFxM.mp4",
  },
  {
    number: 4,
    title: "Anesthesia",
    duration: "30 min",
    description: "Apply a numbing cream to the eyebrows to reduce pain. Leave it on for approximately 30 minutes.",
    image: "/images/step-4.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2814%29%20%28online-video-cutter.com%29-pxYJ8Em18CtnzI3NyoaHMnkpO6aFxM.mp4",
  },
  {
    number: 5,
    title: "Taking Measurements",
    duration: "10 min",
    description: "Use a white eyebrow pencil or makeup pencil to mark the key reference points. Use an eyebrow ruler (or eyebrow compass) to precisely determine the start, arch, and end of each eyebrow. Measure carefully to ensure perfect symmetry between both eyebrows.",
    image: "/images/step-5.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2816%29%20%28online-video-cutter.com%29-0D555SBa04Vwm3y1r16a75F7uNwwNo.mp4",
  },
  {
    number: 6,
    title: "Eyebrow Design",
    duration: "10 min",
    description: "Discuss with the client the desired eyebrow shape and thickness. Precisely trace the final eyebrow contour using a specialized pencil. Draw the definitive shape following the reference points established in the previous step. Ensure both eyebrows are perfectly symmetrical before proceeding with microblading.",
    image: "/images/step-6.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2816%29%20%28online-video-cutter.com%29-0D555SBa04Vwm3y1r16a75F7uNwwNo.mp4",
  },
  {
    number: 7,
    title: "Start Microblading Strokes",
    duration: "10 min",
    description: "Prepare the microblading tool with a sterile blade and pigment matched to the natural eyebrow color. Begin creating fine, precise strokes, mimicking the natural hair growth pattern. Work methodically following the pre-drawn contour, respecting the angle and natural direction of each hair for a realistic result.",
    image: "/images/step-7.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre19-ezgif.com-crop-video%20%281%29-O33amVNCF8lMc93bPWPncNXKBQMymR.mp4",
  },
  {
    number: 8,
    title: "First Pigment Application",
    duration: "5 min",
    description: "Gently apply the pigment directly onto the freshly created strokes. Use a fine brush or sterilized applicator to work the pigment into each incision. Work methodically to ensure uniform saturation and allow optimal pigment absorption into the skin.",
    image: "/images/step-8.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre19-ezgif.com-crop-video%20%281%29-O33amVNCF8lMc93bPWPncNXKBQMymR.mp4",
  },
  {
    number: 9,
    title: "Area Cleaning",
    duration: "3 min",
    description: "Gently clean the excess pigment with a cotton swab or soft wipe to reveal the initial result. Use light, precise movements so as not to disturb the freshly created strokes. This step allows you to evaluate the quality of the work and verify eyebrow symmetry before applying the healing cream.",
    image: "/images/step-9.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre21-ezgif.com-crop-video-k6uNi4ecTobRYntkaxT8Ne3h6kyv5x.mp4",
  },
  {
    number: 10,
    title: "Touch-ups and Finishing",
    duration: "10 min",
    description: "Carefully examine the initial result and make any necessary touch-ups. Add additional strokes in areas lacking density or definition. Refine existing contours to achieve perfect symmetry and a natural appearance. This final step ensures a professional and harmonious result.",
    image: "/images/step-10.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre21-ezgif.com-crop-video-k6uNi4ecTobRYntkaxT8Ne3h6kyv5x.mp4",
  },
  {
    number: 11,
    title: "Final Result",
    duration: "",
    description: "Here is the final result obtained after the complete microblading protocol application.",
    image: null,
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre23-ezgif.com-crop-video-4EJZlx86JYvSQBBbwbiMRPwd9zWyHW.mp4",
  },
  {
    number: 12,
    title: "Full Video",
    duration: "",
    description: "Watch the complete microblading protocol in a single uninterrupted video.",
    image: null,
    video: null,
  },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentStep]);

  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.length) setCurrentStep(index);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-2 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="w-full max-w-7xl mx-auto p-2 md:p-4">
        {/* Big white card — everything inside */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* ── Header ── */}
          <div className="bg-gradient-to-r from-blue-50 to-violet-50 p-4 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
              {/* Left: title + chips */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  Complete Microblading Protocol
                </h1>
                <div className="flex flex-wrap items-center gap-1 text-[10px] md:text-xs text-gray-500">
                  <span>Professional procedure</span>
                  <span>•</span>
                  <span>12 essential steps</span>
                  <span>•</span>
                  <span>Maximum safety</span>
                  <span>•</span>
                  <span>Guaranteed result</span>
                </div>
              </div>
              {/* Right: counter + clock */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-2xl md:text-3xl font-bold text-gray-800">
                  {currentStep + 1}/{steps.length}
                </span>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>90min</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Content: 9-column grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-9 gap-4 p-2 md:p-4">
            {/* Left panel: illustration + info (4 cols) */}
            <div className="md:col-span-4 hidden md:flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
                {step.image && (
                  <div className="flex justify-center mb-4">
                    <Image
                      src={step.image}
                      alt={`${step.title} illustration`}
                      width={280}
                      height={220}
                      className="rounded-xl object-contain max-h-[220px]"
                      priority
                    />
                  </div>
                )}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-3 text-center md:text-left">
                  {step.title}
                </h2>
                {step.duration && (
                  <div className="flex justify-center md:justify-start mb-3">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                )}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center md:text-left">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Right panel: video (5 cols, first on mobile) */}
            <div className="md:col-span-5 order-first md:order-none">
              <div className="relative">
                {step.video ? (
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-lg">
                    <video
                      ref={videoRef}
                      key={step.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={step.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 aspect-video flex items-center justify-center shadow-lg">
                    <p className="text-gray-500 text-sm">No video available</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile-only: info card below video */}
          <div className="md:hidden bg-white mx-2 mb-2 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4">
              {step.image && (
                <div className="flex justify-center mb-3">
                  <Image
                    src={step.image}
                    alt={`${step.title} illustration`}
                    width={200}
                    height={160}
                    className="rounded-xl object-contain max-h-[160px]"
                  />
                </div>
              )}
              <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {step.title}
              </h2>
              {step.duration && (
                <div className="flex justify-center mb-2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
              )}
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                {step.description}
              </p>
            </div>
          </div>

          {/* ── Navigation footer ── */}
          <div className="bg-gradient-to-r from-blue-50 to-violet-50 p-3 md:p-4 border-t border-gray-100">
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 mb-3 md:mb-4">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 md:h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Arrow buttons */}
            <div className="flex justify-center gap-3 md:gap-4 mb-3 md:mb-4">
              <button
                onClick={() => goToStep(currentStep - 1)}
                disabled={currentStep === 0}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-purple-50 disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={() => setCurrentStep(0)}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-red-50 transition-colors"
              >
                <RotateCcw className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={() => goToStep(currentStep + 1)}
                disabled={currentStep === steps.length - 1}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-purple-50 disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Step number buttons */}
            <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
              {steps.map((s, index) => (
                <button
                  key={s.number}
                  onClick={() => goToStep(index)}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${
                    currentStep === index
                      ? "bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg scale-110"
                      : index < currentStep
                      ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                      : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {s.number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
