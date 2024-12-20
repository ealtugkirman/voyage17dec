import InteractiveHoverButton from "../ui/interactive-hover-button";

function DevelopmentProcess() {
  return (
    <div className="flex min-h-screen max-w-5xl mx-auto py-32">
      {/* Left side - Fixed */}
      <div className="w-[440px] sticky top-0  h-full p-8 flex flex-col">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">
            Web Development Process
          </h1>
          <p className="text-muted-foreground mb-8">
            It is designed to provide clarity, efficiency, and high quality at
            every stage of the project. Here's how we approach building
            responsive React applications tailored to your business needs.
          </p>

          <InteractiveHoverButton
            className="text-black  w-64 text-md font-base"
            text="Start your project"
          />
        </div>
      </div>

      {/* Right side - Scrollable */}
      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 top-3 bottom-3 w-px bg-border" />

            {/* Steps */}
            <div className="space-y-12">
              <TimelineStep number={1} title="Discovery and planning">
                We start by understanding your vision, business goals, and
                specific project requirements. This involves conducting in-depth
                consultations to gather all necessary information, analyzing the
                feasibility of different technical solutions, and defining an
                efficient technology stack. Based on this, we create a detailed
                project roadmap, including milestones, timelines, and resource
                allocation.
              </TimelineStep>

              <TimelineStep number={2} title="UX/UI design">
                Together with the developers, our design team creates intuitive
                and visually appealing interfaces. We begin with wireframing and
                prototyping to map out the user flow and test usability early.
                Then, we refine the UI into high-fidelity designs that align
                with your branding and accessibility standards. In this phase,
                we maintain feedback loops to iterate and improve based on
                stakeholder input.
              </TimelineStep>

              <TimelineStep number={3} title="Agile development">
                We follow agile methodologies to ensure flexibility and
                responsiveness during React development. Projects are broken
                down into manageable sprints, each with clear goals and
                deliverables. We build and test features iteratively to maintain
                continuous progress and quality, with regular peer code reviews
                and automated testing to prevent issues and ensure consistency.
              </TimelineStep>

              <TimelineStep number={4} title="Launch and optimization">
                At later stages, we prepare your application for deployment,
                ensuring everything runs smoothly. We set up CI/CD pipelines for
                seamless deployments, and perform optimizations to improve
                loading times and responsiveness. Additionally, we conduct
                comprehensive security audits and final testing to detect and
                resolve any vulnerabilities.
              </TimelineStep>

              <TimelineStep number={5} title="Post-launch support and scaling">
                Once your application goes live, we continue to provide support
                and enhancements. This includes ongoing maintenance to keep the
                app stable, proactive monitoring and bug fixes, and implementing
                feature enhancements based on user feedback and evolving
                business needs. As traffic increases, we optimize the structure
                to meet growing demand.
              </TimelineStep>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineStep({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-10">
      {/* Step indicator */}
      <div className="absolute left-0 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      <div>
        <div className="text-sm text-muted-foreground mb-1">Step {number}</div>
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}

export default DevelopmentProcess;
