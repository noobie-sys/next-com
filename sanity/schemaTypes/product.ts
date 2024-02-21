// schemas/pet.js
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the product',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Product Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'images',
      title: 'Product Image',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      title: 'Description of Product',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name : 'price_id',
      title : "Stripe ID",
      type : 'string'
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Product Category',
      to: [{type: 'category'}],
    },
  ],
}
