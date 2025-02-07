/**
 * A component that renders two buttons for navigating the swiper.
 * The first button navigates to the previous slide and the second button navigates to the next slide.
 * To add Buttons in Swiper should use this two classes:
 *    - prevEL: .swiper-btn-prev
 *    - nextEl: .swiper-btn-next
 * @returns {JSX.Element} Two buttons for navigating the swiper.
 */
const SwiperButtons: React.FC = () => {
    return (
        <>
            <button className="swiper-btn swiper-btn-prev">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
            <button className="swiper-btn swiper-btn-next">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
        </>
    );
};

export default SwiperButtons;