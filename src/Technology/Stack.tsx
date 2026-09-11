import React from "react";
import type { Idata } from "../TYpe/Type";
import Sel from "./Sel";
// import { Layers3 } from "lucide-react";

const Stack = ({ selected, setSelected }: { selected: Idata[], setSelected: React.Dispatch<React.SetStateAction<Idata[]>> }) => {
    return (
        <div className="card w-full max-w-md border border-slate-100 bg-white shadow-sm">
            <div className="card-body p-7">

                {/* Header */}
                <div>
                    <h2 className="text-base font-bold text-slate-900">
                        Your Stack
                    </h2>

                    {
                        selected.length === 0 ? <p className="mt-1 text-xs text-slate-400">
                            No technologies selected yet.
                        </p> : <p className="mt-1 text-xs text-slate-400">
                            {selected.length} technologyies selected.
                        </p>
                    }
                </div>

                {/* Empty State */}

                {
                    selected.length === 0 ? <div className="mt-3 flex min-h-[100px] flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50/30 px-4 py-5">

                        {/* <Layers3 className="mb-2 h-6 w-6 text-slate-200" /> */}

                        <p className="text-xs text-slate-300">
                            Your stack is empty.
                        </p>

                    </div> : <Sel selected={selected} setSelected={setSelected}></Sel>
                }

            </div>
        </div>
    );
};

export default Stack;