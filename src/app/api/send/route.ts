import { NextApiResponse } from "next";
import { EmailTemplate } from "@/app/components/contact-form/emailtemplate";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextApiResponse) {
  const { name, email, about } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "contato@sagasys.com.br",
      subject: "Nova mensagem",
      react: EmailTemplate({
        name: name,
        email: email,
        about: about,
      }) as React.ReactElement,
    });
    return Response.json({ status: 200, data: data });
  } catch (err) {
    return Response.json({
      status: 500,
      data: "Erro ao enviar mensagem, tente novamente mais tarde!",
    });
  }
}
