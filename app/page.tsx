import Image from "next/image";
import Intro from "./Intro";
import WorkTemplate from "./WorkTemplate";
import DividerTitle from "@/components/ui/DividerTitle";

export default function Home() {
  return (
    <main>
      <Intro />
      <DividerTitle title="Selected Work" />
      <WorkTemplate />
    </main>
  );
}
