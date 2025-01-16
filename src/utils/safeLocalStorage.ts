export const safeLocalStorage = <T>(key: string, defaultValue: T) => {
    return {
        set: (item: T) => {
            return localStorage.setItem(key, JSON.stringify(item));
        },
        get: (): T => {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;            
        },
    };
};
