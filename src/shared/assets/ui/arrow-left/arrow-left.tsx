export const ArrowLeft = () => {
    return (
        <svg width="40" height="63" viewBox="0 0 40 63" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect x="40" width="63" height="40" transform="rotate(90 40 0)" fill="url(#pattern0)" fillOpacity="0.6"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_72_267" transform="matrix(0.00239593 0 0 0.00377358 -0.0067385 0)"/>
                </pattern>
                <image id="image0_72_267" width="423" height="265" xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>
    )
}