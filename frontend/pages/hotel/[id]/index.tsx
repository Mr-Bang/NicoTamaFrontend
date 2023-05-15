import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <div>Hotel: {router.query.slug}</div>
}
