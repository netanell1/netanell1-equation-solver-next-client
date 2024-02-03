import FormEquation from "@/components/formEquation/formEquation"
import { EquationEnum } from "@/models/enums/equation.enum"
import { EquationForm } from "@/models/interfaces/equationsForm.interface";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'One Variable | solvy',
    description: 'One Variable page | Solvy',
}



interface EquationWithOneVariablePageProps {
    params: { data: string };
}

export default function EquationWithOneVariablePage(props: EquationWithOneVariablePageProps) {
    let data;
    try {
        const url = decodeURIComponent(props.params.data)
        data = JSON.parse(url)
    } catch (error) {
        data = null
    }

    const equations: EquationForm[] = [
        {
            label: "Your Equation:",
            keyForm: "equation",
            defaultValue: data?.equation
        }
    ]

    return (
        <div className=" text-xl">
            <h2 className="title-page">Equation With One Variable</h2>

            <FormEquation buttonText="Solve for me!" equations={equations} type={EquationEnum.equationWithOneVariable} moreCharsAllowed={['x']} />
            {/* <ul className="flex gap-5 justify-center">
                <SolutionCard x={5" y="200" />
                <SolutionCard x="5" y="9000000" />
            </ul> */}
        </div>
    )
}