export function Toast({ message }: { message: string | null }) {
    if (!message) return null;

    return (
        <div className="fixed bottom-4 right-4 z-[9999] rounded-xl bg-zinc-700 text-white px-4 py-3 transition-opacity duration-500">
            {message}
        </div>
    );
}