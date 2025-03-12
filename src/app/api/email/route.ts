import { NextResponse } from "next/server";
import { Resend } from "resend";

import WelcomeEmail from "@/src/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  await resend.emails.send({
    from: "example@email.dev",
    to: "example@destination.dev",
    subject: "hello world",
    react: WelcomeEmail(),
  });

  return NextResponse.json({
    status: "Ok",
  });
}
