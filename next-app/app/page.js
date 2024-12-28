import Features from "@/components/Features";
import {getFetch} from "@/utils/fetch";
import ProductsTab from "@/components/products/ProductsTab";
import About from "@/components/About";
import Contact from "@/components/contact/Contact";

export default async function Home() {
    const productsTab = await getFetch('/products/products-tabs')
    return (
        <>
            <Features/>
            <ProductsTab tabList={productsTab.tabList} tabPanel={productsTab.tabPanel}/>
            <About />
            <Contact />
        </>

    );
}
