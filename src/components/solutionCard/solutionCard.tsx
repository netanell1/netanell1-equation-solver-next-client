
import styles from "./solutionCard.module.scss"

interface SolutionCardProps {
    x?: string;
    y?: string
}

export default function SolutionCard({ x, y }: SolutionCardProps) {

    return (
        <li className=" rounded-lg shadow-lg bg-neutral-700 p-10 min-w-36 min-h36 text-center font-medium text-2xl ">
            {(x || x == '0') && <div>
                {`x = ${isNaN(Number(x)) ? x : Number(x)}`}
            </div>}
            {y && <div>
                {`y = ${isNaN(Number(y)) ? x : Number(y)}`}
            </div>}
        </li>
    )
}