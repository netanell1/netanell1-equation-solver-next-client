
import { TextTypeOutModel } from "@/models/interfaces/textTypeOut.interface"
import TypingAnimation from "../typingAnimation/typingAnimation"
import styles from "./loadingSolution.module.scss"
import BotIcon from "../appHeader/botIcon/botIcon"

export default function LoadingSolution() {

    const text: TextTypeOutModel[] = [
        {
            text: "Just a moment, I'll solve it",
            class: ""
        }
    ]

    return (
        <div>
            <div className="text-center mb-10 text-2xl">{text[0].text}</div>
            <div className={`m-auto w-max ${styles['pulsate-fwd']}`}>
                <BotIcon />
            </div>
        </div>
    )
}