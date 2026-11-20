"use client";

import NoteCardEditor from "@/components/NotecardEditor";
import {useState} from "react";
import {Toast} from "@/components/Toast";
import useToast from "@/hooks/useToast";
import Link from "next/link";


export default function Home() {
    const [title, setTitle] = useState("");
    const [cardContent, setCardContent] = useState("");
    const {showToast, toast} = useToast();

    return (
        <>
            <Link className="absolute top-6 left-6 p-4 rounded-xl bg-sky-500 text-white" href="/">Back</Link>

            <div className="flex flex-col flex-1 items-center justify-center">
                <main className="flex flex-1 w-full flex-col items-center justify-between p-8">
                    <NoteCardEditor title={title} content={cardContent} setContent={setCardContent}
                                    setTitle={setTitle}></NoteCardEditor>
                    <button
                        className={"h-12 mt-[-150] p-2 bg-sky-500 rounded-xl cursor-pointer"}
                        onClick={() => {
                            let cards = JSON.parse(localStorage.getItem("cards") || "[]");
                            cards = [...cards, {
                                "title": title,
                                "content": cardContent
                            }];
                            localStorage.setItem(`cards`, JSON.stringify(cards));
                            showToast("Saved successfully!");
                        }}
                    >
                        Save New Card
                    </button>
                </main>
                <Toast message={toast}></Toast>
            </div>
        </>
    );
}

