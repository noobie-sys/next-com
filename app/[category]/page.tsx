// import category from '@/sanity/schemaTypes/category'
import React from 'react'
import { client } from '../lib/sanity'
import { simpleProduct } from '../interface';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const getData = async(category : string) => {
    const query = `*[_type == 'product' && category->name == "${category}"]{
        _id,
          "imageUrl" : images[0].asset -> url,
          price ,
          name,
          "slug":slug.current,
          "categoryName" : category->name
      }`

      const response = await client.fetch(query);
      return response
}

const CategoryPage = async ({params} : {params : {category : string}}) => {
    const data  :simpleProduct[] = await getData(params.category)
  return (
    <div className="bg-white ">
    <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Products for {params.category}
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((product) => (
          <div key={product._id} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image"
                src={product.imageUrl}
                width={500}
                height={500}
                priority
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link href={`/product/${product.slug}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {product.categoryName}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default CategoryPage