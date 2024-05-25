import Image from "next/image";
import Link from "next/link";
import { ChakraProvider } from '@chakra-ui/react';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Card1 from "./pages/card/page";
// import NavBar from "./pages/navbar/page";



export default function Home() {
  return (
    <ChakraProvider>
      {/* <div className="bg-blue-500 flex justify-around">

      

        <Link href={'/home'}>
          Home
        </Link>

        <Link href={'/brands'} className="m-5 bg-gray-900 text-white px-3 py-1 rounded mt-5 inline-block hover:bg-opacity-0 border hover:border-black hover:text-gray-900  w-fit">
          Brands
        </Link>

        <Link href={'/payment-methods'} className="m-5 bg-gray-900 text-white px-3 py-1 rounded mt-5 inline-block hover:bg-opacity-0 border hover:border-black hover:text-gray-900  w-fit">
          Payment methods
        </Link>

        <Link href={'/all-birds-products'} className="m-5 bg-gray-900 text-white px-3 py-1 rounded mt-5 inline-block hover:bg-opacity-0 border hover:border-black hover:text-gray-900  w-fit">
        All BIRDS Products
        </Link>

<Link href={'/birds-breeding-vitamins'} className="m-5 bg-gray-900 text-white px-3 py-1 rounded mt-5 inline-block hover:bg-opacity-0 border hover:border-black hover:text-gray-900  w-fit">
          Birds Breeding Vitamins
        </Link>

        <Link href={'/birds-cages-and-stands'} className="m-5 bg-gray-900 text-white px-3 py-1 rounded mt-5 inline-block hover:bg-opacity-0 border hover:border-black hover:text-gray-900  w-fit">
          Birds Cages And Stands
        </Link>

        <Link href={'/birds-food-and-treats'} className="m-5 bg-gray-900 text-white px-3 py-1 rounded mt-5 inline-block hover:bg-opacity-0 border hover:border-black hover:text-gray-900  w-fit">
          Birds Food And Treats
        </Link>

        <Link href={'/birds-rings-and-accessories'} className="m-5 bg-gray-900 text-white px-3 py-1 rounded mt-5 inline-block hover:bg-opacity-0 border hover:border-black hover:text-gray-900  w-fit">
        Birds Rings And Accessories
        </Link>

        <Link href={'/birds-seeds'} className="m-5 bg-gray-900 text-white px-3 py-1 rounded mt-5 inline-block hover:bg-opacity-0 border hover:border-black hover:text-gray-900  w-fit">
        Birds Seeds
        </Link>


        
      </div> */}
      <div className="flex justify-center">
      {/* <Image
        alt="travel"
        src="/img/bg-home.jpeg"
        width={1000} height={1000}
        
      /> */}
      
      <div>
      <Card1/>
      <Card1/>
      <Card1/>
      <Card1/>
      
      </div>

      <div>
      <Card1/>

      <Card1/>
      <Card1/>
      <Card1/>
      </div>
      
      </div>
    </ChakraProvider>

  );
}
