import { CategoryDataType, ProductsDataType } from "./classes";

export class ProductServices {
    static getProducts = async () => {
        try{
            let productsResponse = await fetch('https://api.chec.io/v1/products', {
            method: "GET",
            headers: {
                'X-Authorization': 'pk_56071358605a875a29428978ff87f7f139cafebdd5046',
            }
            });
            const data = await productsResponse.json();
            return data.data;
        }catch(error){
            console.log('Something wrong',error);   
        }
    }

    static getProductById = async (id:number) => {
        try{
            let productsResponse = await fetch('https://api.chec.io/v1/products/'+id, {
            method: "GET",
            headers: {
                'X-Authorization': 'pk_56071358605a875a29428978ff87f7f139cafebdd5046',
            }
            });
            const data = await productsResponse.json();
            return data;
        }catch(error){
            console.log('Something wrong',error);
        }
    }

    static getCategory = async () => {
        try {
            let category: CategoryDataType[] = [];
            const response = await fetch('https://api.chec.io/v1/categories/',{
                method: "GET",
                headers: {
                    'X-Authorization': 'pk_56071358605a875a29428978ff87f7f139cafebdd5046',
                    Accept: "application/json",
                            "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            category = data.data;
            return category;

        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    static addToCart = async (prodId:any) => {
        const response = await fetch("https://api.chec.io/v1/carts/cart_zkK6oLWDG6wXn0", {
        method: "POST",
        headers: {
            "X-Authorization": "pk_56071358605a875a29428978ff87f7f139cafebdd5046",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "id": prodId,
            quantity: 1
        })
        })
        return response;
    }

    static removeCartItem = async (prodId:string) => {
        const response = await fetch(`https://api.chec.io/v1/carts/cart_zkK6oLWDG6wXn0/items/${prodId}`, {
        method: "DELETE",
        headers: {
            "X-Authorization": "pk_56071358605a875a29428978ff87f7f139cafebdd5046",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            cart_id: "cart_zkK6oLWDG6wXn0",
            id: prodId
        })
        })
        const data = await response.json();
        return data;
    }

    static fetchingCartProducts = async () =>{
        const response = await fetch("https://api.chec.io/v1/carts/cart_zkK6oLWDG6wXn0", {
          method: "GET",
          headers: {
              "X-Authorization": "pk_56071358605a875a29428978ff87f7f139cafebdd5046",
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
      })
      const data = await response.json();
      return data;
    }

    //filter product by category
    static filterProducts = async (category: string) => {
        let filteredProducts: ProductsDataType[] = [];
        const products = await this.getProducts();
        filteredProducts = products.filter((p: ProductsDataType) => {
        return p.categories[0].slug === category;
        });
        return filteredProducts;
    }
}