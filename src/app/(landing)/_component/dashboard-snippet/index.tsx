import Image from "next/image"
type Props = {}

const DassBoardSnippet = (props: Props) => {
  return (
    <div>
        <div className="relative py-20" >
            <div className="w-full h-3/6 absolute rounded=[50%] radial-blur opacity-40 mx-10">
            <div className="w-fullaspect-video relative">
                <Image
                    priority
                    src="/dashboard-snippet.jpg"
                    className="opacity[0,50%]"
                    alt="snippet"
                    fill
                    objectFit="contain"
                />
                <h1>Dashboard</h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DassBoardSnippet