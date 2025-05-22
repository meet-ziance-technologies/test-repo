import { createContext, ReactNode, useContext } from 'react';
import { Property } from '../../../util/types/property.types';
import { PropertyData } from '../../../util/propData/property.data';
import { BuyNow, Description, Features, Image, Price, SoldOut, Title } from './_components';

const context = createContext<Property>(PropertyData);

export const propertyCardContext = () => {
  return useContext(context);
};

interface PropertyCardProps {
  item: Property;
  children?: ReactNode;
}

export default function PropertyCard(props: PropertyCardProps) {
  return <context.Provider value={props.item}>{props.children}</context.Provider>;
}

PropertyCard.title = Title;
PropertyCard.image = Image;
PropertyCard.price = Price;
PropertyCard.features = Features;
PropertyCard.soldOut = SoldOut;
PropertyCard.description = Description;
PropertyCard.buyNow = BuyNow;
