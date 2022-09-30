

export const formatPrice = (number) => {
return new  Intl.NumberFormat('en-IN', {style:"currency", currency:"INR"}).format(number)
}

export const getUniqueValues = (data, type) => {
    let unique = data.map((item)=> item[type])
    if(type === "colors"){
        unique = unique.flat()
        // colors we have array of array , now flat method give only array of items 
    }
    let uniqueValue = new Set(unique)
    
    // in project we can see [all, and then unique items]
    return ["all", ...uniqueValue]
}


 // for colors we need to extra work becz category , compay are array of items but colors is arrya of array 


// export const formatPrice = (number) => {
//     const newNum = Intl.NumberFormat('en-US', {style:"currency", currency:"USD"}).format(number/100)
//     return newNum
// }