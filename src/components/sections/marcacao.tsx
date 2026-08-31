"use client";

import { useState } from "react";

import { RevealText, RevealBlock } from "@/components/motion/reveal";
import { SurfaceFill } from "@/components/ui/surface";
import { brand } from "@/lib/content";

/**
 * Bloco de marcação — versão de demonstração.
 *
 * Não guarda nada nem tem backend: valida no browser, mostra a confirmação
 * e abre o WhatsApp da clínica com a mensagem já escrita. Serve para a
 * cliente ver a experiência antes de decidir. Quando fechar, troca-se o
 * `abrirWhatsApp` por uma server action que grave numa base de dados — o
 * resto do componente fica igual.
 *
 * Feito com estado de React e validação nativa do HTML, de propósito: este
 * site não tem react-hook-form nem zod, e instalar cinco dependências para
 * um formulário de cinco campos era peso a mais.
 */

const SERVICOS = [
  "Consulta de avaliação",
  "Toxina Botulínica",
  "Preenchimentos",
  "Morpheus8",
  "HIFU",
  "Laser",
  "Lipoenzimática",
  "Drenagem Linfática",
  "Outro (digo na consulta)",
] as const;

// Terça a sexta 09:30—19:30, sábado 09:30—14:30 (ver brand.hours). Meias
// horas dariam uma lista longa demais para um select de telemóvel.
const HORAS = [
  "09:30", "10:00", "11:00", "12:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00",
] as const;

type Dados = {
  servico: string;
  dia: string;
  hora: string;
  nome: string;
  telefone: string;
};

const VAZIO: Dados = {
  servico: SERVICOS[0],
  dia: "",
  hora: "",
  nome: "",
  telefone: "",
};

function mensagemWhatsApp(d: Dados) {
  const linhas = [
    `Olá! Queria marcar: ${d.servico}`,
    `Dia ${formatarData(d.dia)} às ${d.hora}`,
    `Nome: ${d.nome}`,
    d.telefone ? `Telefone: ${d.telefone}` : null,
  ].filter(Boolean);
  return linhas.join("\n");
}

function formatarData(iso: string) {
  if (!iso) return "";
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}

export function Marcacao() {
  const [dados, setDados] = useState<Dados>(VAZIO);
  const [enviado, setEnviado] = useState(false);

  const hoje = new Date().toISOString().slice(0, 10);

  function alterar(campo: keyof Dados) {
    return (evento: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setDados((atual) => ({ ...atual, [campo]: evento.target.value }));
  }

  function submeter(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setEnviado(true);
    // Abre numa aba nova para não tirar a cliente do site.
    window.open(
      `${brand.whatsapp}?text=${encodeURIComponent(mensagemWhatsApp(dados))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      id="marcacao"
      aria-labelledby="marcacao-titulo"
      className="relative overflow-hidden bg-bordo text-fundo"
    >
      <SurfaceFill tone="escuro" className="opacity-60" />

      {/* Composição centrada em vez de encostada à esquerda.
          O formulário tem largura fixa e a secção é de largura total, por
          isso metade do ecrã ficava bordo e vazia — a página lia-se "a meio".
          Não foi preciso inventar uma segunda coluna: basta a coluna única
          passar ao centro e o título alinhar com ela. É proporção, não
          conteúdo novo. */}
      <div className="gutter relative py-section">
        <div className="mx-auto w-full max-w-[64rem]">
        <p className="label mb-8 text-fundo/70">Marcação</p>

        <RevealText
          as="h2"
          id="marcacao-titulo"
          className="mb-10 max-w-[14ch] text-[length:var(--text-title)]"
        >
          <span className="ouro-metal-linhas">Escolha o seu momento.</span>
        </RevealText>

        <RevealBlock>
          {enviado ? (
            <Confirmacao
              dados={dados}
              aoRecomecar={() => {
                setDados(VAZIO);
                setEnviado(false);
              }}
            />
          ) : (
            <form
              onSubmit={submeter}
              className="w-full border border-fundo/12 bg-bordo-fundo/60 p-8 backdrop-blur-sm sm:p-12"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <Campo label="Serviço" className="sm:col-span-2">
                  <select
                    required
                    value={dados.servico}
                    onChange={alterar("servico")}
                    className={CAMPO}
                  >
                    {SERVICOS.map((s) => (
                      <option key={s} value={s} className="bg-bordo-fundo text-fundo">
                        {s}
                      </option>
                    ))}
                  </select>
                </Campo>

                <Campo label="Dia">
                  <input
                    required
                    type="date"
                    min={hoje}
                    value={dados.dia}
                    onChange={alterar("dia")}
                    className={CAMPO}
                  />
                </Campo>

                <Campo label="Hora">
                  <select required value={dados.hora} onChange={alterar("hora")} className={CAMPO}>
                    <option value="" className="bg-bordo-fundo text-fundo/50">
                      Escolher hora
                    </option>
                    {HORAS.map((h) => (
                      <option key={h} value={h} className="bg-bordo-fundo text-fundo">
                        {h}
                      </option>
                    ))}
                  </select>
                </Campo>

                <Campo label="Nome">
                  <input
                    required
                    minLength={2}
                    type="text"
                    placeholder="O seu nome"
                    value={dados.nome}
                    onChange={alterar("nome")}
                    className={CAMPO}
                  />
                </Campo>

                <Campo label="Telefone (opcional)">
                  <input
                    type="tel"
                    placeholder="+351 ..."
                    value={dados.telefone}
                    onChange={alterar("telefone")}
                    className={CAMPO}
                  />
                </Campo>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                {/* Chapa dourada animada, igual à do atelier. */}
                <button
                  type="submit"
                  className="label ouro-vivo rounded-full px-8 py-4 transition-shadow duration-500 hover:shadow-[0_0_40px_-12px_var(--color-ouro)]"
                >
                  Confirmar marcação
                </button>
                <p className="label text-fundo/40">Resposta no próprio dia</p>
              </div>
            </form>
          )}
        </RevealBlock>
        </div>
      </div>
    </section>
  );
}

function Confirmacao({ dados, aoRecomecar }: { dados: Dados; aoRecomecar: () => void }) {
  return (
    <div className="w-full border border-ouro/25 bg-bordo-fundo/60 px-8 py-16 text-center backdrop-blur-sm sm:px-12">
      <span
        aria-hidden
        className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-ouro/40 ouro-metal"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <h3 className="mb-6 text-[length:var(--text-sub)]">Pedido enviado</h3>

      <p className="mx-auto mb-10 max-w-[46ch] text-[length:var(--text-lead)] leading-[1.62] text-fundo/70">
        Obrigada, {dados.nome}. Abrimos o WhatsApp com o seu pedido de {dados.servico} para{" "}
        {formatarData(dados.dia)} às {dados.hora}. Confirmamos consigo no próprio dia.
      </p>

      <button type="button" onClick={aoRecomecar} className="label text-fundo/70 hover:text-fundo">
        Fazer outra marcação
      </button>
    </div>
  );
}

const CAMPO =
  "w-full appearance-none border-b border-fundo/20 bg-transparent pb-3 text-[length:var(--text-lead)] font-light text-fundo outline-none transition-colors placeholder:text-fundo/35 focus:border-ouro";

function Campo({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-4 ${className ?? ""}`}>
      <span className="label text-fundo/70">{label}</span>
      {children}
    </label>
  );
}
