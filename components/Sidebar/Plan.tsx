import React from "react";

export const Plan = () => {
    return (
        <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs">
            <div className="flex items-center justify-between">
                <div>
                    <a className="block font-bold">Enterprise</a>
                    <a className="text-stone-500">Pay as you go</a>
                </div>

                <button className="px-2 py-1.5 font-medium bg-stone-200 hover::bg-stone-300 rounded transition-colors">
                    Support
                </button>
            </div>
        </div>
    )
}