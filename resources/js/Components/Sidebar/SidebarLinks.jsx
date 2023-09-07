import { Link } from "@inertiajs/react";

export default function SidebarLinks() {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-gray-100 text-base-content">
            <li>
                <Link
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                >
                    Dashboard
                </Link>
            </li>
            <li>
                <details>
                    <summary>Funcionários</summary>
                    <ul>
                        <li>
                            <Link href={route("users.index")}>Todos</Link>
                        </li>
                        <li>
                            <Link href={route("users.create")}>Cadastrar</Link>
                        </li>
                        {/* <li>
                                        <details open>
                                            <summary>Parent</summary>
                                            <ul>
                                                <li>
                                                    <a>level 3 item 1</a>
                                                </li>
                                                <li>
                                                    <a>level 3 item 2</a>
                                                </li>
                                            </ul>
                                        </details>
                                    </li> */}
                    </ul>
                </details>
            </li>
            <li>
                <a>Item 3</a>
            </li>
        </ul>
    );
}
