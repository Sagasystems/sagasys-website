import { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/app/components/contact-form/emailtemplate";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextApiResponse) {
  const { name, email, about } = await req.json();

  try{
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "contato@sagasys.com.br",
      subject: "Hello World",
      react: EmailTemplate({
        name: name,
        email: email,
        about: about,
      }) as React.ReactElement,
    });
    return Response.json(data)
  } catch(err) {
    return Response.json({err})
  }
}
