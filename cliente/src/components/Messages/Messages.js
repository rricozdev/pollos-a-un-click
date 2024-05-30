import React, { useState } from 'react';
import { RiArrowDownLine, RiArrowUpLine } from '@remixicon/react';
import './Messages.css'; // Archivo CSS para las transiciones
import avatar1 from './1.jpg';
import avatar2 from './2.jpg';
import avatar3 from './3.jpg';
import avatar4 from './4.jpg';
import avatar5 from './5.jpg';
import avatar6 from './6.jpg';
import avatar7 from './7.jpg';
import avatar8 from './8.jpg';
import avatar9 from './9.jpg';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9,];

const mensajes = [
  {
    id: '1',
    remitente: 'Nikole Kadman',
    asunto: 'Pedido en gran escala',
    contenido: 'Recordatorio: la reunión de equipo será mañana a las 10 AM vía meet.',
    fecha: '02/05/2024',
  },
  {
    id: '2',
    remitente: 'Pablo montoya',
    asunto: 'Actualización del pedido',
    contenido: 'Adjunto encontrarás la última versión del documento de especificaciones del pedido.',
    fecha: '03/05/2024',
  },
  {
    id: '3',
    remitente: 'Josué García',
    asunto: 'Confirmación de entrega',
    contenido: 'El pedido ha sido entregado con éxito. ¡Gracias por tu compra!',
    fecha: '04/05/2024'
  },
  {
    id: '4',
    remitente: 'Daniela Terraza',
    asunto: 'Actualización de stock',
    contenido: 'Hemos recibido nuevas existencias de pollo fresco. Aprovecha nuestras ofertas.',
    fecha: '05/05/2024'
  },
  {
    id: '5',
    remitente: 'Yaneth Bello',
    asunto: 'Solicitud de información',
    contenido: '¿Podrías proporcionarme más detalles sobre los precios al por mayor?',
    fecha: '06/05/2024'
  },
  {
    id: '6',
    remitente: 'Andrés Martínez',
    asunto: 'Promoción especial',
    contenido: '¡Oferta especial de fin de semana! Descuento del 20% en pedidos mayores a $100.',
    fecha: '07/05/2024'
  },
  {
    id: '7',
    remitente: 'Caro Fuentes',
    asunto: 'Confirmación de pedido',
    contenido: 'Acabo de realizar un pedido de pollo fresco. ¿Cuál es el tiempo estimado de entrega?',
    fecha: '08/05/2024'
  },
  {
    id: '8',
    remitente: 'Yuranis Gonzalez',
    asunto: 'Solicitud de cotización',
    contenido: 'Estoy interesado en adquirir una gran cantidad de pollo. ¿Podrías proporcionarme una cotización?',
    fecha: '09/05/2024'
  },
  {
    id: '9',
    remitente: 'María Gómez',
    asunto: 'Seguimiento de pedido',
    contenido: 'Quisiera saber el estado de mi pedido realizado la semana pasada.',
    fecha: '10/05/2024'
  }
  
  // Añade más mensajes según sea necesario
];

const Messages = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'fecha', direction: 'descending' });

  const sortedMensajes = React.useMemo(() => {
    let sortableMensajes = [...mensajes];
    if (sortConfig !== null) {
      sortableMensajes.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableMensajes;
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
      <h1 className="text-4xl font-bold text-center text-gray-500 mb-6">Bandeja de Entrada</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('remitente')}
              >
                Remitente
                {getClassNamesFor('remitente') === 'ascending' ? (
                  <RiArrowUpLine className="inline ml-2" />
                ) : getClassNamesFor('remitente') === 'descending' ? (
                  <RiArrowDownLine className="inline ml-2" />
                ) : null}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('asunto')}
              >
                Asunto
                {getClassNamesFor('asunto') === 'ascending' ? (
                  <RiArrowUpLine className="inline ml-2" />
                ) : getClassNamesFor('asunto') === 'descending' ? (
                  <RiArrowDownLine className="inline ml-2" />
                ) : null}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('fecha')}
              >
                Fecha
                {getClassNamesFor('fecha') === 'ascending' ? (
                  <RiArrowUpLine className="inline ml-2" />
                ) : getClassNamesFor('fecha') === 'descending' ? (
                  <RiArrowDownLine className="inline ml-2" />
                ) : null}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedMensajes.map((mensaje, index) => (
              <tr key={mensaje.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full mr-2"
                      src={avatars[index % avatars.length]} // Ciclo a través de los avatares
                      alt="Avatar"
                    />
                    <div className="text-sm font-medium text-gray-900">{mensaje.remitente}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{mensaje.asunto}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{mensaje.fecha}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
