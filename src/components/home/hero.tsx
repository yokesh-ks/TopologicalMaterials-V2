import { useRouter } from "next/router";
import { Button } from "../ui/button";

export const Hero = () => {
  const router = useRouter();
  return (
    <div
      id="home"
      className="relative overflow-hidden pt-[120px] md:pt-[100px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-8 text-3xl font-bold leading-snug sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">
                Unleash the Power of Topological Materials
              </h1>
              <p className="mx-auto mb-10 max-w-[720px] text-base  sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
                Welcome to the future of materials science. Our Topological
                Materials Explorer invites you to a realm where materials defy
                convention, opening doors to unprecedented possibilities. With
                supercomputing and cutting-edge research, we're pioneering a
                journey into the world of topological materials, where
                innovation knows no bounds.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center">
                <Button onClick={() => router.push("/materials-explorer")}>
                  Start Exploring
                </Button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
