
const HTTPVerbPalette = {
    GET: 'bg-blue-500 text-white',
    POST: 'bg-green-100 text-green-700',
    PUT: 'bg-indigo-100 text-indigo-700',
    DELETE: 'bg-red-100 text-red-700',
}

export function Metadata({
    title,
    verb, path
}) {
    return (
        <div className="font-bold">
            <div className="mt-12 text-3xl">{title}</div>
            <div className="mt-6">
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-base ${HTTPVerbPalette[verb]}`}>
                    {verb}
                </span>
                <span className="ml-2 text-xl">{path}</span>
            </div>
        </div >
    )
}

export function ParamTable({ params }) {
    return (
        <table className="table-container">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        参数
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        示例
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        说明
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
                {params.map((param) => (
                    <tr key={param.key}>
                        <td className="whitespace-nowrap py-4 pl-4 text-sm sm:pl-6">
                            <div>
                                <div>{param.key}</div>
                                <div>
                                    <span className="text-sky-500 font-mono italic">{param.type}</span>
                                    {
                                        param.required === false &&
                                        <span className="ml-2 text-gray-500 underline decoration-sky-500">可选</span>
                                    }
                                </div>
                            </div>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900">
                            {param.example}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900">
                            {param.description}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}