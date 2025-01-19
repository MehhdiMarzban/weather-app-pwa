"use client";

const ErrorPage: React.FC<{ error: Error & { digest?: string }; reset: () => void }> = ({
    error,
    reset,
}) => {
    return (
        <html>
            <body>
                <section className="text-center card card-body bg-slate-100 shadow-md flex flex-col items-center justify-center overflow-hidden">
                    <h1 className="text-2xl font-bold">متاسفانه مشکلی در اجرای برنامه پیش آمده</h1>
                    <h2 className="text-xl">{error.message}</h2>
                    <button className="btn btn-primary" onClick={reset}>
                        تلاش مجدد
                    </button>
                </section>
            </body>
        </html>
    );
};

export default ErrorPage;
