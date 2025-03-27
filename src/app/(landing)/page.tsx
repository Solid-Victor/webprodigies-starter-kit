import dynamic from "next/dynamic"
import CallToAction from "./_component/call-to-action"
import DassBoardSnippet from "./_component/dashboard-snippet"

const PricingSection = dynamic(
  () => 
    import("./_component/pricing").then(
 (component) => component.PricingSection),
 {ssr: true,}
)

export default function Home() {
    //md:px-10 py-20 flex flex-col gap-36
    return (
        <main className="md:px-10 py-20 flex flex-col gap-36">
            <div>
            <CallToAction/>
            <DassBoardSnippet/>
            </div>
            <PricingSection/>
            
        </main>
    )
}
