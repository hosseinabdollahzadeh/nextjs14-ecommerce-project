"use client"
import SubmitButton from "@/components/SubmitButton";
import {useFormState} from "react-dom";
import {checkOtp, login} from "@/actions/auth";
import {useContext, useEffect} from "react";
import {toast} from "react-toastify";
import AuthContext from "@/context/AuthContext";

export default function CheckOtpForm() {
    const [stateOtp, formActionOtp] = useFormState(checkOtp, {})
    const {loginContext} = useContext(AuthContext)
    useEffect(() => {
        toast(stateOtp?.message, {type: `${stateOtp.status}`})
        if (stateOtp?.status === 'success') {
            loginContext(stateOtp.user)
        }
    }, [stateOtp]);
    return (
        <div className="card-body">
            <div className="form_container">
                <form action={formActionOtp}>
                    <div className="mb-3">
                        <label className="form-label">کد ورود</label>
                        <input name="otp" type="text" className="form-control"/>
                    </div>
                    <SubmitButton title="تأیید" style="btn btn-primary btn-auth"/>
                </form>
            </div>
        </div>
    )
}