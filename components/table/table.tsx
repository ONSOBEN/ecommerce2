'use client';

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";
import {EyeIcon} from "./EyeIcon";
import { ProductType } from "@/lib/constants";
import { useDeleteProductMutation, useGetProductsQuery } from '@/redux/service/product';
import React, { useEffect, useState } from 'react'

const statusColorMap: Record<string, ChipProps["color"]>  = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
const columns = [
    {name: "ID", uid: "id"},
    {name: "IMAGE", uid: "image"},
    {name: "TITLE", uid: "title"},
    {name: "PRICE", uid: "price"},
    {name: "ACTIONS", uid: "actions"},
  ];


export default function App() {
    const {data,isLoading,isFetching}=useGetProductsQuery({page:1,pageSize:20})
   const [products, setProducts] = useState([]);
   const[productId,setId] =useState(0)
  const renderCell = React.useCallback((product: ProductType, columnKey: React.Key) => {
    const cellValue = product[columnKey as keyof ProductType];

    switch (columnKey) {
      case "id":
        return (
            <div className="flex flex-col">
                <p className="text-bold text-sm text-default-400">{product.id}</p>
            </div>
        );
      case "image":
        return (
          <div className="flex flex-col">
            <img src={product.image} alt="product" className="w-10 h-10 rounded-lg" />
          </div>
        );
      case "title":
        return (
            <div className="flex flex-col">
            <p className="text-bold text-sm text-default-400">{product.name}</p>
        </div>
        );
        case "price":
            return (
                <div className="flex flex-col">
                <p className="text-bold text-sm text-default-400">{product.price}</p>
            </div>
            );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
  <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
    <TableBody items={products}>
        {(item:any) => (
            <TableRow key={item.id}>
               {(columnKey) => {
  const cellContent = renderCell(item, columnKey);
  if (typeof cellContent === 'object' && 'name' in cellContent) {
    return <TableCell>{cellContent.name}</TableCell>;
  }
  return <TableCell>{cellContent}</TableCell>;
}}
            </TableRow>
        )}
    </TableBody>
    </Table>
  );
}
