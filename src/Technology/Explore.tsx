import React from 'react';
import type { Idata } from '../TYpe/Type';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify/unstyled';
// import { toast } from 'react-toastify';
interface ExploreProps {
    data: Idata;
    selected: Idata[];
    setSelected: React.Dispatch<React.SetStateAction<Idata[]>>;
}
const Explore = ({ data, selected, setSelected }: ExploreProps) => {
    const {
        name,
        category,
        description,
        icon,
        rating,
        difficulty,
        badge,
    } = data;
    const isSelected = selected.some((item) => item.id === data.id);
    // let [btnState, setBtnState] = useState<string>("Add to Stack");
    const handleBtn = () => {

        toast.success("Added to Stack");
        const newselected = [...selected, data];
        setSelected(newselected);

    }
    return (
        <div>
            <div className={`card w-full max-w-sm ${isSelected ? 'border border-purple-500' : 'bg-white'} shadow-sm transition hover:-translate-y-1 hover:shadow-md`}>
                <div className="card-body p-5">

                    {/* Top: Icon + Badge */}
                    <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center">
                            <img
                                src={icon}
                                alt={`${name} icon`}
                                className="h-9 w-9 object-contain"
                            />
                        </div>

                        <span className="badge rounded-full border border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50 px-3 py-3 text-xs font-medium text-pink-500">
                            {badge}
                        </span>
                    </div>

                    {/* Technology Name */}
                    <h2 className="mt-4 text-lg font-bold text-slate-900">
                        {name}
                    </h2>

                    {/* Description */}
                    <p className="mt-1 min-h-[72px] text-sm leading-5 text-slate-500">
                        {description}
                    </p>

                    {/* Divider */}
                    <div className="my-3 border-t border-slate-100"></div>

                    {/* Metadata */}
                    <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="badge border-0 bg-slate-100 px-2 py-3 text-slate-600">
                            {category}
                        </span>

                        <span className="text-slate-500">
                            {difficulty}
                        </span>

                        <span className="flex items-center gap-1 font-medium text-slate-700">
                            <span className="text-amber-400">★</span>
                            {rating}
                        </span>
                    </div>

                    {/* Add Button */}
                    {/* <button
                        onClick={() => handleBtn("Added to Stack")}
                        className="btn mt-4 min-h-8 h-8 w-full rounded-lg border-0 bg-slate-950 text-xs font-medium text-white hover:bg-slate-800"
                        disabled={btnState === "Added to Stack"}
                    >
                        {btnState === "Added to Stack" ? "Added to Stack" : "Add to Stack"}
                    </button> */}

                    <button
                        onClick={handleBtn}
                        className={`btn mt-4 h-8 min-h-8 w-full rounded-lg  bg-slate-950 text-xs font-medium  hover:bg-slate-800 ${isSelected ? 'border border-red-500 text-red-500 bg-transparent' : 'text-white'}`}
                        disabled={isSelected}
                    >

                        {isSelected ? "Added to Stack" : "Add to Stack"}
                    </button>


                </div>
            </div>
        </div>
    );
};

export default Explore;

