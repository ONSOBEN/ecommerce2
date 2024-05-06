

import React from 'react';
import { GlobeDemo } from '@/components/ui/globe_Demo';
import Products from '@/components/product/products';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "final Project ",
    description: "This is home page",
    openGraph:{
        images:"https://media.istockphoto.com/id/1361979526/vector/map-pin-place-marker-location-vector-icon-pin-point-icon-vector-logo-destination-logo-online.jpg?s=612x612&w=0&k=20&c=yzhK0497GmC9efCCGb02go0uj_HiUMQEtmDduY9Qmzs=",
        description:"Home page for mini project",
    }
  };

export default function Home() {
	return (
		<>
			<GlobeDemo />
			<Products />
		</>
	);
}
