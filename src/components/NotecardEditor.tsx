import {ReactNode} from "react";

export default function NoteCardEditor({title, content, setContent, setTitle}: { title: string, content: string, setContent: (content: string) => void, setTitle: (title: string) => void }) {
    return (
        <div className="w-screen flex-col h-screen scale-50 bg-gray-50 text-mauve-800 rounded-3xl flex justify-center align-top text-4xl">
            <textarea
                id="card-title"
                className={"text-6xl text-blue-950 font-bold pt-4 pb-6 px-2 border-b-3 w-full text-center border h-48 border-b-red-600/80"}
                value={title}
                onChange={
                    (e) => setTitle(e.target.value)
                }
            />
            <textarea
                id="card-content"
                className={"flex w-full h-full notecard-lines py-1 px-4 leading-12.5 overflow-hidden"}
                value={content}
                onChange={
                    (e) => setContent(e.target.value)
            }
            />
        </div>
    );
}
