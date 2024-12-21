import Features from "@/components/Features";
import {getFetch} from "@/utils/fetch";
import ProductsTab from "@/components/products/ProductsTab";

export default async function Home() {
    const productsTab = await getFetch('/products/products-tabs')
    console.log(productsTab);
    return (
        <>
            <Features/>
            <ProductsTab tabList={productsTab.tabList} tabPanel={productsTab.tabPanel}/>
        </>

    );
}
