import { getSettings } from "@/lib/sanity/client";
import Contact from "./contact";

export default async function ContactPage() {
  const settings = await getSettings();
  console.log("page.settings", settings);
  return <Contact settings={settings} />;
}

// export const revalidate = 60;
