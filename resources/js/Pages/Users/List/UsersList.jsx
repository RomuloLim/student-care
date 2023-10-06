import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Users({ auth, users }) {
    console.log(users);

    return (
        <AuthenticatedLayout user={auth.user} header={"Funcionários"}>
            <div className="overflow-x-auto">
                <table className="table w-100">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Contato</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={user.avatar}
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {user.name}
                                        </div>
                                        <span className="badge badge-success badge-sm">
                                            {user.status}
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>{user.occupation.name}</td>
                            <td>
                                {user.phone}
                                <div className="text-sm opacity-50">
                                    {user.email}
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    Detalhes
                                </button>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Contato</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
