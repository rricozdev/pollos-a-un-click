import { DatePicker, DateRangePicker } from '@tremor/react';

function Calendar() {
  return (
    <div className="mx-auto max-w-md space-y-3 ">
      <p className="text-center font-mono text-sm text-slate-500">
        Selecciona una fecha para tu pedido
      </p>
      <DatePicker />
      <p className="pt-6 text-center font-mono text-sm text-slate-500">
      Selector de rango de fechas
      </p>
      <DateRangePicker className="mx-auto max-w-md" />
    </div>
  );
}

export default Calendar;