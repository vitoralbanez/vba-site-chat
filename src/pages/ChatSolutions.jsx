export default function ChatSalesPage() {
  const plans = [
    {
      name: 'Plano 1',
      channels: '1 canal',
      users: '5 usuários',
      price: 'R$ 150/mês',
      highlight: 'Ideal para quem quer começar',
    },
    {
      name: 'Plano 2',
      channels: '2 canais',
      users: '7 usuários',
      price: 'R$ 250/mês',
      highlight: 'Perfeito para operação em crescimento',
      featured: true,
    },
    {
      name: 'Plano 3',
      channels: '3 canais',
      users: '9 usuários',
      price: 'R$ 300/mês',
      highlight: 'Mais controle para equipes comerciais',
    },
    {
      name: 'Plano 4',
      channels: '4 canais',
      users: '11 usuários',
      price: 'R$ 350/mês',
      highlight: 'Estrutura robusta para atendimento',
    },
    {
      name: 'Plano 5',
      channels: '5 canais',
      users: '15 usuários',
      price: 'R$ 420/mês',
      highlight: 'Operação pronta para escalar',
    },
  ];

  const solutions = [
    {
      title: 'Chat Empresarial',
      description:
        'Centralize WhatsApp e outros canais em uma única operação, com histórico, organização e visão completa do atendimento.',
      items: ['Múltiplos usuários', 'Histórico de conversas', 'Atendimento organizado', 'Visão por equipe'],
    },
    {
      title: 'API para Integrações',
      description:
        'Conecte automações, CRM, sistemas internos e fluxos personalizados para transformar atendimento em processo.',
      items: ['Integração com sistemas', 'Automação de rotinas', 'Fluxos personalizados', 'Escalabilidade operacional'],
    },
    {
      title: 'Backup de Conversas',
      description:
        'Guarde mensagens, contatos e histórico corporativo para não perder informação quando aparelhos forem trocados ou resetados.',
      items: ['Retenção de histórico', 'Segurança da informação', 'Preservação de contatos', 'Base para auditoria e consulta'],
    },
  ];

  const differentiators = [
    'Implantação pensada para a realidade da sua empresa',
    'Servidor, operação e suporte com visão prática',
    'Soluções que podem evoluir para automações futuras',
    'Estrutura pronta para vendas, atendimento e retenção de histórico',
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
                VBA Solutions • Chat, API e Backup
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
                Venda atendimento profissional, integração inteligente e histórico protegido.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Uma página comercial pensada para mostrar que seu cliente não está contratando só um chat, mas uma estrutura completa
                para atendimento, automação e proteção das conversas da empresa.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#planos"
                  className="rounded-2xl bg-white px-6 py-3 text-center font-semibold text-zinc-950 transition hover:opacity-90"
                >
                  Ver planos
                </a>
                <a
                  href="#solucoes"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Conhecer soluções
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Atendimento centralizado</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Integrações via API</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Backup de mensagens</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Estrutura escalável</div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-cyan-400/20 bg-zinc-900 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-zinc-400">Visão da operação</p>
                    <h2 className="text-xl font-semibold">Solução comercial completa</h2>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    pronto para vender
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ['Chat', 'Centralização do atendimento em um único ambiente'],
                    ['API', 'Integrações e automações para ganhar escala'],
                    ['Backup', 'Preservação do histórico e segurança operacional'],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-base font-semibold">{title}</h3>
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-amber-100">
                  Usuário adicional: <strong>R$ 10/mês por usuário</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Soluções</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Mais que um chat. Uma estrutura comercial e operacional.</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-300">
            O foco aqui é vender valor real: organização, velocidade, retenção de informação e capacidade de crescer com processos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className="text-2xl font-semibold">{solution.title}</h3>
              <p className="mt-4 text-zinc-300 leading-7">{solution.description}</p>
              <div className="mt-6 space-y-3">
                {solution.items.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Por que contratar</span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Seu cliente compra tranquilidade operacional.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
                A proposta precisa deixar claro que perder mensagens, depender de um único aparelho ou não ter processo gera prejuízo.
                Aqui a comunicação vira ativo da empresa.
              </p>
            </div>

            <div className="grid gap-4">
              {differentiators.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Planos</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Escolha o plano ideal para o tamanho da operação.</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-300">
            Estrutura simples de entender, fácil de apresentar e pronta para evoluir conforme a empresa cresce.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-5 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[1.75rem] border p-6 shadow-lg transition hover:-translate-y-1 ${
                plan.featured
                  ? 'border-cyan-400/40 bg-cyan-400/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {plan.featured && (
                <span className="inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-zinc-950">
                  MAIS VENDIDO
                </span>
              )}
              <h3 className="mt-4 text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-zinc-300">{plan.highlight}</p>
              <div className="mt-6 text-3xl font-bold">{plan.price}</div>
              <div className="mt-6 space-y-3 text-sm text-zinc-200">
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3">{plan.channels}</div>
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3">{plan.users}</div>
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3">Usuário extra: R$ 10</div>
              </div>
              <button className="mt-6 w-full rounded-2xl bg-white px-4 py-3 font-semibold text-zinc-950 transition hover:opacity-90">
                Quero esse plano
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/20 via-white/5 to-emerald-400/20 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Call to action</span>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                Quer vender isso de forma profissional já no site?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-200">
                Posicione a VBA Solutions como parceira de atendimento, integração e retenção de histórico. Não é só ferramenta: é estrutura.
              </p>
            </div>
            <div className="grid gap-4">
              <a href="#" className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-zinc-950 transition hover:opacity-90">
                Solicitar apresentação
              </a>
              <a href="#" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10">
                Falar com a equipe
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
