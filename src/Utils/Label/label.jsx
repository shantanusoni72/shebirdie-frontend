import './style.css';

export default function Label(props) {
    return (
        <div className="label">
            <span>
                <svg width={props.side} height={props.side} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_445_19)">
                        <path d="M21.625 24.125C21.625 24.788 21.8884 25.4239 22.3572 25.8928C22.8261 26.3616 23.462 26.625 24.125 26.625C24.788 26.625 25.4239 26.3616 25.8928 25.8928C26.3616 25.4239 26.625 24.788 26.625 24.125C26.625 23.462 26.3616 22.8261 25.8928 22.3572C25.4239 21.8884 24.788 21.625 24.125 21.625C23.462 21.625 22.8261 21.8884 22.3572 22.3572C21.8884 22.8261 21.625 23.462 21.625 24.125Z" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.6875 24.125C5.6875 24.788 5.95089 25.4239 6.41973 25.8928C6.88857 26.3616 7.52446 26.625 8.1875 26.625C8.85054 26.625 9.48643 26.3616 9.95527 25.8928C10.4241 25.4239 10.6875 24.788 10.6875 24.125C10.6875 23.462 10.4241 22.8261 9.95527 22.3572C9.48643 21.8884 8.85054 21.625 8.1875 21.625C7.52446 21.625 6.88857 21.8884 6.41973 22.3572C5.95089 22.8261 5.6875 23.462 5.6875 24.125Z" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M26.625 24.125H28.1875C28.6848 24.125 29.1617 23.9275 29.5133 23.5758C29.865 23.2242 30.0625 22.7473 30.0625 22.25V14.75C30.0625 13.7554 29.6674 12.8016 28.9641 12.0983C28.2609 11.3951 27.3071 11 26.3125 11H21.625" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21.625 24.125V7.25C21.625 6.75272 21.4275 6.27581 21.0758 5.92417C20.7242 5.57254 20.2473 5.375 19.75 5.375H3.8125C3.31522 5.375 2.83831 5.57254 2.48667 5.92417C2.13504 6.27581 1.9375 6.75272 1.9375 7.25V22.25C1.9375 22.7473 2.13504 23.2242 2.48667 23.5758C2.83831 23.9275 3.31522 24.125 3.8125 24.125H5.6875" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21.625 24.125H10.6875" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M1.9375 18.5H21.625" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6.625 18.5V11" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M11.3125 18.5V11" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16 18.5V11" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M30.0625 16.625H21.625" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_445_19">
                            <rect width="32" height="32" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
                <p style={{'fontSize':`${props.fontSize}`}}>Ships Next Business Day</p>
            </span>
            <span>
                <svg width={props.side} height={props.side} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_445_13)">
                        <path d="M5.6875 12.25C5.6875 14.985 6.77399 17.6081 8.70796 19.542C10.6419 21.476 13.265 22.5625 16 22.5625C18.735 22.5625 21.3581 21.476 23.292 19.542C25.226 17.6081 26.3125 14.985 26.3125 12.25C26.3125 9.51496 25.226 6.89193 23.292 4.95796C21.3581 3.02399 18.735 1.9375 16 1.9375C13.265 1.9375 10.6419 3.02399 8.70796 4.95796C6.77399 6.89193 5.6875 9.51496 5.6875 12.25Z" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M20.6875 21.4363L22.5625 30.0625L16 26.3125L9.4375 30.0625L11.3125 21.4363" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16.6641 6.36495L18.2241 9.43745H20.8828C21.0292 9.43388 21.1732 9.47455 21.2961 9.55414C21.419 9.63374 21.515 9.74856 21.5716 9.8836C21.6281 10.0186 21.6427 10.1676 21.6132 10.311C21.5838 10.4544 21.5118 10.5856 21.4066 10.6875L18.9666 13.085L20.3178 16.1912C20.3774 16.3335 20.3909 16.4909 20.3562 16.6412C20.3216 16.7915 20.2406 16.9271 20.1247 17.0289C20.0088 17.1307 19.8639 17.1935 19.7103 17.2085C19.5568 17.2235 19.4025 17.1899 19.2691 17.1125L16.0003 15.2737L12.7316 17.1125C12.5982 17.1899 12.4438 17.2235 12.2903 17.2085C12.1368 17.1935 11.9918 17.1307 11.876 17.0289C11.7601 16.9271 11.6791 16.7915 11.6444 16.6412C11.6098 16.4909 11.6232 16.3335 11.6828 16.1912L13.0353 13.085L10.5941 10.6825C10.4889 10.5806 10.4169 10.4494 10.3874 10.306C10.358 10.1626 10.3725 10.0136 10.4291 9.8786C10.4857 9.74356 10.5817 9.62874 10.7045 9.54915C10.8274 9.46955 10.9715 9.42888 11.1178 9.43245H13.7766L15.3378 6.36495C15.4016 6.24433 15.497 6.14338 15.6138 6.07296C15.7307 6.00254 15.8645 5.96533 16.0009 5.96533C16.1374 5.96533 16.2712 6.00254 16.3881 6.07296C16.5049 6.14338 16.6003 6.24433 16.6641 6.36495Z" stroke="#4F5AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_445_13">
                            <rect width="32" height="32" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
                <p style={{'fontSize':`${props.fontSize}`}}>30-Day Return Policy</p>
            </span>
        </div>
    )
}