import { PathItemModel, PathItemObjectModel } from "@/models/interfaces/pathItem.interface"

export const PathsItems: PathItemObjectModel = {
    home: { title: "Home", path: "/", parmas: "", showInMenue: false },
    about: { title: "About", path: "/about", parmas: "", showInMenue: true },
    equationWithOneVariable: { title: "One variable", parmas: "", path: "/equation/equationWithOneVariable", showInMenue: true },
    equationsWithTwoVariables: { title: "Two variables", parmas: "", path: "/equation/equationsWithTwoVariables", showInMenue: true },
    solution: { title: "solution", path: "/solution", parmas: "", showInMenue: false }
}

export function getMunueItems(asArr: boolean = false) {
    const munueItems: PathItemObjectModel = {}
    const munueItemsArr: PathItemModel[] = []
    for (const key in PathsItems) {
        if (PathsItems[key].showInMenue) {
            if (asArr) {
                munueItemsArr.push(PathsItems[key])
            }
            else {
                munueItems[key] = PathsItems[key]
            }
        }
    }
    return asArr ? munueItemsArr : PathsItems
}
