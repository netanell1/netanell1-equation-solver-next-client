import { Metadata } from "next"
import { textAabout } from "./textAbout";
import TypingAnimation from "@/components/typingAnimation/typingAnimation";

export const metadata: Metadata = {
    title: 'About | Solvy',
    description: 'About page | solvy',
}


export default function Aboutpage() {
    return (
        <div className=" text-xl">
            <h2 className="title-page">About</h2>
            <TypingAnimation text={textAabout}>
            </TypingAnimation>
        </div >
    )
}