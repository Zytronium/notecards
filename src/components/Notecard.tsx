export default function NoteCard({ title, content, blur }: { title: string, content: string, blur: boolean }) {
    return (
        <div className="w-screen flex-col h-screen scale-50 bg-gray-50 text-mauve-800 rounded-3xl flex justify-center align-top text-4xl">
            <span className={"text-6xl text-blue-950 font-bold pt-4 pb-6 px-2 border-b-3 w-full text-center border h-48 border-b-red-600/80 whitespace-pre-line wrap-anywhere"}>{title}</span>
            <div className={`flex w-full h-full notecard-lines py-1 px-4 leading-12.5 overflow-hidden ${blur ? "" : "blur-xl"} wrap-anywhere`}>
                {content}
            </div>
        </div>
    );
}
