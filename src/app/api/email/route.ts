import { NextResponse } from "next/server";
import { Resend } from "resend";

import WelcomeEmail from "@/src/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName } = await request.json();
  await resend.emails.send({
    from: "email@sender.com", //onboarding@resend.dev for testing purposes
    to: "example@reciever.com", //input email here
    subject: "hello world",
    react: WelcomeEmail({
      firstName,
    }),
  });

  return NextResponse.json({
    status: "Ok",
  });
}
