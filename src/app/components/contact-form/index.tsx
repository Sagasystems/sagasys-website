"use client";

import { FormEvent, useRef, useState } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState<string | null>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    if (!captcha) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        html: "Por favor marque a opção <b>Não sou um robô</b> para continuar",
        confirmButtonText: "OK",
        confirmButtonColor: "#ED8936",
      });

      setLoading(false);

      return false;
    }

    if (name == "" || email == "" || about == "" || !captcha) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor preencha todos os campos",
        confirmButtonColor: "#ED8936",
        confirmButtonText: "OK",
      });

      setLoading(false);
      return false;
    }

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ name, email, about }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Mensagem enviada",
            html: `<p>Olá, ${name}</p><p>Agradecemos o contato e assim que possível iremos retornar!</p>`,
            confirmButtonColor: "#ED8936",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
          setName("");
          setEmail("");
          setAbout("");
        } else {
          Swal.fire({
            icon: "error",
            title: "Desculpe",
            html: `<p>Olá, ${name}</p><p>Infelizmente houve um erro ao enviar sua mensagem, por favor tente novamente mais tarde!</p>`,
            confirmButtonColor: "#ED8936",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Desculpe",
          html: `<p>Olá, ${name}</p><p>Infelizmente houve um erro ao enviar sua mensagem, por favor tente novamente mais tarde!</p>`,
          confirmButtonColor: "#ED8936",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      });
    return true;
  };

  return (
    <div id="contact" className=" bg-gray-100">
      <div className="relative flex flex-col gap-4 max-w-7xl my-0 mx-auto h-auto min-h-[60vh] py-8">
        <div className="flex flex-col place-items-center gap-4">
          <h3 className={`m-0 text-3xl font-bold`}>Entre em contato</h3>
          <div className="bg-orange-500 h-1 w-[70%] md:max-w-[10%]"></div>
          <span className="m-0 text-center text-md max-w-[60%]">
            Se você tem alguma dúvida, sugestão, ou deseja saber mais sobre
            nossos serviços, ficaremos felizes em ouvir você. Na SagaSys,
            valorizamos a comunicação direta com nossos clientes.
          </span>
        </div>
        <form
          className="mt-6 flex flex-wrap max-w-[70%] my-0 mx-auto gap-y-4 gap-x-2 z-10 items-center justify-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col md:flex-row gap-4 w-full">
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
              className="rounded-md ring-orange-500 bg-white px-3.5 py-2.5 text-black ring-1 ring-inset focus:ring-orange-700 focus:outline-orange-500 text-sm w-full "
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
              className="rounded-md ring-orange-500 bg-white px-3.5 py-2.5 text-black ring-1 ring-inset focus:ring-orange-700 focus:outline-orange-500  text-sm w-full"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            className="rounded-md resize-none ring-orange-500 bg-white px-3.5 py-2.5 text-black ring-1 ring-inset text-sm focus:ring-orange-700 focus:outline-orange-500 w-full "
            maxLength={500}
            rows={8}
            id="about"
            autoComplete="off"
            required
            value={about}
            placeholder="Digite sua mensagem"
            onChange={(e) => setAbout(e.target.value)}
          />
          <div className="w-full flex md:flex-row flex-col items-center justify-center gap-4 h-auto max-h-[95px]">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={setCaptcha}
            />
            <button
              type="submit"
              className="flex justify-center rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 w-full md:h-[80px] h-auto items-center"
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
          </div>
        </form>
      </div>
    </div>
  );
}
