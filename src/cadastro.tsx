import { CheckCheck, KeyRound, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cadastro() {
  return (
    <div className="w-full h-screen bg-pattern bg-cover flex items-center justify-center">
      <form
        action="/"
        className="w-96 h-5/6 p-5 flex flex-col item-center bg-black/30 backdrop-blur-md rounded-xl"
      >
        <h1 className="font-semibold text-center text-lg mb-7">
          Insira seus dados para se cadastrar, ou se já tiver uma conta, faça{" "}
          <a
            href="/"
            className="text-sky-300 hover:text-sky-400 duration-200 underline"
          >
            login
          </a>
          .
        </h1>

        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="name"
              className="ml-1 flex gap-2 items-center text-sm font-medium"
            >
              <User className="w-5 h-5" />
              Seu nome completo
            </label>
            <input
              type="text"
              placeholder="Digite o seu nome..."
              className="px-2 text-sm text-zinc-500 h-10 bg-zinc-100/70 shadow-shape rounded-md placeholder:text-zinc-400"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="email"
              className="ml-1 flex gap-2 items-center text-sm font-medium"
            >
              <Mail className="w-5 h-5" />
              Seu melhor e-mail
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
              Digite sua senha
            </label>
            <input
              type="password"
              placeholder="Digite sua senha..."
              className="px-2 text-sm text-zinc-500 h-10 bg-zinc-100/70 shadow-shape rounded-md"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="password"
              className="ml-1 flex gap-2 items-center text-sm font-medium"
            >
              <KeyRound className="w-5 h-5" />
              Confirme sua senha
            </label>
            <input
              type="password"
              placeholder="Confirme sua senha..."
              className="px-2 text-sm text-zinc-500 h-10 bg-zinc-100/70 shadow-shape rounded-md"
            />
          </div>
        </div>
        <Button className="mt-5">
          Confirmar cadastro
          <CheckCheck />
        </Button>

        <p className="text-xs mt-5">
          Leia nossos{" "}
          <a
            href="/"
            className="hover:text-zinc-300 duration-200 border-b-2 hover:border-zinc-300"
          >
            Termos e Condições
          </a>{" "}
          e{" "}
          <a
            href="/"
            className="hover:text-zinc-300 duration-200 border-b-2 hover:border-zinc-300"
          >
            Políticas de Privacidade
          </a>
          .
        </p>
      </form>
    </div>
  );
}
