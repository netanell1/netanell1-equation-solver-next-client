import { ErrorModel } from "@/models/interfaces/error.interface"
import { SolutionTowVariables } from "@/models/interfaces/solutionTowVariables.interface"

const serverPath = process.env.NEXT_PUBLIC__SERVER_PATH

export async function solveEquationWithOneVariable(equation: string) {
    // try {
    const respone = await fetch(`${serverPath}/solve_equation_with_one_variable`, {
        method: 'POST',
        body: JSON.stringify({ equation: equation.toLocaleLowerCase() })
    })
    if (!respone.ok) {
        throw respone
    }
    return respone.json() as Promise<{ solution: string[] }>
    // } catch (error) {
    //     console.error(error);
    // }
}


export async function solveEquationsWithTwoVariables(equation1: string, equation2: string) {
    // try {
    const respone = await fetch(`${serverPath}/solve_equations_with_two_variables`, {
        method: 'POST',
        body: JSON.stringify({ equation1: equation1.toLocaleLowerCase(), equation2: equation2.toLocaleLowerCase() })
    })
    if (!respone.ok) {
        throw respone
    }

    return respone.json() as Promise<{ solution: SolutionTowVariables[] }>
    // } catch (error) {
    //     console.error(error);
    // }
}