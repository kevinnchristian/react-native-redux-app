export interface IProduct {
  id: number,
  name: string,
  brand: string,
  image: string,
  price: number,
}

export interface ICart {
  cart: IProduct[],
}

export interface ICartState {
  cart: {
    cart: IProduct[]
  }
}