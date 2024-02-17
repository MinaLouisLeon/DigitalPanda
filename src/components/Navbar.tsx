import Link from "next/link"
import MaxWidthwrapper from "./MaxWidthwrapper"
import { Icons } from "./Icons"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
        <header className="relative bg-white">
            <MaxWidthwrapper>
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        {/* TODO: Mobile nav */}

                        <div className="flex flex-1">
                            <div className="ml-4 lg:ml-0">
                                <Link href="/">
                                    <Icons.Logo className="h-10 w-10" />
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems />
                            </div>
                        </div>
                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ">
                                {/* TODO: add sign in and user items */}
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthwrapper>
        </header>
    </div>
  )
}

export default Navbar