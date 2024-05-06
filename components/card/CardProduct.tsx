import { PinContainer } from "../ui/3d-pin";
import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/redux/feature/counter/couterSlice";
import { addToCart, selectProducts } from "@/redux/feature/addToCart/cartSlice";
import { CartProductType, ProductType } from "@/lib/constants";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import React from "react";
const CardProduct = (props: CartProductType) => {
  const products = useAppSelector(selectProducts);
  console.log(products);
  console.log(props.id);
  const disPatch = useAppDispatch();
  return (
    <>
      <div className="w-[300px] " onClick={props.onClick}>
        <PinContainer title={props.seller}>
          <div className="max-w-[300px] ">
            <Card
              isFooterBlurred
              className="w-full   h-[300px] col-span-12 sm:col-span-5"
            >
              <CardHeader className="absolute z-10 top-1  flex-col items-start ">
                <div className="absolute top-0 right-0 bg-white dark:bg-gray-800 py-1 px-2 rounded text-sm text-gray-900 dark:text-white">
                  ${props.price}
                </div>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={props.image}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-md">{props.name}</p>
                </div>
                <Button
                  className="text-tiny"
                  color="primary"
                  radius="full"
                  size="sm"
                  onClick={() => {
                    disPatch(
                      addToCart({
                        id: props.id,
                        name: props.name,
                        price: props.price,
                        image: props.image,
                        seller: props.seller,
                        desc: props.desc,
                        quantity: props.quantity,
                      })
                    );
                    disPatch(increment());
                  }}
                >
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          </div>
        </PinContainer>
      </div>
    </>
  );
};
export default CardProduct;
