"use client"

import { useDashboard} from "@/context/dashboard-context";
import classNames from "classnames";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Loader from "../loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GuidelinesUpload() {
    const { medicalRecord, guidelinesFile, setGuidelinesFile } = useDashboard();
    const [isLoading, setIsLoading ] = React.useState(false)

    const handleClick = () => {
        if (!medicalRecord) {
            toast.error("Please upload medical record first")
        } else {
            setIsLoading(true);
            setTimeout(() => {
                setGuidelinesFile({ url: "/assets/guidelines.pdf" });
                setIsLoading(false)
            }, 3000);
        }
    }

    return(
        <div className="w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">
            <button
                className={classNames(
                    "text-white font-medium py-2 px-4 rounded border border-2",
                    guidelinesFile === null ? "bg-orange-500 border-orange-500" : "border-transparent text-green-600" 
                )}
                onClick={handleClick}
            >
                {!isLoading && guidelinesFile === null && (<span>Simulate Guidelines Upload</span>)}
                {isLoading && <Loader />}
                {!isLoading && guidelinesFile !== null && (
                    <span className="text-green-600 flex flex-row gap-1 items-center">
                        <FaCheck />
                        <span>Guidelines File Uploaded</span>
                    </span>
                )}
            </button>
            <ToastContainer />
        </div>
    )
}