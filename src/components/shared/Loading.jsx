import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
      <img src="https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg" alt="Loading" className="w-24 h-24 animate-pulse" />
    </div>
  );
}

export default Loading;

