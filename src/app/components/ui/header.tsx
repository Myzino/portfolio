// src/app/components/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold"></h1>
                <nav className="space-x-4">
                    <Link href="/about" className="hover:underline">
                        About Me
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                    <Link href="/hobbies" className="hover:underline">
                        Hobbies
                    </Link>
                </nav>
            </div>
        </header>
    );
}
