"use client"
import {useFormState} from "react-dom";
import {useEffect} from "react";
import {toast} from "react-toastify";
import SubmitButton from "@/components/SubmitButton";
import {editInfo} from "@/actions/profile";

export default function EditForm({user}) {
    const [state, formAction] = useFormState(editInfo, {})
    useEffect(() => {
        toast(state?.message, {type: `${state?.status}`})
    }, [state]);
    return (
        <form action={formAction}>
            <div className="row g-4">
                <div className="col col-md-6">
                    <label className="form-label">نام و نام خانوادگی</label>
                    <input name="name" type="text" className="form-control" defaultValue={user.name}/>
                </div>
                <div className="col col-md-6">
                    <label className="form-label">ایمیل</label>
                    <input name="email" type="text" className="form-control" defaultValue={user.email}/>
                </div>
                <div className="col col-md-6">
                    <label className="form-label">شماره تلفن</label>
                    <input type="text" disabled className="form-control" defaultValue={user.cellphone}/>
                </div>
            </div>
            <SubmitButton title="ویرایش" style="btn btn-primary mt-4"/>
        </form>
    )
}