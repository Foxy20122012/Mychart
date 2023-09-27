// GraphForm.js
import React from 'react';

function GraphForm({ expression, start, end, setExpression, setStart, setEnd, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
      <div className='mb-4'>
        <label className="text-center justify-center block text-sm font-medium text-gray-700">Expresión algebraica: </label>
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          className="border border-gray-400 rounded-md p-2 w-full"
        />
      </div>
      <div>
        <label className="text-center justify-center block text-sm font-medium text-gray-700">Intervalo inicial: </label>
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(parseInt(e.target.value))}
          className="border border-gray-400 rounded-md p-2 w-full"
        />
      </div>
      <div>
        <label className="text-center justify-center block text-sm font-medium text-gray-700">Intervalo final: </label>
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(parseInt(e.target.value))}
          className="border border-gray-400 rounded-md p-2 w-full"
        />
      </div>
    </form>
  );
}

export default GraphForm;
