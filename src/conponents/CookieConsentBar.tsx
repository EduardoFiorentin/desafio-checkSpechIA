import React, { useState } from 'react';

const CookieConsentBar = () => {
  const [accepted, setAccepted] = useState(false);

  const acceptCookies = () => {
    // Aqui você pode adicionar lógica para armazenar o consentimento do usuário, por exemplo, em localStorage.
    setAccepted(true);
  };

  if (accepted) {
    return null; // Se os cookies foram aceitos, não mostramos a barra de consentimento.
  }

  return (
    <div className='flex flex-col items-center justify-center fixed bottom-0 left-0 w-full bg-darkgrey text-white p-[10px] z-50 md:flex-row'>
      <p className='text-center'>
        Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com o uso de cookies.
      </p> 
      <button onClick={acceptCookies} className='bg-yellow-300 w-[100px] text-black rounded mt-[20px] md:mt-0 md:ml-[20px]'>
        Aceitar
      </button>
    </div>
  );
};

export default CookieConsentBar;