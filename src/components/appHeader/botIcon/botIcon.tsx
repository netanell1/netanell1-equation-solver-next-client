// import styles from "./botIcon.module.scss"
import Image from "next/image"
import icon from "../../../../public/botIcon.jpeg"

interface BotIconProps {
    width?: number;
    height?: number;
    className?: string;
}

export default function BotIcon({ width = 350, height = 350, className = "rounded-2xl" }: BotIconProps) {
    return (
        <Image className={className} src={icon} alt="" width={width} height={height} />
    )
}
