import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CardDetailComponent from './CardDetailComponent';

const CardDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const navigate = useNavigate();

  return (
    <div className="mt-16">
      <button
        onClick={() => navigate(-1)}
        className="font-bold NUNITO_SANS text-xl px-2 py-1 rounded-lg mt-1 mb-3 cursor-pointer hover:bg-[#e8e7e3] duration-initial duration-200"
      >
        {'<'} back
      </button>
      <h1 className="font-extrabold NUNITO_SANS text-4xl mb-6">Card Details</h1>
      <CardDetailComponent id={id} />
    </div>
  );
};

export default CardDetail;
