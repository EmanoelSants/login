import { ArrowRightToLine, KeyRound, Mail } from "lucide-react";
import Checkbox from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Google } from "@/components/google";
import { Apple } from "@/components/apple";
import { Facebook } from "@/components/facebook";

export function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center shadow-shape">
      <form
        action="/"
        className="w-96 h-5/6 p-5 flex flex-col item-center bg-zinc-800/30 backdrop-blur-md rounded-xl"
      >
        <h1 className="font-semibold text-center text-xl mb-7">
          Faça Login ou{" "}
          <a
            href="/cadastro"
            className="text-zinc-600 hover:text-zinc-800 duration-200 underline"
          >
            Registre-se
          </a>
          .
        </h1>

        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="email"
              className="ml-1 flex gap-2 items-center text-sm font-medium"
            >
              <Mail className="w-5 h-5" />
              Seu e-mail
            </label>
            <input
              type="text"
              placeholder="Digite o seu nome..."
              className="px-2 text-sm text-zinc-500 h-10 bg-zinc-100/70 shadow-shape rounded-md placeholder:text-zinc-400"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="password"
              className="ml-1 flex gap-2 items-center text-sm font-medium"
            >
              <KeyRound className="w-5 h-5" />
              Sua senha
            </label>
            <input
              type="password"
              placeholder="Digite a sua senha..."
              className="px-2 text-sm text-zinc-500 h-10 bg-zinc-100/70 shadow-shape rounded-md"
            />
          </div>
          <div className="w-full h-auto flex flex-row justify-between">
            <Checkbox />

            <a
              href="/"
              className="text-xs text-zinc-600 hover:text-zinc-800 duration-200 underline mt-1"
            >
              Esqueceu a senha?
            </a>
          </div>
        </div>

        <Button>
          Confirmar e entrar
          <ArrowRightToLine className="w-5 h-5" />
        </Button>

        <div className="w-full h-auto mt-5 flex flex-col gap-2">
          <h1 className="text-xl text-center font-semibold">
            Fazer Login com:
          </h1>

          <div className="w-full h-auto flex flex-col gap-3">
            <Button>
              <Apple />
              Sua conta Apple
            </Button>

            <Button className="bg-blue-500 hover:bg-blue-600 duration-300">
              <Facebook />
              Sua conta Facebook
            </Button>

            <Button variant={"secondary"}>
              <Google />
              Sua conta Google
            </Button>
          </div>
        </div>

        <p className="text-xs font-medium mt-4 text-center">
          Saiba mais sobre nossos{" "}
          <a
            href="/"
            className="hover:text-zinc-300 duration-200 border-b-2 hover:border-zinc-300"
          >
            Termos e Condições
          </a>
          .
        </p>
      </form>
    </div>
  );
}
