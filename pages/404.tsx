import { Button } from "@/components/ui/button";
import { Icon } from "@/icon";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <section>
      <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="w-full ">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <p className="text-sm font-medium">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold md:text-3xl">
              We lost this page
            </h1>
            <p className="mt-4">
              We searched high and low, but couldn’t find what you’re looking
              for.Let’s find a better place for you to go.
            </p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <Button>Take me home</Button>
            </div>
          </div>

          <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <Icon name="FileText" className="w-6 h-6" />
              <h3 className="mt-6 font-medium">Documentation</h3>
              <p className="mt-2 ">Dive in to learn all about our product.</p>
              <a href="#" className="inline-flex items-center mt-4 text-sm">
                <span>Start learning &rarr;</span>
              </a>
            </Card>

            <Card className="p-6">
              <Icon name="BookOpen" className="w-6 h-6" />
              <h3 className="mt-6 font-medium ">Our blog</h3>
              <p className="mt-2 ">Read the latest posts on our blog.</p>
              <a href="#" className="inline-flex items-center mt-4 text-sm">
                <span>View lastest posts &rarr;</span>
              </a>
            </Card>

            <Card className="p-6">
              <Icon name="MessageCircle" className="w-6 h-6" />
              <h3 className="mt-6 font-medium">Chat to us</h3>
              <p className="mt-2">Can’t find what you’re looking for?</p>
              <a
                href="#"
                className="inline-flex items-center mt-4 text-sm hover:underline"
              >
                <span>Chat to our team &rarr;</span>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
