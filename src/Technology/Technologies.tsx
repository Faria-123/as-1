import { use, useState } from 'react';
import type { Idata } from '../TYpe/Type';
import Explore from './Explore';
import Stack from './Stack';
interface dataprop {
    data: Promise<Idata[]>
}
const Technologies = ({ data }: dataprop) => {
    const datas: Idata[] = use(data);
    console.log(datas);
    const [selected, setSelected] = useState<Idata[]>([]);
    return (
        <div className="container mx-auto ">
            <div className="space-y-2 mb-7"><h1 className='text-[2.1rem] font-extrabold'>Explore the <span className="gradient-txt">Technologies</span>
            </h1>
                <h1 className='text-[#64748B]'>Pick one technology per category to build your ideal stack.</h1>
            </div>
            <div className="flex gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {datas.map((data: Idata, ind: number) => <Explore key={ind} data={data} selected={selected} setSelected={setSelected} ></Explore>)}
                </div>
                <div>
                    <Stack selected={selected} setSelected={setSelected}></Stack>
                </div>
            </div>
        </div>
    );
};

export default Technologies;