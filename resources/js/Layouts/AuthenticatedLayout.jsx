import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import SidebarLinks from "@/Components/Sidebar/SidebarLinks";

export default function Authenticated({ user, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="drawer">
                <input id="sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="navbar bg-base-100">
                        <div className="flex-1">
                            <label htmlFor="sidebar">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </label>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    href={route("users.index")}
                                    active={route().current("users.index")}
                                >
                                    Funcionários
                                </NavLink>
                            </div>
                        </div>
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <label
                                    tabIndex="0"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img
                                            src="https://github.com/RomuloLim.png"
                                            // src={user.profile_photo_url}
                                        />
                                    </div>
                                </label>
                                <ul
                                    tabIndex="0"
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side z-40">
                    <label htmlFor="sidebar" className="drawer-overlay"></label>
                    <SidebarLinks />
                </div>
            </div>
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            {header}
                        </h2>
                    </div>
                </header>
            )}

            <main className="z-0">{children}</main>
        </div>
    );
}
