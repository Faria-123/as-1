import React from "react";
import { Layers3 } from "lucide-react";

const YourStack = () => {
    return (
        <div className="card w-full max-w-md border border-slate-100 bg-white shadow-sm">
            <div className="card-body p-5">

                {/* Header */}
                <div>
                    <h2 className="text-base font-bold text-slate-900">
                        Your Stack
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                        No technologies selected yet.
                    </p>
                </div>

                {/* Empty State */}
                <div className="mt-3 flex min-h-[100px] flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50/30 px-4 py-5">

                    <Layers3 className="mb-2 h-6 w-6 text-slate-200" />

                    <p className="text-xs text-slate-300">
                        Your stack is empty.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default YourStack;