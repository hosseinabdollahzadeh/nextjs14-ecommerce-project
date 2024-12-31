import {getFetch} from "@/utils/fetch";
import {use} from "react";
import {cookies} from "next/headers";
import EditForm from "@/components/profile/info/EditForm";

export default async function ProfilePage() {
    const token = cookies().get('token');
    const user = await getFetch("/profile/info", {'Authorization': `Bearer ${token.value}`})
    return (
        <div className="vh-70">
            <EditForm user={user}/>
        </div>
    )
}