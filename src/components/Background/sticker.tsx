import { FC } from "react"
import Image from "next/image"

export const StickerPreview: FC = () => {
    return (
        <div className="absolute top-0 left-0 z-[2] h-full w-full">
            <Image src="/assets/sticker-bg.png" width={2388} height={1768}></Image>
        </div>
    )
}

const Sticker: FC = () => {
    return (
         // <div className="absolute top-0 right-0 z-[2] h-[1886px] w-[2700px] ">
         <div className="absolute top-0 right-0 z-[2] h-[1768px] w-[2388px] ">
         <Image src="/assets/sticker-bg.png" width={2388} height={1768}></Image>
     </div>
    )
}

export default Sticker
