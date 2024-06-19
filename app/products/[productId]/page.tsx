// "use client"
// import {useParams} from 'next/navigation'
interface paramsType {params:{productId:string}}
import React from 'react'


function ProductId({params}:paramsType) {
    // const {productId}=useParams();
    // console.log(params.productId);
  return (
    <div>ProductId {params.productId}</div>
  )
}

export default ProductId