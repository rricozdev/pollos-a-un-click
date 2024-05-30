import React, { useState } from 'react';
import { BarChart, Card, Divider, Switch } from '@tremor/react';

const data = [

  {
    date: 'Ene 24',
    'This Year': 80100,
    'Last Year': 70120,
  },
  {
    date: 'Feb 24',
    'This Year': 75090,
    'Last Year': 69450,
  },
  {
    date: 'Mar 24',
    'This Year': 71080,
    'Last Year': 63345,
  },
  {
    date: 'Abr 24',
    'This Year': 61210,
    'Last Year': 100330,
  },
  {
    date: 'May 24',
    'This Year': 60143,
    'Last Year': 45321,
  },
];

function valueFormatter(number) {
  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(number);
}

 function Ventas() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <>
      <Card className="sm:mx-auto sm:max-w-2xl p-6">
        <h3 className="ml-1 mr-1 font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Descripción General de Ventas
        </h3>
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Cantidad de pedidos gestionados por mes
        </p>
        <BarChart
          data={data}
          index="date"
          categories={
            showComparison ? ['Last Year', 'This Year'] : ['This Year']
          }
          colors={showComparison ? ['cyan', 'green'] : ['green']}
          valueFormatter={valueFormatter}
          yAxisWidth={45}
          className="mt-6 hidden h-60 sm:block"
        />
        <BarChart
          data={data}
          index="date"
          categories={
            showComparison ? ['Last Year', 'This Year'] : ['This Year']
          }
          colors={showComparison ? ['cyan', 'green'] : ['green']}
          valueFormatter={valueFormatter}
          showYAxis={false}
          className="mt-4 h-56 sm:hidden"
        />
        <Divider />
        <div className="mb-2 flex items-center space-x-3">
          <Switch
            id="comparison"
            onChange={() => setShowComparison(!showComparison)}
          />
          <label
            htmlFor="comparison"
            className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
          >
            Mostrar el mismo periodo del año pasado
          </label>
        </div>
      </Card>
    </>
  );
}

export default Ventas;