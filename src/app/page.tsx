import MaxWidthwrapper from "@/components/MaxWidthwrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { CheckCircle,ArrowDownToLine, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name : "Instant Delivery",
    Icon : ArrowDownToLine,
    description : "Get your digital asset delivered to your Email in a matter of seconds."
  },{
    name : "Gauranteed Delivery",
    Icon : CheckCircle,
    description : "Every assets on our platform is verified by our team to ensure our highest quality standarts."
  },{
    name : "For the planet",
    Icon : Leaf,
    description : "we have pledged 5% of sales to the preserveation and restoration of the natural environment."
  },
]

export default function Home() {
  return (
    <>
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
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthwrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {<perk.Icon className="h-1/3 w-1/3" />}
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthwrapper>
    </section>
    </>
  );
}
