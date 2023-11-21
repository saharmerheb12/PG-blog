// api/subscribe.ts

import { NextRequest } from "next/server";

interface SubscriptionRequestBody {
  email: string;
}

export async function POST(req: NextRequest) {
  var message = "";
  if (req.method !== "POST") {
    message = "Method Not Allowed";
  } else {
    const { email }: SubscriptionRequestBody = await req.json();
    try {
      const response = await fetch(
        "https://api.mailerlite.com/api/v2/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY
          } as HeadersInit,
          body: JSON.stringify({ email, name: "subscriber" })
        }
      );
      if (response.ok) {
        console.log("Subscription successful!");
        // TODO: You might want to redirect the user or show a success message
      } else {
        console.error("Subscription failed.");
        // TODO: Handle error scenarios
      }
      console.log(`Subscription [${email}]: ${message}`);
    } catch (error) {
      console.error(`Error during subscription:[${email}]:${error}`);
      message = "Internal Server Error";
    }
  }

  return new Response(message, {
    status: message === "success" ? 200 : 400
  });
}
