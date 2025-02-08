import { MiniLoading } from "@/components";

const LoadingPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-slate-800 bg-opacity-30 rounded-md p-4">
                <p className="text-2xl animate-bounce text-white">لطفا صبر کنید</p>
            </div>
        </div>
    );
};

export default LoadingPage;
