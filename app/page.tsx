"use server";

import { Header } from "@/components/Header/Header";
import { ModelView } from "@/components/Models/ModelView";
import { Options } from "@/components/Models/Options";
import { getModelsList } from "./actions/models.action";
import { App } from "@/components/App";

async function getData() {
  const results =  await getModelsList();
  if (!results) {
    return []
  }
  return results;
}


export default async function Home() {

  const data = await getData();

  return (
    <>
      <Header />
      <main className="flex h-[100dvh] flex-col items-center justify-center px-6 py-24 text-center">
        <App data={data}>
        <ModelView />
        <Options />
        </App>

      </main>
    </>
  );
}
