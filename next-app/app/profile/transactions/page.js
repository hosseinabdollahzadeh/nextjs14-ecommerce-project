import Table from "@/components/profile/transactions/Table";
import {Suspense} from "react";
import Loading from "@/components/profile/transactions/Loading";

export default function TransactionsPage({searchParams}) {
    const params = new URLSearchParams(searchParams)
    return (
        <Suspense key={params.toString()} fallback={<Loading />}>
            <Table params={params.toString()}/>
        </Suspense>
    )
}