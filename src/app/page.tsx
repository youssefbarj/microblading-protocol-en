"use client";

import { useState } from "react";
import {
  Clock,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
  Shield,
  Sparkles,
  ClipboardList,
  Users,
  Search,
  Ruler,
  ThumbsUp,
  Palette,
  PenTool,
  Droplets,
  Layers,
  Package,
  Sparkle,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
  duration: number;
  description: string;
  details: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Prepare materials and workspace",
    duration: 5,
    description:
      "Sterilize all tools and surfaces, verify complete equipment checklist",
    details:
      "Ensure the treatment room is sanitized according to health regulations. Lay out all necessary tools including microblading pen, blades, pigments, numbing cream, measuring tools, cotton pads, and aftercare products. Verify autoclave sterilization of reusable instruments. Set up a clean, organized workstation with proper lighting. Confirm sharps disposal container is accessible.",
    icon: <ClipboardList className="w-5 h-5" />,
  },
  {
    number: 2,
    title: "Client consultation and consent",
    duration: 10,
    description:
      "Review medical history, discuss expectations, obtain signed consent form",
    details:
      "Conduct a thorough consultation covering the client's medical history, allergies, medications (especially blood thinners), skin conditions, and previous cosmetic procedures. Discuss realistic expectations, potential risks, healing process, and touch-up requirements. Review contraindications including pregnancy, active skin infections, or autoimmune disorders. Obtain a signed informed consent form and take before photos for documentation.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    number: 3,
    title: "Skin analysis and preparation",
    duration: 5,
    description:
      "Evaluate skin type, cleanse the area, apply numbing cream",
    details:
      "Analyze the client's skin type (oily, dry, combination, sensitive) as this affects pigment retention and technique selection. Cleanse the brow area thoroughly with a gentle antiseptic solution. Apply a topical numbing cream (typically containing lidocaine) to the treatment area and allow 20-30 minutes for full effect. Cover with plastic wrap to enhance absorption. Assess skin tone and undertone for pigment matching.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    number: 4,
    title: "Proportional mapping",
    duration: 15,
    description:
      "Use golden ratio measurements to define eyebrow shape, symmetry, and arch points",
    details:
      "Using a golden ratio caliper or measuring tools, identify the key landmark points: the brow head (aligned with the bridge of the nose), the arch (aligned with the outer edge of the iris), and the tail (aligned with the outer corner of the eye and nostril). Mark these reference points with a brow pencil. Draw the complete brow outline considering the client's natural bone structure, face shape, and muscle movement. Ensure bilateral symmetry by measuring from multiple facial reference points.",
    icon: <Ruler className="w-5 h-5" />,
  },
  {
    number: 5,
    title: "Shape validation with client",
    duration: 5,
    description:
      "Present the mapped design to client for approval, make adjustments as needed",
    details:
      "Have the client sit upright and examine the mapped design from multiple angles using a mirror. Discuss any adjustments to thickness, arch height, tail length, or overall shape. Make modifications as requested while maintaining proper proportional guidelines. Ensure the client is fully satisfied before proceeding, as this is the last opportunity for shape changes. Take a photo of the approved design for reference during the procedure.",
    icon: <ThumbsUp className="w-5 h-5" />,
  },
  {
    number: 6,
    title: "Pigment selection",
    duration: 5,
    description:
      "Choose pigment color based on skin tone, hair color, and desired result",
    details:
      "Select pigment considering the client's natural hair color, skin tone, and undertone. For cool skin tones, use pigments with a slight warm base to prevent the healed result from appearing gray or blue. For warm skin tones, select neutral to slightly cool pigments. Mix custom colors if needed. Perform a small patch test if there's any concern about sensitivity. Consider that pigment typically heals 30-40% lighter than the initial application. Document the exact pigment formula used.",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    number: 7,
    title: "First pass \u2014 hair strokes",
    duration: 15,
    description:
      "Create initial hair-like incisions following the mapped pattern, maintaining consistent depth",
    details:
      "Using a sterile microblading blade, create fine hair-like incisions within the mapped outline. Work in the direction of natural hair growth, maintaining consistent pressure and depth (approximately 0.25mm into the epidermis). Begin with the body of the brow, then work toward the head and tail. Use short, precise strokes that mimic natural hair patterns. Maintain even spacing between strokes. Wipe excess pigment periodically to monitor stroke quality and pattern consistency.",
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    number: 8,
    title: "Pigment application",
    duration: 5,
    description:
      "Apply pigment over incisions, allow saturation for optimal color deposit",
    details:
      "Generously apply the selected pigment over the freshly created incisions using a microbrush or cotton applicator. Gently work the pigment into the strokes using a patting motion. Allow the pigment to saturate for 2-3 minutes to ensure optimal color deposit into the incisions. The open channels created by the blade will absorb the pigment. Monitor for any unusual reactions during this stage. Blot excess pigment carefully.",
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    number: 9,
    title: "Second pass \u2014 refinement",
    duration: 10,
    description:
      "Add density strokes and refine the pattern for natural appearance",
    details:
      "Apply additional numbing agent if needed. Perform a second pass over the brows, adding strokes between the initial ones to build density and dimension. Focus on areas that may need more definition, such as the arch or sparse sections. Refine the overall pattern to achieve a natural, three-dimensional appearance. This pass deepens the color and ensures even pigment distribution. Compare both brows for symmetry and make any final balancing adjustments.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    number: 10,
    title: "Final pigment saturation",
    duration: 5,
    description:
      "Final pigment application and saturation under plastic wrap",
    details:
      "Apply a final coat of pigment over both brows. Cover with plastic wrap to create an occlusive environment that enhances pigment absorption. Allow the pigment to sit for 3-5 minutes. This final saturation step ensures maximum color retention during the healing process. The warmth from the plastic wrap helps open the pores slightly for better pigment deposit. Monitor timing carefully to avoid over-saturation.",
    icon: <Package className="w-5 h-5" />,
  },
  {
    number: 11,
    title: "Cleanup and assessment",
    duration: 5,
    description:
      "Gently clean the area, assess symmetry and color, apply healing balm",
    details:
      "Remove the plastic wrap and gently clean the treated area with a damp cotton pad using distilled water or saline solution. Remove all excess pigment from the skin surface. Assess the final result for symmetry, color evenness, and stroke definition. Apply a thin layer of healing balm or aftercare ointment as recommended. Take final after photos for documentation and comparison. Allow the client to view the results and address any immediate concerns.",
    icon: <Sparkle className="w-5 h-5" />,
  },
  {
    number: 12,
    title: "Aftercare instructions",
    duration: 5,
    description:
      "Provide written aftercare guide, schedule touch-up appointment, answer client questions",
    details:
      "Provide the client with a detailed written aftercare guide covering: keeping the area dry for 7-10 days, avoiding sun exposure, not picking at scabs, applying recommended ointment, and avoiding makeup on the treated area during healing. Explain the healing timeline (scabbing, flaking, color fading and settling over 4-6 weeks). Schedule a touch-up appointment for 6-8 weeks later. Answer all client questions thoroughly and provide emergency contact information.",
    icon: <FileText className="w-5 h-5" />,
  },
];

