import Image from "next/image"
import { Chat } from "@/components/Chat"
import { Layout } from "@/components/layout"

function EmbeddedChatPage() {
  return (
    <Layout>
      <div className="mx-auto flex min-h-screen flex-col items-center  py-2">
        <main className="mx-auto  flex min-h-screen w-full flex-1 flex-col items-center  px-4 py-2 text-center sm:mt-20">
          <h1 className="mb-6 max-w-xl text-2xl font-bold sm:text-4xl">
            Ask me anything
          </h1>
          <div className="mx-auto w-full max-w-6xl">
            <Chat apiPath="docs" />
            <div className="mt-8 flex flex-col items-center justify-center "></div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default EmbeddedChatPage
