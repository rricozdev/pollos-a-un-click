// import React from 'react';

// const TableHero = () => (
//   <div className="mx-auto max-w-2xl">
//     <table className="table-fixed w-full">
//       <thead>
//         <tr>
//           <th className="w-1/4">Name</th>
//           <th className="w-1/4 text-right">Monsters Slayed</th>
//           <th className="w-1/4">Region</th>
//           <th className="w-1/4">Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td className="w-1/4">Wilhelm Tell</td>
//           <td className="w-1/4 text-right">1</td>
//           <td className="w-1/4">Uri, Schwyz, Unterwalden</td>
//           <td className="w-1/4">National Hero</td>
//         </tr>
//         <tr>
//           <td className="w-1/4">The Witcher</td>
//           <td className="w-1/4 text-right">129</td>
//           <td className="w-1/4">Kaedwen</td>
//           <td className="w-1/4">Legend</td>
//         </tr>
//         <tr>
//           <td className="w-1/4">Mizutsune</td>
//           <td className="w-1/4 text-right">82</td>
//           <td className="w-1/4">Japan</td>
//           <td className="w-1/4">N/A</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

// export default TableHero;


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
  } from '@tremor/react';
  
const TableHero = () => (
    <div className="mx-auto max-w-2xl">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre Productor</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Cantidad de Pollos
            </TableHeaderCell>
            <TableHeaderCell className="text-center">
              Id Pedido
            </TableHeaderCell>
            <TableHeaderCell>Region</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
  
        <TableBody>
          <TableRow>
            <TableCell>Peter Alveiro</TableCell>
            <TableCell className="text-right">100</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell>El Banco</TableCell>
            <TableCell>Entregado</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Miryam Ayala</TableCell>
            <TableCell className="text-right">200</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell>Mompox</TableCell>
            <TableCell>En transito</TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </div>
  );

  export default TableHero;