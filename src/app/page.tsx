import MaxWidthwrapper from "@/components/MaxWidthwrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthwrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
          Your Market Place for high quality{` `}
          <span className="text-blue-600">
            digital assets
          </span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalPanda. Every assets on our platform is verified by our team to ensure our highest quality standarts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/products"
              className={buttonVariants()}
            >
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
      </div>
      {/* TODO: list products */}
    </MaxWidthwrapper>
  );
}
