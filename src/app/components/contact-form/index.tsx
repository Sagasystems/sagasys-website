"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <div className="relative flex flex-col gap-4 max-w-7xl my-0 mx-auto h-[60vh] py-8">
      <div className="flex flex-col place-items-center gap-4">
        <h1 className={`m-0 text-center text-3xl font-bold`}>Entre em contato</h1>
        <div className="bg-orange-500 max-w-[10%] h-1 w-full"></div>
        <span className="m-0 text-center text-md max-w-[60%]">Se você tem alguma dúvida, sugestão, ou deseja saber mais sobre nossos serviços, ficaremos felizes em ouvir você. Na SagaSys, valorizamos a comunicação direta e com nossos clientes.</span>
      </div>
      <form
        className="mt-6 flex flex-wrap max-w-[70%] my-0 mx-auto gap-y-4 gap-x-2 z-10 items-center justify-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="sr-only">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          className="rounded-md ring-orange-500 bg-white/5 px-3.5 py-2.5 text-black ring-1 ring-inset focus:ring-orange-500 text-sm md:flex-1"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email-address" className="sr-only">
          Email
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          className="rounded-md ring-orange-500 bg-white/5 px-3.5 py-2.5 text-black ring-1 ring-inset focus:ring-orange-500 text-sm md:flex-1"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="rounded-md resize-none ring-orange-500 bg-white/5 px-3.5 py-2.5 text-black ring-1 ring-inset text-sm focus:ring-orange-500 md:w-full "
          maxLength={500}
          rows={8}
          id="about"
          autoComplete="off"
          required
          value={about}
          placeholder="Digite sua mensagem"
          onChange={(e) => setAbout(e.target.value)}
        />
        <button
          type="submit"
          className="flex justify-center rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 md:w-full"
        >
          {loading ? (
            <div
              style={{
                borderTopColor: "transparent",
              }}
              className="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin"
            ></div>
          ) : (
            "Enviar mensagem"
          )}
        </button>
      </form>
    </div>
  );
}
