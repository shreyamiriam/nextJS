import React from 'react'
import ProductId from '../../page'

function ReviewId({params}:{params:{productId:string,reviewId:string}}) {
    const {productId,reviewId}=params
  return (
    <div>Product id {productId} ReviewId{reviewId}</div>
  )
}

export default ReviewId