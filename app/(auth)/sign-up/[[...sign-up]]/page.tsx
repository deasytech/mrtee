import { SignUp } from "@clerk/nextjs";

export async function generateStaticParams() {
  return [
    { slug: [] },
  ];
}

export default function Page() {
  return <SignUp />;
}