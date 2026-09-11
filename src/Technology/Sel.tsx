import React from 'react';
import type { Idata } from '../TYpe/Type';
// import { X } from 'lucide';
import { toast } from 'react-toastify';

const Sel = ({ selected, setSelected }: { selected: Idata[], setSelected: React.Dispatch<React.SetStateAction<Idata[]>> }) => {
    const handleDel = (id: number) => {
        toast.success("Successfully Removed One");
        const updatedSelected = selected.filter((data) => data.id !== id);
        setSelected(updatedSelected);
    };
    const removeAll = () => {
        const newdata: Idata[] = [];
        toast.success("Successfully Removed All");
        setSelected(newdata);
    }
    return (

        <div>
            <div className="space-y-2">
                {
                    selected.map((data: Idata, ind: number) =>
                        <div key={ind} className="card w-full border border-slate-200 bg-white shadow-sm">
                            <div className="card-body flex-row items-center justify-between p-4">

                                {/* Left: Icon + Details */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center">
                                        <img
                                            src={data.icon}
                                            alt={data.name}
                                            className="h-9 w-9 object-contain"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-800">
                                            {data.name}
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            {data.category}
                                        </p>
                                    </div>

                                    <div>
                                        <button className="ml-2 rounded-full bg-slate-100 p-1 text-slate-400 transition" onClick={() => handleDel(data.id)}>
                                            X
                                        </button>
                                    </div>
                                </div>



                            </div>
                        </div>)
                }
            </div >
            <div className="mt-3 flex  flex-col items-center justify-center rounded-lg border border border-red-500 bg-slate-50/30 px-4 py-2">
                <button className='text-red-500 font-bold' onClick={removeAll} >
                    Remove All
                </button>
            </div>
        </div>
    );
};

export default Sel;