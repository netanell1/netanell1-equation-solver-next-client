'use client'
import { TextTypeOutModel } from "@/models/interfaces/textTypeOut.interface"
import styles from "./typingAnimation.module.scss"
import { Dispatch } from "react";

interface TypingAnimationProps {
    text?: TextTypeOutModel[];
    toColorSolvy?: boolean
    animationDelay?: number;
    children?: React.ReactNode;
    classDivChildren?: string

}

export default function TypingAnimation({ text = [], toColorSolvy = true, animationDelay = 0, children, classDivChildren }: TypingAnimationProps) {


    return (
        <div>{text &&
            <div className="w-full">
                {text.map((txt, index) => {
                    // animationDelay += index
                    const elemnts = txt.text.trim().split(" ").map(t => {
                        animationDelay += 0.2
                        return (
                            <div key={index + animationDelay + t} className={`text-start m-0 me-2`}>
                                <div className={`${styles['typed-out']} ${t.toLowerCase().includes("solvy") && toColorSolvy ? `solvy-txt text-3xl ${styles['mt--3']}` : ''}`} style={{ "animationDelay": `${animationDelay}s` }} >{t}</div>
                            </div>
                        )
                    })
                    return (
                        <div key={index} className={`flex flex-wrap justify-start h-max ${txt.class}  `}>
                            {elemnts}
                        </div>
                    )
                })}
            </div>
        }

            {children && <div className={classDivChildren}>
                {(Array.isArray(children) ?
                    children.map((child, index) => {
                        animationDelay = animationDelay ? index ? animationDelay + 1.3 : animationDelay + 0.5 : 0
                        return <div key={index} className={styles['fade-in']} style={{ "animationDelay": `${animationDelay}s` }}>{child}</div>
                    }) :
                    <div className={styles['fade-in']} style={{ "animationDelay": `${animationDelay ? animationDelay + 1.3 : 0}s` }}>{children}</div>)}
            </div>
            }
        </div>
    )
}