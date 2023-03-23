import Image from "next/image";
import {useEffect, useRef} from "react";
import {motion} from "framer-motion"

declare var document: any;

const variants = {
    open: (y: number) => ({
        width: '100%',
        transform: `translateY(-${y}px)`,
    }),
    close: {
        width: '90%',
        transform: 'translateY(0px)',
    },
    openContent: {
        marginTop: '5%',
        width: '85%',
    },
    closeContent: {
        marginTop: '2.5%',
        width: '100%'
    },
    openImage: {
        height: '762px',
    },
    closeImage: {
        height: '500px'
    }
}

export default function Hero({open, setOpen}: {open: boolean, setOpen: any}) {
    const heroImageRef = useRef<any>(null);

    return (
        <div className="w-full flex flex-col items-center gap-12">
            <h1 className="text-center">We Are Sharing</h1>
            <p className="text-center">Expand your simulation skills with detailed tutorials,<br/>research and the
                latest on We Are.</p>
            <motion.div animate={open ? 'open' : 'close'} variants={variants} initial={false}
                        custom={heroImageRef.current?.getBoundingClientRect().y}
                        className="w-[90%] w-full overflow-hidden h-full object-cover cursor-pointer">
                <motion.div animate={open ? 'openImage' : 'closeImage'} variants={variants} initial={false}>
                    <Image ref={heroImageRef} onClick={() => setOpen(!open)} src="/hero.png" width={1512} height={758} alt=""
                           className="object-cover h-full w-full rounded-3xl"/>
                </motion.div>
                <div className="flex flex-col items-center">
                    <motion.div animate={open ? 'openContent' : 'closeContent'} variants={variants} initial={false}>
                        <h2 className={`${open ? 'text-white' : 'text-black'}`}>What Are Soft Skills?</h2>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
