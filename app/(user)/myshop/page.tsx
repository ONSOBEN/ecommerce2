'use client'
import { ProductType } from '@/lib/constants';
import React, { useEffect, useState } from 'react'

import DataTable, { TableColumn } from 'react-data-table-component';
import { useRouter } from 'next/navigation';
import "@/app/globals.css"

import { useGetProductsQuery } from '@/redux/service/product';
import { HiOutlineExclamationCircle } from "react-icons/hi";

const placeHolderImage = 'https://via.placeholder.com/150'


export default function myshop() {
  const router=useRouter()
  const  [loading,setLoading]=useState(false)
  const[productdetail,setProductDetail]=useState<ProductType>()

  //get data from RTK query
   const {data,isLoading}=useGetProductsQuery({page:1,pageSize:20})
   const [products, setProducts] = useState([]);

   useEffect(() => {
       if (!isLoading && data) {
           setProducts(data); 
       }
   }, [data, isLoading]);

 
const ProductDetail=(product:ProductType)=>{
  setProductDetail(product)
}

  const columns:TableColumn<ProductType>[] = [
    {
        name:'ID',	
        selector:row=>row.id,
        sortable:true,
    },
    {
      name: 'Product Title',
      selector: row => row.name,
      style: {
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
      },
    },
    {
     name:'Seller',
      selector:row=>row.seller,
    },
    {
      name: 'Price (USD)',
      selector: row => row.price +" $",
      sortable:true,
      style: {
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
      },

    },
    {
      name: 'Image',
      selector: (row):JSX.Element|any => <img className='w-[80px] h-[70px]' src={row.image} width={500} height={500}  alt={row.name}/>,
    },

    {
      name: "Action", 
      selector: row => 
        <React.Fragment> 

           <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
  <button  className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative" >
    Edit
  </button>

  <button  className="inline-block rounded-md px-4 py-2 text-sm text-blue-700 hover:text-gray-700 focus:relative" >
    View
  </button>

  <button  className="inline-block rounded-md bg-white px-4 py-2 text-sm text-red-500 shadow-sm focus:relative">
  Delete
  </button>
</div>
        </React.Fragment>
    } 
    
  ];
  return (
    <main>

      <DataTable className=''  progressPending={loading} 	columns={columns} data={products} pagination persistTableHead/>
    </main>
  )
}
  const customStyles = {
    rows: {
      style: {
        minHeight: "20px", 
      },
    },
    headCells: {
      style: {
        paddingLeft: "38px", 
        paddingRight: "8px",
        fontSize: "14px",
        // backgroundColor: "#f1f1f1",
      },
    },
    cells: {
      style: {
        textAlign: "center",
        fontSize: "13px",
        
        
      },
    },
  };  
