import { Compass, CreditCard, Home } from "lucide-react";

export type MenueProps = {
    id: number
    lable: string
    icon: JSX.Element
    path: string
    section?: string
    intergration?: boolean
}

export const LANDING_PAGE_MENU: MenueProps[] = [
    {
       id: 0,
       lable: "Home",
       icon: <Home/>,
       path: "/",
       section: "true"
    },
    {
        id: 1,
        lable: "Pricing",
        icon: <CreditCard/>,
        path: "#pricing",
        section: "true"
    },
    {
        id: 2,
        lable: "Explore",
        icon: <Compass/>,
        path: "/explore",
        // section: "true"
    }
]
