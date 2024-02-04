import FormEquation from "@/components/formEquation/formEquation";
import { EquationEnum } from "@/models/enums/equation.enum";
import { EquationForm } from "@/models/interfaces/equationsForm.interface";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Two Variables | solvy',
    description: 'Two Variables page | Solvy',
}

interface EquationsWithTwoVariablesPageProps {
    params: {};
    searchParams: { eq: string }
}

export default function EquationsWithTwoVariablesPage(props: EquationsWithTwoVariablesPageProps) {
    let data;
    try {
        const url = decodeURIComponent(props.searchParams.eq)
        data = JSON.parse(url)
    } catch (error) {
        data = null
    }


    const equations: EquationForm[] = [
        {
            label: "Your First  Equation:",
            keyForm: "equation1",
            defaultValue: data?.equation1
        },
        {
            label: "Your Second  Equation:",
            keyForm: "equation2",
            defaultValue: data?.equation2
        }
    ]

    return (
        <div className=" text-xl">
            <h2 className="title-page">Equations With Two Variables</h2>
            <FormEquation buttonText="Solve for me!" equations={equations} type={EquationEnum.equationsWithTwoVariables} moreCharsAllowed={['x', 'y']} />
        </div>
    )
}