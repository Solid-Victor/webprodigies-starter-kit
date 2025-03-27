import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { BadgePlus, } from "lucide-react"
import Link from "next/link"

type Props = {}

const CallToAction = (props: Props) => {
  return (
    <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0">
      <GradientText

        className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[88px] leading-tight font-semibold bg-gradient-to-r from-gray-900 via-white to-gray-900 bg-clip-text text-transparent"
        element="H1"
      >
        Bringing Communities <br className=" md:hidden" />
        Together
      </GradientText>
      <p className="text-sm md:text-center text-left text-muted-foreground">
        Skool Manager is a online platform for creating a customized School Management System.
        <br className="md:hidden" />
        We are developers
        <br className="md:block hidden" />
        passionate about better
        <br className="md:hidden" />
        school management systems.
      </p>
      <div className="flex md:flex-row flex-col md:justify-center gap-5 md:mt-5 w-full">
        <Button
          variant="outline"
          className="rounded-xl bg-transparent text-base"
        >
          Watch Demo
        </Button>
        <Link href="/sign-in">
          <Button className="rounded-xl text-base flex gap-2 w-full md:w-auto">
            <BadgePlus />  Get Started
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CallToAction