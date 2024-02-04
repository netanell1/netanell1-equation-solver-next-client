import { EquationEnum } from "@/models/enums/equation.enum";
import { useRouter, } from "next/navigation"
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
import SolutionClient from "./components/solutionClient";


export const metadata: Metadata = {
    title: 'Solution | Solvy',
    description: 'Solution page | solvy',
}


interface SolutionPageProps {
    params: {};
    searchParams: { eq: string }
}

export default function SolutionPage(props: SolutionPageProps) {
    return <SolutionClient data={props.searchParams.eq} />
}