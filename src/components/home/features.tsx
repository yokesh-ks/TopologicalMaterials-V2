import { Icon } from "@/icon";

const featuresData = [
  {
    iconName: "PackageSearch",
    title: "Discover Novel Wonders",
    description:
      "Explore materials with remarkable electronic properties that challenge the boundaries of what's possible in technology and science.",
  },
  {
    iconName: "Crown",
    title: "Design Tomorrow's Innovations",
    description:
      "Create and simulate your own topological materials, shaping the future of electronics, quantum computing, and energy solutions.",
  },
  {
    iconName: "Microscope",
    title: "Empower Your Research",
    description:
      "Whether you're a scientist, engineer, or simply curious, our tools and resources are here to fuel your passion for discovery.",
  },
  {
    iconName: "Users",
    title: "Join a Global Community",
    description:
      "Connect with fellow enthusiasts, researchers, and experts in the field, and be part of the cutting-edge materials revolution.",
  },
];

export const Features = () => {
  return (
    <section className="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 max-w-[620px] lg:mb-20">
              <span className="mb-2 block text-lg font-semibold">Features</span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                Engage with the Future Today.
              </h2>
              <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                Our Topological Materials Explorer awaits your curiosity. Join
                us on this extraordinary journey as we redefine what&apos;s
                possible with materials. Ready to explore the limitless
                potential of topological materials?
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {featuresData.map((item, index) => (
            <div className="w-full px-4 md:w-1/2 lg:w-1/4" key={index}>
              <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
                <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                  <Icon
                    name={item?.iconName || "Microscope"}
                    className="w-[32px] h-[32px] text-primary-foreground"
                  />
                </div>
                <h4 className="mb-3 text-xl font-bold text-dark">
                  {item.title}
                </h4>
                <p className="mb-8 text-body-color lg:mb-11">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
