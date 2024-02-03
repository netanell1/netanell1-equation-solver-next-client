import Link from "next/link"
import Image from "next/image"
import { PathsItems, getMunueItems } from "@/config/paths.config"
import { PathItemModel } from "@/models/interfaces/pathItem.interface"
import favicon from "@/app/favicon.ico"
import styles from "./appHeader.module.scss"

export default function AppHeader() {
    const menueItems = getMunueItems(true) as PathItemModel[]

    return (
        <header className={`sticky top-0 w-screen z-10 ${styles.header}`}>
            <div className={"relative h-20"}>
                <nav className="px-1 py-5">
                    <div className="flex mx-auto max-w-5xl">
                        <ul className="flex gap-4">
                            <li className="text-gray-300 hover:text-gray-500 rounded-md px-3 py-2 pe-9 text-2xl solvy-txt -mt-2 font-medium">
                                <Link className="flex" href={`${PathsItems.home.path}`}>
                                    <Image alt="" src={favicon} width={40} height={20} />
                                    <div>Solvy</div>
                                </Link>
                            </li>
                            {menueItems.map((item) => (
                                <li key={item.path} className="text-gray-300 hover:text-gray-500 rounded-md px-3 py-2 text-sm font-medium">
                                    <Link href={`${item.path}/${item.parmas}`}>{item.title}</Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}