import { usePathname } from "next/navigation"
import { useState } from "react"

export const useNavigation = () => {
  const pathName = usePathname()
  const [section, setSection] = useState<string>(pathName)
  const useSelection = (page: string) => setSection(page)
  return {
    section,
    useSelection
  }


}


