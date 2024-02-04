'use client'
import { useRouter } from "next/navigation";
import styles from "./formEquation.module.scss"
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { EquationEnum } from "@/models/enums/equation.enum";
import { charsAllowed } from "@/config/charsAllowed.config";
import { PathsItems } from "@/config/paths.config";
import { EquationForm } from "@/models/interfaces/equationsForm.interface";

interface FormEquationProps {
    equations: EquationForm[];
    buttonText: string;
    type: EquationEnum;
    moreCharsAllowed?: string[];
}

type Inputs = {
    [key: string]: string
}
export default function FormEquation({ equations, buttonText, type, moreCharsAllowed }: FormEquationProps) {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>({
        mode: "onChange", reValidateMode: "onChange",
    })
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        router.push(`${PathsItems.solution.path}?eq=${encodeURIComponent(JSON.stringify({ ...data, type }))}`)
    }

    const equationVaild = (equation: string) => {
        if (isNaN(+equation)) {
            const charts = moreCharsAllowed ? [...moreCharsAllowed, ...charsAllowed] : charsAllowed
            let isVaild = true
            for (const s of equation) {
                let charVaild = false
                if (isNaN(+s)) {
                    for (const char of charts) {
                        // debugger
                        if (s.toLowerCase() == char.toLowerCase()) {
                            charVaild = true
                            break
                        }
                    }
                }
                else {
                    charVaild = true
                }
                if (!charVaild) {
                    isVaild = false
                    break
                }
            }
            return isVaild
        }
        else return true
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {equations.map((equation, index) =>
                <div key={index} className="mb-5">
                    <label className="block mb-2 text-lg font-medium text-center">{equation.label}</label>
                    <input defaultValue={equation.defaultValue} {...register(equation.keyForm, { required: true, validate: { equationVaild }, value: equation.defaultValue })} type="text" className={"bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring focus:border-blue-500 block  p-2.5 text-xl text-center w-3/6 min-w-80 m-auto"} />
                    {errors[equation.keyForm]?.type == "equationVaild" &&
                        <div className="text-red-500 font-semibold text-center mt-2">
                            Invalid characters
                        </div>}
                    {errors[equation.keyForm]?.type == "required" &&
                        <div className="text-red-300 font-semibold text-center mt-2">
                            Required field
                        </div>}
                </div>
            )}
            <div className="flex justify-center">
                <button disabled={Object.keys(errors).length > 0} className="btn--gray-dark m-auto" type="submit" >
                    {/* onClick={(e) => { e.preventDefault(); router.push('/solution') } */}
                    {buttonText}
                </button>
            </div>
        </form>
    )
}