import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import {useState} from "react";

export default function Home() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`min-h-screen transition-all duration-[3000] ${open ? 'bg-[#0E1111] bg-opacity-95' : 'bg-gradient-to-r from-[#dae2f8] to-[#d6a4a4]'}`}>
            <Header open={open} setOpen={setOpen} />
            <div className="relative">
                <Hero open={open} setOpen={setOpen} />
            </div>
        </div>
    )
}
