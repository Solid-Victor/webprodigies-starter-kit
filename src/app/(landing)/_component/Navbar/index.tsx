import GlassSheet from "@/components/global/glass-sheet"
import { Button } from "@/components/ui/button"
import { LogIn, MenuIcon } from "lucide-react"
import Link from "next/link"
import Menu from "./menu"
type Props = {}

const LandingPageNavbar = (props: Props) => {
  return (
    <div className="w-full flex justify-between sticky item-center py-5 top-0 z-50">
      <p className="font-bold text-2xl">Skool Manager</p>
      <Menu orientation="desktop" />
      <div className="flex ga">
        <Link href="/signup">
          <Button variant="outline"
            className="bg-themeblack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray hover:text-themeGray "
          >
            <LogIn />
            Login
          </Button>
        </Link>
        <GlassSheet
          triggerClass="lg:hidden"
          trigger={
          <Button 
          variant="ghost" 
          className="hover:bg-transparent ">
          <MenuIcon size={30}/>
          </Button>}
        >
          <Menu orientation="mobile"/>
        </GlassSheet>
      </div>
    </div>
  )
}

export default LandingPageNavbar