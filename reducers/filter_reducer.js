import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
// import products_reducer from './products_reducer'

const filter_reducer = (state, action) => {
  if(action.type=== LOAD_PRODUCTS){
    let maxPrice = action.payload.map((p)=>p.price)
    //in math.max we cannot pass array so using spread operator 
    maxPrice = Math.max(...maxPrice)
    // console.log(maxPrice)
    return {...state, all_products:[...action.payload], filter_products:[...action.payload], 
      filters:{...state.filters, max_price: maxPrice, price:maxPrice}}
    // if we set only filters:{max_price: maxPrice} then rest of the values will be deletd so make sure we copy all of them and 
  }
  if(action.type === SET_GRIDVIEW ){
    return {...state, grid_view:true}
  }
  if(action.type === SET_LISTVIEW ){
    return {...state, grid_view:false}
  }
  if(action.type === UPDATE_SORT){
    return{...state, sort:action.payload}
  }
  if(action.type === SORT_PRODUCTS){
    const {sort, filter_products} = state
    let tempProducts = [...filter_products]
    if(sort === "price-lowest"){
       tempProducts = tempProducts.sort((a,b)=>{
        return a.price - b.price
       })
    }
    if(sort === "price-highest"){
      tempProducts = tempProducts.sort((a,b)=>{
        return b.price - a.price
       })
    }
    if(sort === "name-a"){
      tempProducts = tempProducts.sort((a,b)=>{
        return a.name.localeCompare(b.name)
       })
    }
    if(sort === "name-z"){
      tempProducts = tempProducts.sort((a,b)=>{
        return b.name.localeCompare(a.name)
       })
    }
    return {...state, filter_products :tempProducts}
  }
  if(action.type === UPDATE_FILTERS){
    const {name, value} = action.payload

    return {...state, filters:{...state.filters, [name]:value }}
    // According to videos  -- return {...state, filters:{...state.filters, [name]:value }} 
    // [name] -- is dynamic update study from JS nuggets 
    //value property is not there for category (becz its a button)
  }


  if(action.type === FILTER_PRODUCTS){
    const {all_products} = state
    const {text, category, company, color, price, shipping} = state.filters
   

    let tempProducts = [...all_products]
// text
    if(text){
      tempProducts = tempProducts.filter((product)=>{
        return product.name.toLowerCase().startsWith(text)
      } )
    }
    //catogery 
    if(category !== "all"){
      tempProducts = tempProducts.filter((products)=>category === products.category)
    }
    //company 
    if(company !== "all"){
      tempProducts = tempProducts.filter((product)=>company === product.company)
    }
    // color
    //in product  colors are  in  array 
    if(color !== "all"){
      tempProducts = tempProducts.filter((product)=>{
        return product.colors.find((c)=> c === color)
      })
    }
    //price 
    if(price){
      tempProducts = tempProducts.filter((product)=>product.price <= price )
    }

    //shipping 
    if(shipping){
      tempProducts = tempProducts.filter((product)=> product.shipping === true)
    }


    return {...state, filter_products : tempProducts}
  }


  if(action.type === CLEAR_FILTERS){
    return {...state, 
      filters: {
        ...state.filters,
      text:"",
      company:"all",
      category:"all",
      color:"all",
       price:state.filters.max_price,
      shipping:false,}
  }
}
  // returning back to default


  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer;





// a.name.localeCompare(b.name)  -- search google for sorting Acoording to alphebets 
// return {...state, all_products:[...action.payload], filter_products:[...action.payload]}

// since we have all_products and filter_products same at begining  once we change filterd products all products also will be filterd out

// if user wants to see all products back after filtring 
// then all products also will be updated to filterd products 
// to avoid this we are copying (by spread operator) so that all_products will always copies from products in producer_reducer