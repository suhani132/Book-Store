import React from 'react'

function Cards({item}) {
  console.log(item)
  return (
   <>
   <div className='my-4'>
    <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-Name">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="cursor-pointer border-2 rounded-full px-2 py-1 hover:bg-pink-500 hover:text-white duration-200 p-2">Buy Now</div>
    </div>
  </div>
</div>
</div>
   </>
  )
}

export default Cards
