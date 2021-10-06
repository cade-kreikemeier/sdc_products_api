export interface Product {
  id: number,
  name: string,
  slogan: string,
  description: string,
  category: string,
  default_price: string,
  created_at: Date,
  updated_at: Date,
  features?: Feature[]
}

interface Feature {
  feature: string,
  value: string
}

export interface ProductStyles {
  product_id: string,
  results: Style[]
}

interface Style {
  style_id: number,
  name: string,
  original_price: string,
  sale_price: string,
  'default?': boolean,
  photos: Photo[],
  skus: {
    [sku: string]: Sku
  }
}

interface Photo {
  thumbnail_url: string,
  url: string
}

interface Sku {
  quantity: number,
  size: string
}
