"use client";

import NoteCard from "@/components/Notecard";
import {useEffect, useState} from "react";
import {Toast} from "@/components/Toast";
import useToast from "@/hooks/useToast";
import Link from "next/link";

export default function Home() {
    const [title, setTitle] = useState("");
    const [cardContent, setCardContent] = useState("");
    const [showContent, setShowContent] = useState(false);
    const { showToast, toast } = useToast();

    useEffect(() => {
        let cards = JSON.parse(localStorage.getItem("cards") || "[]");
        if (cards.length === 0) {
            cards = [{
                "title": "No cards found.",
                "content": "Click \"Create new card\" to add one.",
            }]
        }
        const selectedCard = cards[Math.floor(Math.random() * cards.length)];
        setTitle(selectedCard.title);
        setCardContent(selectedCard.content);
    }, [])

    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <main className="flex flex-1 w-full flex-col items-center justify-between p-8">
                <NoteCard title={title} content={cardContent} blur={showContent}></NoteCard>
                <div className={"flex flex-row gap-8"}>
                    <button
                        className={"h-12 mt-[-150] p-2 bg-sky-500 rounded-xl cursor-pointer"}
                        onClick={() => {
                            setShowContent(!showContent);
                        }}
                    >
                        {showContent ? "Hide Content" : "Reveal Content"}
                    </button>
                    <button
                        className={"h-12 mt-[-150] p-2 bg-sky-500 rounded-xl cursor-pointer"}
                        onClick={() => {
                            setShowContent(false);

                            let cards = JSON.parse(localStorage.getItem("cards") || "[]");
                            if (cards.length === 0) {
                                cards = [{
                                    "title": "No cards found.",
                                    "content": "Click \"Create new card\" to add one.",
                                }]
                            }
                            let selectedCard = cards[Math.floor(Math.random() * cards.length)];
                            while (selectedCard.title === title && cards.length > 1) {
                                selectedCard = cards[Math.floor(Math.random() * cards.length)];
                            }
                            setTitle(selectedCard.title);
                            setCardContent(selectedCard.content);
                            showToast("New card loaded.", 1250);
                        }}
                    >
                        Load New Card
                    </button>

                    <Link
                        className={"h-12 mt-[-150] p-2 bg-sky-500 rounded-xl cursor-pointer"}
                        href={"/newcard"}
                    >
                        Create New Card
                    </Link>
                </div>
                <Toast message={toast}/>
            </main>
        </div>
    );
}
