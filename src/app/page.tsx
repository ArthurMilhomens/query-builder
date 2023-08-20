'use client'

import Image from "next/image";
import { useState } from "react";
import { Trash2, Stars } from "lucide-react";

import Editor from "react-simple-code-editor";
import { highlight, languages } from 'prismjs';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism.css';

export default function Home() {
  const [code, setCode] = useState("SELECT * FROM");

  return (
    <div className="max-w-[430px] mx-auto pt-12 pb-4">
      <header className="flex items-center justify-between">
        <Image
          src="/Logo.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>

      <form className="py-8 w-full flex flex-col text-foam">
        <label htmlFor="schema" className="text-lg font-light">
          Cole seu código SQL aqui:
        </label>
        <Editor
          textareaId="schema"
          value={code}
          onValueChange={(codeText) => setCode(codeText)}
          highlight={(codeText) => highlight(codeText, languages.sql, 'sql')}
          padding={16}
          textareaClassName="outline-none"
          className="my-4 font-mono h-40 bg-blueberry-600 border border-blueberry-300 rounded-md focus-within:ring-1 focus-within:ring-lime-600"
        />

        <label htmlFor="question" className="text-lg font-light">
          Faça uma pergunta sobre código:
        </label>
        <textarea
          className="my-4 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lime-600"
          name="question"
          id="question"
        />

        <button
          type="submit"
          className="text-pistachio flex items-center justify-center rounded-lg border border-pistachio h-14 gap-2"
        >
          <Stars className="w-6 h-6" />
          Perguntar à inteligência artificial
        </button>
      </form>

      <div className="mt-6">
        <span className="text-lg font-light text-foam">
          Faça uma pergunta sobre código:
        </span>
        <textarea
          readOnly
          className="w-full my-4 bg-transparent border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lime-600"
        />
      </div>
    </div>
  );
}
