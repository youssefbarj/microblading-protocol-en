"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RotateCcw, ChevronLeft, ChevronRight, Clock, CheckCircle, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProtocolStep {
  id: number
  title: string
  duration: string
  image: string | null
  video: string | null
  description: string
}

const protocolSteps: ProtocolStep[] = [
  {
    id: 1,
    title: "Prepare Equipment and Workspace",
    duration: "5 min",
    image: "/images/step-1.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/step%200-EUDsvPUOAsZdrbjmyf3xEK2qgl9SiT.mp4",
    description: "Sterilize all tools and surfaces, verify the complete equipment checklist",
  },
  {
    id: 2,
    title: "Hand Disinfection",
    duration: "2 min",
    image: "/images/step-2.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/step%200-EUDsvPUOAsZdrbjmyf3xEK2qgl9SiT.mp4",
    description: "Mandatory surgical handwashing, drying with sterile towel",
  },
  {
    id: 3,
    title: "Skin Preparation",
    duration: "5 min",
    image: "/images/step-3.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2814%29%20%28online-video-cutter.com%29-pxYJ8Em18CtnzI3NyoaHMnkpO6aFxM.mp4",
    description: "Start by thoroughly cleaning the eyebrow area. Remove all makeup, oil, or dirt to have clean skin before beginning.",
  },
  {
    id: 4,
    title: "Anesthesia",
    duration: "30 min",
    image: "/images/step-4.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2814%29%20%28online-video-cutter.com%29-pxYJ8Em18CtnzI3NyoaHMnkpO6aFxM.mp4",
    description: "Apply a numbing cream to the eyebrows to reduce pain. Leave it on for approximately 30 minutes.",
  },
  {
    id: 5,
    title: "Taking Measurements",
    duration: "10 min",
    image: "/images/step-5.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2816%29%20%28online-video-cutter.com%29-0D555SBa04Vwm3y1r16a75F7uNwwNo.mp4",
    description: "Use a white eyebrow pencil or makeup pencil to mark the key reference points. Use an eyebrow ruler (or eyebrow compass) to precisely determine the start, arch, and end of each eyebrow. Measure carefully to ensure perfect symmetry between both eyebrows.",
  },
  {
    id: 6,
    title: "Eyebrow Design",
    duration: "10 min",
    image: "/images/step-6.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%2816%29%20%28online-video-cutter.com%29-0D555SBa04Vwm3y1r16a75F7uNwwNo.mp4",
    description: "Discuss with the client the desired eyebrow shape and thickness. Precisely trace the final eyebrow contour using a specialized pencil. Draw the definitive shape following the reference points established in the previous step. Ensure both eyebrows are perfectly symmetrical before proceeding with microblading.",
  },
  {
    id: 7,
    title: "Start Microblading Strokes",
    duration: "10 min",
    image: "/images/step-7.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre19-ezgif.com-crop-video%20%281%29-O33amVNCF8lMc93bPWPncNXKBQMymR.mp4",
    description: "Prepare the microblading tool with a sterile blade and pigment matched to the natural eyebrow color. Begin creating fine, precise strokes, mimicking the natural hair growth pattern. Work methodically following the pre-drawn contour, respecting the angle and natural direction of each hair for a realistic result.",
  },
  {
    id: 8,
    title: "First Pigment Application",
    duration: "5 min",
    image: "/images/step-8.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre19-ezgif.com-crop-video%20%281%29-O33amVNCF8lMc93bPWPncNXKBQMymR.mp4",
    description: "Gently apply the pigment directly onto the freshly created strokes. Use a fine brush or sterilized applicator to work the pigment into each incision. Work methodically to ensure uniform saturation and allow optimal pigment absorption into the skin.",
  },
  {
    id: 9,
    title: "Area Cleaning",
    duration: "3 min",
    image: "/images/step-9.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre21-ezgif.com-crop-video-k6uNi4ecTobRYntkaxT8Ne3h6kyv5x.mp4",
    description: "Gently clean the excess pigment with a cotton swab or soft wipe to reveal the initial result. Use light, precise movements so as not to disturb the freshly created strokes. This step allows you to evaluate the quality of the work and verify eyebrow symmetry before applying the healing cream.",
  },
  {
    id: 10,
    title: "Touch-ups and Finishing",
    duration: "10 min",
    image: "/images/step-10.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre21-ezgif.com-crop-video-k6uNi4ecTobRYntkaxT8Ne3h6kyv5x.mp4",
    description: "Carefully examine the initial result and make any necessary touch-ups. Add additional strokes in areas lacking density or definition. Refine existing contours to achieve perfect symmetry and a natural appearance. This final step ensures a professional and harmonious result.",
  },
  {
    id: 11,
    title: "Final Result",
    duration: "",
    image: null,
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designsanstitre23-ezgif.com-crop-video-4EJZlx86JYvSQBBbwbiMRPwd9zWyHW.mp4",
    description: "Here is the final result obtained after the complete microblading protocol application.",
  },
  {
    id: 12,
    title: "Full Video",
    duration: "",
    image: null,
    video: null,
    description: "Watch the complete microblading protocol in a single uninterrupted video.",
  },
]

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showMobileDetails, setShowMobileDetails] = useState(false)
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  const handleReset = () => {
    setCurrentStep(0)
    setShowMobileDetails(false)
    setZoomedImage(null)
  }

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex)
    setShowMobileDetails(false)
    setZoomedImage(null)
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setShowMobileDetails(false)
      setZoomedImage(null)
    }
  }

  const handleNext = () => {
    if (currentStep < protocolSteps.length - 1) {
      setCurrentStep(currentStep + 1)
      setShowMobileDetails(false)
      setZoomedImage(null)
    }
  }

  const handleImageZoom = (imageSrc: string) => {
    setZoomedImage(imageSrc)
  }

  const closeZoom = () => {
    setZoomedImage(null)
  }

  const currentStepData = protocolSteps[currentStep]

  return (
    <div className="w-full max-w-7xl mx-auto p-2 md:p-4">
      {/* Theater Mode - Unobstructed Design */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Top Bar - Guide Title */}
        <div className="bg-gradient-to-r from-blue-50 to-violet-50 p-4 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                Complete Microblading Protocol
              </h1>
              <p className="text-sm text-gray-600 max-w-2xl">
                Follow these 12 professional steps to perform a complete microblading session from start to finish.
              </p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl font-bold text-gray-800">{currentStep + 1}/12</span>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                <Clock size={14} className="sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-base font-semibold text-gray-700">90min</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Protocol progress</span>
              <span className="text-sm font-bold text-gray-800">
                {Math.round(((currentStep + 1) / protocolSteps.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#000435] to-[#CF9FFF] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / protocolSteps.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        {/* Navigation Controls - Above content for better UX */}
        <div className="px-2 md:px-4 py-3 bg-gradient-to-r from-blue-50 to-violet-50 border-b border-gray-100">
          {/* Top Row - Navigation Buttons */}
          <div className="flex justify-center items-center mb-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                variant="outline"
                size="default"
                className="px-3 py-2 sm:px-4 sm:py-3 bg-[#000435] bg-gradient-to-r from-[#000435] to-[#CF9FFF] text-white border-none hover:from-[#000435]/90 hover:to-[#CF9FFF]/90 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base shadow-lg disabled:opacity-30"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
              </Button>

              <span className="text-sm font-semibold text-gray-700 px-2 hidden sm:block">
                Step {currentStep + 1} of {protocolSteps.length}
              </span>

              <Button
                onClick={handleNext}
                disabled={currentStep === protocolSteps.length - 1}
                variant="outline"
                size="default"
                className="px-3 py-2 sm:px-4 sm:py-3 bg-[#000435] bg-gradient-to-r from-[#000435] to-[#CF9FFF] text-white border-none hover:from-[#000435]/90 hover:to-[#CF9FFF]/90 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base shadow-lg disabled:opacity-30"
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5" />
              </Button>

              <Button
                onClick={handleReset}
                variant="outline"
                size="default"
                className="px-3 py-2 sm:px-4 sm:py-3 bg-white border-gray-300 hover:bg-gray-50 text-sm sm:text-base shadow-md"
              >
                <RotateCcw size={16} className="sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>

          {/* Bottom Row - Step Indicators */}
          <div className="flex justify-center">
            <div className="flex gap-1 md:gap-2 flex-wrap justify-center max-w-full">
              {protocolSteps.map((step, index) => (
                <motion.button
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={`relative w-6 h-6 md:w-7 md:h-7 rounded-full transition-all duration-300 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    index === currentStep
                      ? "bg-[#000435] bg-gradient-to-r from-[#000435] to-[#CF9FFF] text-white shadow-xl scale-110"
                      : index < currentStep
                        ? "bg-green-400 text-white shadow-lg"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                  whileHover={{ scale: index === currentStep ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs">{index + 1}</span>

                  {/* Checkmark for Completed Steps */}
                  {index < currentStep && (
                    <motion.div
                      className="absolute -top-1 -right-1 bg-green-600 rounded-full p-0.5 z-20 shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <CheckCircle size={6} className="w-2 h-2 text-white" />
                    </motion.div>
                  )}

                  {/* Current Step Indicator */}
                  {index === currentStep && (
                    <motion.div
                      className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 z-20 shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-1 h-1 bg-gradient-to-r from-[#000435] to-[#CF9FFF] rounded-full animate-pulse" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-2 md:p-4">
          {/* Left Side - Step Title (Hidden on mobile, visible on md and up) */}
          <div className="md:col-span-3 hidden md:flex flex-col justify-center">
            <motion.div
              key={`title-${currentStep}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-4 md:p-6 shadow-lg mb-4 md:mb-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-3 text-center md:text-left">
                {currentStepData.title}
              </h2>
              {currentStepData.duration && (
                <div className="flex justify-center md:justify-start mb-3">
                  <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-[#000435] bg-gradient-to-r from-[#000435] to-[#CF9FFF] text-white rounded-full text-sm md:text-base font-bold">
                    {currentStepData.duration}
                  </span>
                </div>
              )}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center md:text-left">
                {currentStepData.description}
              </p>
            </motion.div>
          </div>

          {/* Center - Main Visual (Order changed for mobile) */}
          <div className="md:col-span-9 order-first md:order-none">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStepData.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-80 sm:h-96 md:h-[36rem] bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl overflow-hidden shadow-lg"
                >
                  {currentStepData.video ? (
                    <video
                      key={currentStepData.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={currentStepData.video} type="video/mp4" />
                    </video>
                  ) : currentStepData.image ? (
                    <div
                      className="w-full h-full cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => handleImageZoom(currentStepData.image!)}
                    >
                      <Image
                        src={currentStepData.image}
                        alt={currentStepData.title}
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-gray-500 text-sm">No media available</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile-only collapsible section */}
        <div className="md:hidden bg-white mx-2 mb-2 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4">
            {/* Step title and duration */}
            <div className="text-center mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{currentStepData.title}</h2>
              {currentStepData.duration && (
                <span className="inline-block px-4 py-2 bg-[#000435] bg-gradient-to-r from-[#000435] to-[#CF9FFF] text-white rounded-full text-sm font-bold">
                  {currentStepData.duration}
                </span>
              )}
            </div>

            {/* Collapsible details */}
            <div className="border-t border-gray-100 pt-3">
              <button
                onClick={() => setShowMobileDetails(!showMobileDetails)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-700">View details</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${showMobileDetails ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {showMobileDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-3 space-y-4">
                      {currentStepData.image && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Reference illustration</h4>
                          <div
                            className="relative w-full h-64 bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => handleImageZoom(currentStepData.image!)}
                          >
                            <Image
                              src={currentStepData.image}
                              alt={`${currentStepData.title} illustration`}
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {currentStepData.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeZoom}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeZoom}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              >
                <X size={24} className="text-gray-700" />
              </button>
              <div className="w-full h-full p-4">
                <Image
                  src={zoomedImage || "/placeholder.svg"}
                  alt="Zoomed illustration"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
