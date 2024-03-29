"use client"

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Loader from "../loader";

export default function MedicalRecordUpload() {
    const { medicalRecord, setMedicalRecord } = useDashboard();
    const [isLoading, setIsLoading ] = React.useState(false)


    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setMedicalRecord({ url: "/assets/medical-record.pdf" });
            setIsLoading(false)
        }, 3000);
    }

    return(
        <div className="w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">
            <button
                className={classNames(
                    "text-white font-medium py-2 px-4 rounded border border-2",
                    medicalRecord === null ? "bg-blue-500 border-blue-500" : "border-transparent text-green-600" 
                )}
                onClick={handleClick}
            >
                {!isLoading && medicalRecord === null && (<span>Simulate Medical Record Upload</span>)}
                {isLoading && <Loader />}
                {!isLoading && medicalRecord !== null && (
                    <span className="text-green-600 flex flex-row gap-1 items-center">
                        <FaCheck />
                        <span>Medical Record Uploaded</span>
                    </span>
                )}
            </button>
        </div>
    )
}