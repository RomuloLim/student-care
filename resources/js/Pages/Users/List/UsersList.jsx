import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Users({ auth, users }) {
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
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Rômulo Lima
                                        </div>
                                        <span className="badge badge-success badge-sm">
                                            Disponível
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Diretor</td>
                            <td>
                                (85) 99272-5107
                                <div className="text-sm opacity-50">
                                    romulo@gmail.com
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    Detalhes
                                </button>
                            </th>
                        </tr>

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
                                                src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Sérgio Gabriel
                                        </div>
                                        <span className="badge badge-warning badge-sm">
                                            Em aula - Sala 04
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Professor de Matemática</td>
                            <td>
                                (85) 99452-3213
                                <div className="text-sm opacity-50">
                                    sergio@gmail.com
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    Detalhes
                                </button>
                            </th>
                        </tr>

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
                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Jeferson Oliveira
                                        </div>
                                        <span className="badge badge-error badge-sm">
                                            Ocupado
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Coordenador 01</td>
                            <td>
                                (85) 99272-5107
                                <div className="text-sm opacity-50">
                                    romulo@gmail.com
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    Detalhes
                                </button>
                            </th>
                        </tr>

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
                                                src="https://github.com/nunomaduro.png"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Nuno Maduro
                                        </div>
                                        <span className="badge badge-ghost badge-sm">
                                            Sem informação
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Coordenador 02</td>
                            <td>
                                (85) 99272-5107
                                <div className="text-sm opacity-50">
                                    romulo@gmail.com
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    Detalhes
                                </button>
                            </th>
                        </tr>
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
