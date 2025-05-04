import { fetchCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default async function CustomersPage() {
  const customers = await fetchCustomers();

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Clientes</h1>
        <Link
          href="#"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
        >
          + Agregar cliente
        </Link>
      </div>

      {/* Buscador visual */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar cliente..."
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Tabla de clientes */}
      <div className="overflow-x-auto border rounded-lg bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correo</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
