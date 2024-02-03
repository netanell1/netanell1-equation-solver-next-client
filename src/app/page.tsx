// 'use client'
import { PathsItems } from "@/config/paths.config";
import { solveEquationWithOneVariable } from "@/services/client-proxy/equations";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


// export const metadata: Metadata = {
//   title: 'Home | solvy',
//   description: 'Home page | solvy',
//   icons: {
//     icon: '/homePage.ico'
//   }
// }


export default function Home() {


  return (
    <div>
      <div className="text-center text-6xl font-semibold">
        <h2>Welcome to</h2>
        <h2 className="solvy-txt text-8xl ">Solvy</h2>
        <h2>Equation solver</h2>
      </div>
      <div className="mt-3 text-center">
        An Artificial Intelligence bot that solves an equation with variables
      </div>
      <div className="flex gap-10 mt-5 justify-center">
        <Link className="btn--blue" href={`${PathsItems.equationWithOneVariable.path}/${PathsItems.equationWithOneVariable.parmas}`}>Equation with one variable</Link>
        <Link className="btn--purple" href={`${PathsItems.equationsWithTwoVariables.path}/${PathsItems.equationsWithTwoVariables.parmas}`}>Two equations with two variables</Link>
      </div>
    </div>
  );
}
