'use client'
import React from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://next-commerce-omega-one.vercel.app/stripe/success"
      currency="USD"
      cancelUrl="https://next-commerce-omega-one.vercel.app/stripe/error"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"

    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
