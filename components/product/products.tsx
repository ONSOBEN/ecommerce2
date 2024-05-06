'use client'
import React, { useEffect, useState } from 'react'
import { ProductType } from '@/lib/constants'
import { useRouter } from 'next/navigation'
import CardProduct from '@/components/card/CardProduct'
import { useGetAllProductsQuery } from '@/redux/service/product'
export default function Products() {
  const[products,setProduct]=useState<ProductType[]>([])

  const router = useRouter()
  const[page, setPage] = useState(1);
  const[pageSize, setPageSize] = useState(12);

  const nextPage = () => {
    setPage(page + 1);
};

const prevPage = () => {
    if (page > 1) {
        setPage(page - 1);
    }
};

    const{data,isLoading,isError} = useGetAllProductsQuery({page:page,pageSize:pageSize})
    console.log('this is data',data)	
    
    useEffect(()=>{
      if(data && !isLoading){
        setProduct(data.results)
      }
    },[data,isLoading])


    const renderPageNumbers = (data: any) => {
        const totalPageCount = Math.ceil(data?.total / pageSize);
        const maxPageNumberToShow = Math.min(5, totalPageCount); 
      
        const startPage = Math.max(1, Math.min(page - Math.floor(maxPageNumberToShow / 2), totalPageCount - maxPageNumberToShow + 1));
        const endPage = startPage + maxPageNumberToShow - 1;
      
        const pagesToShow = Array.from({ length: maxPageNumberToShow }, (_, i) => startPage + i).map(i => (
          <button 
            key={i} 
            onClick={() => setPage(i)} 
            className={`px-3 py-1 mx-1 rounded-lg dark:border-white border-black `}
          >
            {i}
          </button>
        ));
      
        return pagesToShow;
      };

  return (
    <main>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-[24px] container mx-auto'>
                {products.map((pro, key) => (
                    <CardProduct
                    
                        key={key}
                        onClick={() => router.push(`/product/${pro.id}`)}
                        name={pro.name}
                        price={pro.price}
                        image={pro.image}
                        seller={pro.seller}
                        id={pro.id}
                        desc={pro.desc}
                    />
                ))}
            </div>
            <div className="flex justify-center p-4 my-[20px]">
                    <button onClick={prevPage} disabled={page === 1} className="px-4 py-2 mx-1 rounded-lg">Previous</button>
                    {renderPageNumbers(data)}
                    <button onClick={nextPage} disabled={isLoading } className="px-4 py-2 mx-1 rounded-lg">Next</button>
                </div>
            
    </main>
  )
}
