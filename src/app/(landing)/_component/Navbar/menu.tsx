"use client"
import { Card, CardContent } from "@/components/ui/card"
import { GROUPLE_CONSTANTS, MenueProps as MenuItemProps } from "@/constants"
import { useNavigation } from "@/hooks/navigation"
import { cn } from "@/lib/utils"
import Link from "next/link"

type MenuOrientation = {
  orientation: 'mobile' | 'desktop'
}

const Menu = ({orientation}: MenuOrientation) => {
  const { section, useSelection } = useNavigation()
  switch (orientation) {
    case "desktop":
      return (
        <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop-blur_safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl">
          <CardContent className="p-0 flex gap-2">
           {GROUPLE_CONSTANTS.landipageMenu.map((menuItem: MenuItemProps) => (
            <Link 
              href={menuItem.path} 
              {...(menuItem.section && {
                onClick: () => useSelection(menuItem.path),
              })}
              className={cn(
                "rounded-xl flex gap-2 py-2 px-4 items-center",
                section === menuItem.path ? "bg-[#090909] border-(#2727272A)" : ""
              )}
              key={menuItem.id}
            >
              {/* {menuItem.icon} */}
              {/* {menuItem.lable} */}
              {section === menuItem.path && menuItem.icon}
              {menuItem.lable}
            </Link>
           ))}
          </CardContent>
        </Card>
      )
    case "mobile":
      return (
        <div className="flex flex-col mt-10">
          {GROUPLE_CONSTANTS.landipageMenu.map((menuItem: MenuItemProps) => (
            <Link
             href={menuItem.path}
             {...(menuItem.section && {
              onClick: () => useSelection(menuItem.path),
             })}
             className={cn(
              "rounded-xl flex gap-2 py-2 px-4 items-center",
              section === menuItem.path ? "bg-[#090909] border-(#2727272A)" : ""
             )}
             key={menuItem.id}
             >
              {menuItem.icon}
              {menuItem.lable}
            </Link>
          ))}
        </div>
      )
    default:
      return <div></div>
  }
}

export default Menu