import React from 'react';
import { TERipple } from 'tw-elements-react';
import { useNavigate } from "react-router-dom";

const Card: React.FC = (): JSX.Element => {

  const navigate = useNavigate();

  const gotoSpot = (name: string) => {
    navigate(`/${name}`);
  }; 
  
  return (
    <a className="cursor-pointer mx-2 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" onClick={() => gotoSpot('name')}>
      <TERipple>
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
            alt="Beautiful nature scene"
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
      </TERipple>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Spots name
        </h5>
      </div>
    </a>
  );
};

export default Card;
