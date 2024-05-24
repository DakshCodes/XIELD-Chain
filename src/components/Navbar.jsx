import React from "react"

function Navbar() {

    return (
        <div className="container sticky z-[100]  flex items-center justify-between py-5 text-sm md:text-xl">
            <a href="/">
                <img alt="xield logo" className="remove-custom-cursor h-[44px] w-[127px] object-contain md:h-[58px] md:w-[168px]" src="https://xield.io/_next/static/media/xield-logo.9dfddca7.svg" />
            </a>
            <a className="remove-custom-cursor  flex cursor-pointer items-center gap-2 rounded-full border px-5 py-3 uppercase lg:px-8" href="/#footer" >
                Notify Me
                <img alt="right arrow" src="https://xield.io/_next/static/media/right-arrow.b51e8e92.svg" />
            </a>
        </div>
    )
}
export default Navbar
