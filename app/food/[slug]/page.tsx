import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FOOD_GUIDES, getFoodGuide } from '@/lib/food-guides';
import { FRUITS_DATABASE, getFruitBySlug } from '@/lib/fruits-data';
import { getFoodSlugFromPath } from '@/lib/urls';
import FoodArticle, {generateMetadata as foodMetadata} from '@/components/articles/FoodArticle';
import FruitArticle, {generateMetadata as fruitMetadata} from '@/components/articles/FruitArticle';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){
 return [...FOOD_GUIDES,...FRUITS_DATABASE].map(item=>({slug:`can-dogs-eat-${item.slug}`}));
}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug:path}=await params;
 const slug=getFoodSlugFromPath(path);
 if(!slug)return {title:'Food guide not found',robots:{index:false}};
 if(getFruitBySlug(slug))return fruitMetadata({params:Promise.resolve({slug})});
 if(getFoodGuide(slug))return foodMetadata({params:Promise.resolve({slug})});
 return {title:'Food guide not found',robots:{index:false}};
}
export default async function ArticlePage({params}:Props){
 const {slug:path}=await params;
 const slug=getFoodSlugFromPath(path);
 if(!slug)notFound();
 if(getFruitBySlug(slug))return <FruitArticle params={Promise.resolve({slug})}/>;
 if(getFoodGuide(slug))return <FoodArticle params={Promise.resolve({slug})}/>;
 notFound();
}
