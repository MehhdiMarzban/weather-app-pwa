/**
 * MiniLoading component renders a small, centered, pulsing circle.
 *
 * This component is used to indicate that some data is being loaded.
 */
const MiniLoading: React.FC = () => {
    return <span className="animate-ping bg-primary size-5 rounded-full mx-auto mt-4" />;
};

export default MiniLoading;
