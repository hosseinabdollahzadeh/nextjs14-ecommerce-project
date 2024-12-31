import Table from "@/components/profile/orders/Table";
import {Suspense} from "react";
import Loading from "@/components/profile/orders/Loading";

export default function OrdersPage({searchParams}) {
    const params = new URLSearchParams(searchParams)
    return (
        <Suspense key={params.toString()} fallback={<Loading />}>
            <Table params={params.toString()}/>
        </Suspense>
    )
}