"use client";

import React, { useEffect, useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { Button } from '../ui/button';
import dynamic from 'next/dynamic';

export interface TransactionConfig {
  reference?: string,
  email: string,
  amount: number,
  publicKey?: string,
  currency?: string,
}

const PaystackPayment = ({
  reference = (new Date()).getTime().toString(),
  email,
  amount,
  publicKey = process.env.NEXT_PUBLIC_PS_PUBLIC_KEY!,
  currency = "NGN",
}: TransactionConfig) => {
  const [ isClient, setIsClient ] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const initializePayment = usePaystackPayment({ reference, email, amount, currency, publicKey });

  const onSuccess = (reference: any) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log('Payment closed');
  };

  return (
    <div className="p-8">
      {isClient && (
        <Button onClick={() => initializePayment({ onSuccess, onClose })}>
          Paystack Hooks Implementation
        </Button>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(PaystackPayment), { ssr: false });
