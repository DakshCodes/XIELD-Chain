import React from "react"

function Navbar() {

    return (
        <div className="container sticky z-[100]  flex items-center justify-between py-5 text-sm md:text-xl">
            <a href="/">
                <img alt="xield logo" className="remove-custom-cursor h-[44px] w-[127px] object-contain md:h-[58px] md:w-[168px]" src="https://xield.io/_next/static/media/xield-logo.9dfddca7.svg" />
            </a>
            <a className="remove-custom-cursor  flex cursor-pointer items-center gap-2 rounded-full border px-5 py-3 uppercase lg:px-8" href="/#footer" >
                Notify Me
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
            </a>
        </div>
    )
}
export default Navbar
