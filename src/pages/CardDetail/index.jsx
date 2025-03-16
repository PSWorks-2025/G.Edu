import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardDetailComponent from '../../globalComponents2/CardDetailComponent'

const CardDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="mt-16">
      <h1 className="font-extrabold NUNITO_SANS text-4xl mb-6">Card Details</h1>
      <CardDetailComponent id={id} />
    </div>
  );
};

export default CardDetail;
