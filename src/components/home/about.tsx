/* eslint-disable @next/next/no-img-element */
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useRouter } from "next/router";

export const About = () => {
  const router = useRouter();
  return (
    <section id="about" className=" pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="items-center justify-between overflow-hidden border lg:flex">
                <div
                  className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                  style={{ flex: 1 }}
                >
                  <Badge>About Us</Badge>
                  <h2 className="my-6 text-3xl font-bold sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                    Exploring Boundaries, Unleashing Potential
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    At Topological Materials, we&apos;re driven by an unwavering
                    passion for pushing the boundaries of what&apos;s possible.
                    Our story is one of innovation, curiosity, and a relentless
                    pursuit of excellence in the field of materials science.
                  </p>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    We are on a mission to unravel the mysteries of topological
                    materials and harness their unique properties to
                    revolutionize industries and technologies worldwide. With a
                    deep commitment to research, discovery, and collaboration,
                    we aim to accelerate the advancement of topological
                    materials and inspire groundbreaking innovations.
                  </p>
                  <Button onClick={() => router.push("/materials-explorer")}>
                    Start Exploring
                  </Button>
                </div>
                <div className="text-center" style={{ flex: 1 }}>
                  <div className="relative z-10 inline-block">
                    <img
                      src="/scientists.jpg"
                      alt="image"
                      className="mx-auto lg:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
