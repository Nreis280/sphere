import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <nav className="absolute right-1 top-1">
        <ModeToggle />
      </nav>

      <aside className="h-screen hidden lg:block">
        <Image src="/login.png" alt="login" width={554} height={832} />
      </aside>

      <div>
        <div className="size-[75px] bg-rose-600 rounded-full"></div>
        <h1 className="text-4xl font-extrabold uppercase">Sphere</h1>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="entrar">entrar</TabsTrigger>
            <TabsTrigger value="registrar">registrar</TabsTrigger>
          </TabsList>
          <TabsContent value="entrar">
            <h1>forms login</h1>
          </TabsContent>
          <TabsContent value="registrar">
          <h1>forms registrar</h1>
          </TabsContent>
        </Tabs>
      </div>

    </main>
  );
}
