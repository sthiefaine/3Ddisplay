
import { Header } from "./components/Header";
import { ModelView } from "./components/ModelView";
import { Options } from "./components/Options";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex h-[100dvh] flex-col items-center justify-center px-6 py-24 text-center">
        <ModelView />
        <Options />
      </main>
    </>
  );
}