const TOTAL_DURATION = steps.reduce((sum, step) => sum + step.duration, 0);

export default function Home() {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(
    new Set()
  );
  const [activeStep, setActiveStep] = useState<number>(1);

  const toggleExpanded = (stepNumber: number) => {
    setExpandedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepNumber)) {
        next.delete(stepNumber);
      } else {
        next.add(stepNumber);
      }
      return next;
    });
  };

  const toggleCompleted = (stepNumber: number) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepNumber)) {
        next.delete(stepNumber);
      } else {
        next.add(stepNumber);
      }
      return next;
    });
  };

  const progressPercentage = (completedSteps.size / steps.length) * 100;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a0533 0%, #2d1b69 30%, #4a1a6b 50%, #1e3a5f 80%, #162447 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-300" />
            <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">
              Professional Esthetician Guide
            </span>
            <Sparkles className="w-6 h-6 text-purple-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Complete Microblading Protocol
          </h1>
          <p className="text-purple-200/80 text-lg mb-8">
            Professional procedure &bull; 12 essential steps &bull; Maximum
            safety &bull; Guaranteed result
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-purple-300" />
              <span className="text-white font-medium">
                Total duration: {TOTAL_DURATION} min
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-purple-300" />
              <span className="text-white font-medium">
                {steps.length} steps
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-medium">
                {completedSteps.size} completed
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Step Navigation */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-1 mb-3 overflow-x-auto pb-1">
            {steps.map((step) => (
              <button
                key={step.number}
                onClick={() => {
                  setActiveStep(step.number);
                  document
                    .getElementById(`step-${step.number}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className={cn(
                  "flex-shrink-0 w-9 h-9 rounded-full text-sm font-semibold transition-all duration-200",
                  completedSteps.has(step.number)
                    ? "bg-emerald-500 text-white"
                    : activeStep === step.number
                    ? "bg-[var(--primary)] text-white shadow-lg shadow-purple-500/25"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                )}
              >
                {completedSteps.has(step.number) ? (
                  <CheckCircle2 className="w-4 h-4 mx-auto" />
                ) : (
                  step.number
                )}
              </button>
            ))}
          </div>
          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progressPercentage}%`,
                background:
                  "linear-gradient(90deg, #4a1a6b, #7c3aed, #10b981)",
              }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-400">
              {completedSteps.size} of {steps.length} steps completed
            </span>
            <span className="text-xs text-gray-400">
              {Math.round(progressPercentage)}%
            </span>
          </div>
        </div>
      </div>

      {/* Steps */}
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-4">
        {steps.map((step) => {
          const isExpanded = expandedSteps.has(step.number);
          const isCompleted = completedSteps.has(step.number);

          return (
            <div
              key={step.number}
              id={`step-${step.number}`}
              className={cn(
                "bg-white rounded-xl border transition-all duration-300",
                isCompleted
                  ? "border-emerald-200 shadow-sm"
                  : activeStep === step.number
                  ? "border-purple-200 shadow-md shadow-purple-500/5"
                  : "border-gray-200 shadow-sm"
              )}
            >
              <div className="p-5">
                <div className="flex items-start gap-4">
                  {/* Step number + complete toggle */}
                  <button
                    onClick={() => toggleCompleted(step.number)}
                    className="flex-shrink-0 mt-0.5"
                    title={
                      isCompleted ? "Mark as incomplete" : "Mark as complete"
                    }
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    ) : (
                      <Circle className="w-8 h-8 text-gray-300 hover:text-purple-400 transition-colors" />
                    )}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold",
                          isCompleted
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-purple-50 text-purple-700"
                        )}
                      >
                        {step.icon}
                        Step {step.number}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3.5 h-3.5" />
                        {step.duration} min
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "text-lg font-semibold mb-1",
                        isCompleted
                          ? "text-emerald-800 line-through decoration-emerald-300"
                          : "text-gray-900"
                      )}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Expand/Collapse */}
                    <button
                      onClick={() => toggleExpanded(step.number)}
                      className="mt-3 flex items-center gap-1.5 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Hide details
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          View details
                        </>
                      )}
                    </button>

                    {/* Expanded details */}
                    {isExpanded && (
                      <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-sm text-gray-400">
            Complete Microblading Protocol &mdash; Professional Esthetician
            Training Guide
          </p>
        </div>
      </main>
    </div>
  );
}
