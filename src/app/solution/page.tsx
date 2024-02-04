'use client'
import { EquationEnum } from "@/models/enums/equation.enum";
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { solveEquationWithOneVariable, solveEquationsWithTwoVariables } from "@/services/client-proxy/equations";
import { SolutionTowVariables } from "@/models/interfaces/solutionTowVariables.interface";
import TypingAnimation from "@/components/typingAnimation/typingAnimation";
import SolutionCard from "@/components/solutionCard/solutionCard";
import { ErrorModel } from "@/models/interfaces/error.interface";
import { TextTypeOutModel } from "@/models/interfaces/textTypeOut.interface";
import Link from "next/link";
import { PathsItems } from "@/config/paths.config";
import LoadingSolution from "@/components/loadingSolution/loadingSolution";
import { ErrorscodeEnum } from "@/models/enums/errorscode.enum";
import { Metadata } from "next";


// export const metadata: Metadata = {
//     title: 'Solution | Solvy',
//     description: 'Solution page | solvy',
// }


interface SolutionPageProps {
    params: {};
    searchParams: { eq: string }
}

export default function SolutionPage(props: SolutionPageProps) {

    const router = useRouter()
    // const data = useHistoryState()
    const [data, setData] = useState<any>()
    const [text, setText] = useState<string>('');
    const [error, setError] = useState<ErrorModel | null>(null);
    const [textError, setTextError] = useState<TextTypeOutModel>({ text: '', class: '' });
    const [solution, setSolution] = useState<{ solution: SolutionTowVariables[] | string[] } | undefined>()


    useEffect(() => {
        try {
            const url = decodeURIComponent(props.searchParams.eq)
            setData(JSON.parse(url))
        } catch (error) {
            router.back()
        }
    }, [props])


    useEffect(() => {
        solve()
    }, [data])

    useEffect(() => {
        textError.class = "text-red-600 text-2xl font-semibold justify-center"
        switch (error?.code) {
            case ErrorscodeEnum.unableToSolveTheEquation:
                textError.text = `Unfortunately, the equation${data?.type == EquationEnum.equationsWithTwoVariables ? 's' : ''} cannot be solved 😞`
                break;
            case ErrorscodeEnum.cannotConvert:
                textError.text = `I'm sorry, but the answers are unreadable`
                break;
            case ErrorscodeEnum.syntaxError:
                textError.text = `I'm sorry , but the equation${data?.type == EquationEnum.equationsWithTwoVariables ? 's' : ''} syntax didn't match`
                break;

            default:
                // router.back()
                break;
        }
        setTextError({ ...textError })
    }, [error])

    function solve() {
        switch (data?.type) {
            case EquationEnum.equationWithOneVariable:
                setText(`The possible solutions for the equation: '${data.equation}'`)
                solveEquationWithOneVariable(data.equation).then(res => {
                    setSolution(res)
                }).catch(async res => {
                    try {
                        const error: ErrorModel = await res.json()
                        setError(error)
                    }
                    catch (error) {
                        setError(error as any)
                    }

                })
                break;
            case EquationEnum.equationsWithTwoVariables:
                setText(`The possible solutions for the equations: '${data.equation1}, ${data.equation2}'`)
                solveEquationsWithTwoVariables(data.equation1, data.equation2).then(res => {
                    setSolution(res)
                }).catch(async res => {
                    try {
                        const error: ErrorModel = await res.json()
                        setError(error)
                    }
                    catch (error) {
                        setError(error as any)
                    }
                })
                break;
            default:
                if (data?.type) {
                    router.back()
                }
                break;
        }
    }

    return <div>
        <div className="title-page">solution</div>

        {solution || error ? <div>
            <TypingAnimation text={[{ text, class: "text-2xl mb-5 " }]} />

            {error ? <div>
                <TypingAnimation animationDelay={2} text={[textError]} classDivChildren="flex mt-20 gap-5 justify-center">
                    <Link className="btn--white block" href={`${PathsItems[EquationEnum[data?.type]].path}?eq=${encodeURIComponent(JSON.stringify(data))}`}>{`I want to fix my equation${data?.type == EquationEnum.equationsWithTwoVariables ? 's' : ''}`}</Link>
                    <Link className="btn--white block" href={`${PathsItems[EquationEnum[data?.type]].path}`}>{`Give me a new equation${data?.type == EquationEnum.equationsWithTwoVariables ? 's' : ''}`}</Link>
                </TypingAnimation>
            </div>
                : <div>
                    <ul>
                        <TypingAnimation animationDelay={2} classDivChildren="flex flex-wrap gap-5 justify-center">
                            {solution?.solution?.map((s, index) => {
                                let x: string = '';
                                let y: string = '';
                                const isString = typeof (s) == "string"
                                if (isString) {
                                    x = s
                                }
                                else {
                                    x = s.x
                                    y = s.y
                                }

                                return <SolutionCard key={index + "" + s} x={x} y={y} />
                            })}
                        </TypingAnimation>
                    </ul>
                    <TypingAnimation animationDelay={4} classDivChildren=" mt-16 mb-16 flex mt-20 gap-5 justify-center">
                        <Link className="btn--blue block" href={`${PathsItems.equationWithOneVariable.path}/${PathsItems.equationWithOneVariable.parmas}`}>Equation with one variable</Link>
                        <Link className="btn--purple block" href={`${PathsItems.equationsWithTwoVariables.path}/${PathsItems.equationsWithTwoVariables.parmas}`}>Two equations with two variables</Link>
                    </TypingAnimation>
                </div>
            }
        </div>
            : <LoadingSolution />
        }
    </div>
}