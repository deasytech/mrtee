import { SignIn } from "@clerk/nextjs";

export async function generateStaticParams() {
  return [
    { slug: [] },
  ];
}

export default function Page() {
  return <SignIn />;
}