'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity';
import { ProductCart } from './AddToBag';



const CheckoutNow = ({name , description , price , currency , image , price_id} : ProductCart) => {
    const { checkoutSingleItem } = useShoppingCart()
    const product = {
        name : name ,
        description : description,
        price : price,
        currency : currency,
        image : urlFor(image).url(),
        price_id : price_id
    }
    function buyNow(priceId : string) {
        checkoutSingleItem(priceId)
    }
  return (
    <Button onClick={() => buyNow(product.price_id)}>
        Checkout now
    </Button>
  )
}

export default CheckoutNow