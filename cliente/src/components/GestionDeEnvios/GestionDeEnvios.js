import React, { useState } from 'react';
import { RiArrowDownLine, RiArrowUpLine } from '@remixicon/react';
import './GestionDeEnvios.css'; // Archivo CSS para las transiciones

const envios = [
  {
    envioId: '1234',
    destinatario: 'Juan Pérez',
    estado: 'En tránsito',
    costo: '$15.000',
    region: 'Mompox 1',
    capacidad: '50%',
    fechaEnvio: '01/05/2024 14:00',
  },
  {
    envioId: '5678',
    destinatario: 'María Gómez',
    estado: 'Entregado',
    costo: '$15.000',
    region: 'Mompox 2',
    capacidad: '65%',
    fechaEnvio: '02/05/2024 10:00',
  },
  {
    envioId: '5679',
    destinatario: 'Pedro Gónzalez',
    estado: 'Entregado',
    costo: '$10.000',
    region: 'Margarita',
    capacidad: '75%',
    fechaEnvio: '06/05/2024 12:00',
  },
  {
    envioId: '5680',
    destinatario: 'Roncancio Diaz',
    estado: 'Pendiente',
    costo: '$30.000',
    region: 'Talaigua Nuevo',
    capacidad: '95%',
    fechaEnvio: '08/05/2024 16:00',
  },
  // Agrega más envíos según sea necesario
];

const GestionDeEnvios = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'envioId', direction: 'ascending' });
  const [showTable, setShowTable] = useState(false);

  const sortedEnvios = React.useMemo(() => {
    let sortableEnvios = [...envios];
    if (sortConfig !== null) {
      sortableEnvios.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableEnvios;
  }, [sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (key) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === key ? sortConfig.direction : undefined;
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-gray-500 mb-6">Gestión de Envíos</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('envioId')}
                >
                  ID de Envío
                  {getClassNamesFor('envioId') === 'ascending' ? (
                    <RiArrowUpLine className="inline ml-2" />
                  ) : getClassNamesFor('envioId') === 'descending' ? (
                    <RiArrowDownLine className="inline ml-2" />
                  ) : null}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('destinatario')}
                >
                  Destinatario
                  {getClassNamesFor('destinatario') === 'ascending' ? (
                    <RiArrowUpLine className="inline ml-2" />
                  ) : getClassNamesFor('destinatario') === 'descending' ? (
                    <RiArrowDownLine className="inline ml-2" />
                  ) : null}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Estado
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Región
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Capacidad
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Costo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Fecha de Envío
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedEnvios.map((envio) => (
                <tr key={envio.envioId}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {envio.envioId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{envio.destinatario}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{envio.estado}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{envio.region}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{envio.capacidad}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{envio.costo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{envio.fechaEnvio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default GestionDeEnvios;
