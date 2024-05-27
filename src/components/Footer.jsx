import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer remove-custom-cursor relative cursor-auto bg-cover bg-no-repeat px-6 py-16 text-[#D0D5DD] lg:px-10 2xl:py-24" id="footer">
            <div className="remove-custom-cursor container">
                <div className="remove-custom-cursor flex flex-col items-center gap-12 ">
                    <a href="/" >
                        <img alt="xield logo" loading="lazy" width="168" height="58" decoding="async" data-nimg="1" className="remove-custom-cursor h-[44px] w-[127px] object-contain md:h-[58px] md:w-48" src="https://xield.io/_next/static/media/xield-logo.9dfddca7.svg" />
                    </a>
                    <div className="remove-custom-cursor flex w-full max-w-96 flex-col items-center gap-11 lg:max-w-none lg:flex-row lg:justify-between lg:gap-0" >
                        <form className="remove-custom-cursor order-2 flex w-full flex-col gap-2 lg:order-3 lg:w-auto items-center">
                            <div className="remove-custom-cursor flex w-full gap-2">
                                <input type="text" placeholder="Enter your email" className="remove-custom-cursor w-full rounded-2xl border border-[#344054] bg-[#070B13] px-5 py-3 font-font-cartograph-cf-regular text-xs" name="email" />
                                <button className="remove-custom-cursor hidden shrink-0 rounded-2xl bg-[#A9BDDC] px-4 font-font-cartograph-cf-bold text-base text-[#070B13] disabled:opacity-50 md:block" type="submit">Notify me</button>
                                <button className="remove-custom-cursor block rounded-2xl bg-[#A9BDDC] px-4 font-font-cartograph-cf-bold text-base text-[#070B13] disabled:opacity-50 md:hidden" type="submit">
                                    <img alt="form-send-icon" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="size-5" src="https://xield.io/_next/static/media/send.411ab3d1.svg" />
                                </button>
                            </div>
                        </form>
                        <div className="remove-custom-cursor order-3 flex w-full items-center justify-center gap-3 lg:order-1 lg:w-auto">
                            <a className="remove-custom-cursor" target="_blank" href="https://twitter.com/Xieldio" >
                                <img alt="x" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="remove-custom-cursor size-[44px]" src="https://xield.io/_next/static/media/x_logo.cc9dbee6.svg" />
                            </a>
                            <a className="remove-custom-cursor" target="_blank" href="https://t.me/+VCe9z4koOZA4NjI1">
                                <img alt="telegram" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="remove-custom-cursor size-[44px]" src="https://xield.io/_next/static/media/telegram_logo.fcefe60e.svg" />
                            </a>
                            <a className="remove-custom-cursor" target="_blank" href="https://www.linkedin.com/company/xield-protocol/" >
                                <img alt="linkedIn" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="remove-custom-cursor size-[44px]" src="https://xield.io/_next/static/media/linkedin_logo.7f330d64.svg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="remove-custom-cursor my-8 block h-[1px] bg-[#344054]"></p>
            <div className="remove-custom-cursor flex flex-col items-center justify-center gap-8 md:flex-row md:gap-0">
                <span className="remove-custom-cursor order-2 text-sm text-[#475467] md:order-1">CFX LABS @ 2024</span>
            </div>
        </footer >
    )
}
