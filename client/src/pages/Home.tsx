/**
 * Terminal Atelier reminder: compose this page like an editorial workbench—dark graphite surfaces,
 * paper inserts, Forge Amber signals, asymmetric sections, and motion that clarifies rather than decorates.
 */
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Check, ChevronRight, Code2, Copy, Github, Instagram, Mail, Menu, Sparkles, Terminal, X } from "lucide-react";
import { toast } from "sonner";

const heroImage = "/manus-storage/codeforge-hero_8af923e2.png";
const detailImage = "/manus-storage/codeforge-detail_2ecfe55f.png";
const markImage = "/manus-storage/codeforge-mark_eedc7bfe.png";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText("npx create-codeforge@latest");
    toast.success("Command copied to clipboard");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#151514] text-[#F3F0E8] selection:bg-[#E8A23A] selection:text-[#151514]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#151514]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <button onClick={() => scrollToId("top")} className="group flex items-center gap-3 text-left" aria-label="Back to top">
            <img src={markImage} alt="Codeforge mark" className="h-9 w-9 rounded-sm object-cover" />
            <span className="font-display text-lg font-bold tracking-[-0.04em]">code<span className="text-[#E8A23A]">/</span>forge</span>
          </button>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
            <button className="nav-link" onClick={() => scrollToId("workbench")}>Workbench</button>
            <button className="nav-link" onClick={() => scrollToId("principles")}>Principles</button>
            <button className="nav-link" onClick={() => scrollToId("about")}>About the build</button>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-white/15 p-2 text-[#E8A23A] transition hover:border-[#E8A23A] md:hidden" aria-label="Toggle navigation">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          <button onClick={() => scrollToId("about")} className="hidden items-center gap-2 border-b border-[#E8A23A] pb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#E8A23A] transition hover:text-white md:flex">
            Meet the makers <ArrowUpRight size={14} />
          </button>
        </div>
        {menuOpen && <div className="border-t border-white/10 bg-[#151514] px-5 py-5 md:hidden"><div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.16em] text-white/65"><button onClick={() => { scrollToId("workbench"); setMenuOpen(false); }}>Workbench</button><button onClick={() => { scrollToId("principles"); setMenuOpen(false); }}>Principles</button><button onClick={() => { scrollToId("about"); setMenuOpen(false); }}>About the build</button></div></div>}
      </header>

      <section id="top" className="relative min-h-[760px] border-b border-white/10 pt-[74px]">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151514] via-[#151514]/90 to-[#151514]/30" />
        <div className="relative mx-auto grid min-h-[686px] max-w-[1440px] grid-cols-1 items-end gap-10 px-5 pb-16 md:grid-cols-[1.1fr_.9fr] md:px-10 md:pb-24">
          <div className="max-w-[760px]">
            <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#E8A23A]"><span className="h-px w-9 bg-[#E8A23A]" />Build log / 001</div>
            <h1 className="font-display text-[clamp(4rem,10vw,9.2rem)] font-bold leading-[0.84] tracking-[-0.08em] text-[#F5F1E8]">Make it<br /><span className="ml-[8vw] text-[#E8A23A]">make sense.</span></h1>
            <p className="mt-10 max-w-[500px] text-lg leading-relaxed text-white/65 md:ml-[8vw]">A focused corner of the internet for programmers who care about the invisible part: the decisions, systems, and craft behind useful software.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4 md:ml-[8vw]"><button onClick={() => scrollToId("workbench")} className="group flex items-center gap-4 bg-[#E8A23A] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#151514] transition hover:bg-white active:scale-[.98]">Open the workbench <ArrowDownRight size={16} className="transition group-hover:translate-x-1 group-hover:translate-y-1" /></button><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">Owner: Pranam</span></div>
          </div>
          <div className="mb-3 justify-self-start md:justify-self-end">
            <div className="w-[260px] border border-white/20 bg-[#151514]/75 p-4 font-mono text-[11px] leading-6 text-white/50 backdrop-blur-md md:w-[300px]"><div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 text-[#E8A23A]"><span>current_focus</span><span className="h-2 w-2 animate-pulse bg-[#E8A23A]" /></div><div><span className="text-white/30">01</span> designing useful abstractions</div><div><span className="text-white/30">02</span> writing code worth revisiting</div><div><span className="text-white/30">03</span> sharing the messy middle</div><div className="mt-3 border-t border-white/10 pt-3 text-white/30">status: <span className="text-[#E8A23A]">in progress_</span></div></div>
          </div>
        </div>
      </section>

      <section id="workbench" className="relative border-b border-[#151514]/10 bg-[#E8A23A] text-[#151514]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-[180px_1fr]">
          <div className="border-b border-[#151514]/20 p-5 font-mono text-[10px] uppercase tracking-[0.18em] md:border-b-0 md:border-r md:p-8"><span className="block text-[#151514]/50">02 / 04</span><span className="mt-2 block">The workbench</span></div>
          <div className="grid gap-10 p-6 md:grid-cols-[1fr_1.2fr] md:p-14 lg:p-20">
            <div><p className="font-mono text-xs uppercase tracking-[0.16em] text-[#151514]/55">Tools for deliberate builders</p><h2 className="mt-5 max-w-[480px] font-display text-4xl font-bold leading-[.95] tracking-[-.06em] md:text-6xl">A place to think in systems.</h2></div>
            <div className="flex flex-col justify-between gap-10"><p className="max-w-[560px] text-lg leading-relaxed text-[#151514]/70">Codeforge collects practical notes, sharp experiments, and small tools that help programmers move from “it works” to “I understand why it works.”</p><button onClick={() => toast.info("The workbench is being stocked with new builds.")} className="flex w-fit items-center gap-3 border-b border-[#151514] pb-2 font-mono text-xs uppercase tracking-[0.16em] transition hover:gap-5">Browse the build notes <ChevronRight size={15} /></button></div>
          </div>
        </div>
      </section>

      <section id="principles" className="border-b border-white/10 bg-[#F3F0E8] text-[#151514]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-[180px_1fr]">
          <div className="border-b border-black/15 p-5 font-mono text-[10px] uppercase tracking-[0.18em] md:border-b-0 md:border-r md:p-8"><span className="block text-black/40">03 / 04</span><span className="mt-2 block">Principles</span></div>
          <div className="grid gap-10 p-6 md:grid-cols-2 md:p-14 lg:p-20"><div><p className="font-mono text-xs uppercase tracking-[0.16em] text-black/45">The operating system</p><h2 className="mt-5 font-display text-4xl font-bold leading-[.95] tracking-[-.06em] md:text-6xl">Small details.<br /><span className="text-[#A66A15]">Strong signal.</span></h2><img src={detailImage} alt="Editorial workbench detail" className="mt-12 h-44 w-full object-cover grayscale contrast-125 md:h-60" /></div><div className="divide-y divide-black/15 border-t border-black/15">{[{n:"01",t:"Clarity is a feature",d:"Naming, structure, and intent are part of the product—not documentation left for later."},{n:"02",t:"Make the invisible visible",d:"Share the trade-offs, rough edges, and mental models behind the finished interface."},{n:"03",t:"Leave a better trail",d:"The best build is one another person can enter, understand, and carry forward."}].map(item => <div key={item.n} className="py-7"><div className="flex gap-6"><span className="font-mono text-xs text-[#A66A15]">{item.n}</span><div><h3 className="font-display text-2xl font-semibold tracking-[-.03em]">{item.t}</h3><p className="mt-3 max-w-[410px] leading-relaxed text-black/55">{item.d}</p></div></div></div>)}</div></div>
        </div>
      </section>

      <section id="about" className="bg-[#151514]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <div className="mb-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#E8A23A]"><span className="h-px w-9 bg-[#E8A23A]" />The people behind the build</div>
          <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-end">
            <div><h2 className="max-w-[720px] font-display text-5xl font-bold leading-[.9] tracking-[-.07em] md:text-8xl">Good software<br /><span className="text-white/35">has a point of view.</span></h2><p className="mt-8 max-w-[540px] text-lg leading-relaxed text-white/60">Codeforge is a focused workshop for ambitious programmers, shaped by one owner and strengthened by one steady supporter.</p></div>
            <div className="border-l border-[#E8A23A] pl-6"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">A note from the makers</div><p className="mt-4 font-display text-2xl leading-tight text-white/85">“Build the part you’ll still understand six months from now.”</p></div>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <article className="group border border-white/15 bg-[#20201D] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#E8A23A]/70 md:p-8"><div className="flex items-start justify-between"><div><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E8A23A]">01 / Owner</div><h3 className="mt-5 font-display text-4xl font-bold tracking-[-0.06em] text-white">Pranam</h3></div><div className="grid h-12 w-12 place-items-center border border-[#E8A23A]/50 font-display text-xl text-[#E8A23A]">P<span className="sr-only">Pranam</span></div></div><p className="mt-8 max-w-[420px] leading-relaxed text-white/60">The builder behind Codeforge—setting the direction, shaping the systems, and turning complex ideas into useful software.</p><div className="mt-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35"><Terminal size={14} className="text-[#E8A23A]" /> direction / craft / code</div></article>
            <article className="group border border-white/15 bg-[#F3F0E8] p-6 text-[#151514] transition duration-200 hover:-translate-y-1 hover:border-[#E8A23A] md:mt-10 md:p-8"><div className="flex items-start justify-between"><div><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A66A15]">02 / Supporter</div><h3 className="mt-5 font-display text-4xl font-bold tracking-[-0.06em]">Tanish</h3></div><div className="grid h-12 w-12 place-items-center border border-[#A66A15]/50 font-display text-xl text-[#A66A15]">T<span className="sr-only">Tanish</span></div></div><p className="mt-8 max-w-[420px] leading-relaxed text-black/60">The steady force behind the work—keeping the signal clear, the momentum real, and the best ideas moving forward.</p><div className="mt-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-black/40"><Sparkles size={14} className="text-[#A66A15]" /> support / clarity / momentum</div></article>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8"><div className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Choose a channel</div><div className="grid gap-4 md:grid-cols-2"><a href="https://www.instagram.com/not_your_pranam/" target="_blank" rel="noreferrer" className="group flex min-h-[170px] flex-col justify-between border border-[#E8A23A]/70 bg-[#E8A23A] p-6 text-[#151514] transition hover:-translate-y-1 hover:bg-white md:p-8"><div className="flex items-start justify-between"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#151514]/55">Social / Instagram</div><Instagram size={28} strokeWidth={1.5} className="transition group-hover:rotate-12" /></div><div><div className="font-display text-3xl font-bold tracking-[-0.05em]">@not_your_pranam</div><div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#151514]/60">Open the conversation ↗</div></div></a><a href="mailto:pranamb67@gmail.com" className="group flex min-h-[170px] flex-col justify-between border border-white/20 bg-[#20201D] p-6 text-white transition hover:-translate-y-1 hover:border-[#E8A23A] md:p-8"><div className="flex items-start justify-between"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E8A23A]">Direct / Email</div><Mail size={28} strokeWidth={1.5} className="text-[#E8A23A] transition group-hover:-rotate-12" /></div><div><div className="break-all font-display text-2xl font-bold tracking-[-0.05em] md:text-3xl">pranamb67@gmail.com</div><div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">Send a message ↗</div></div></a></div></div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0F0F0E] px-5 py-6 md:px-10"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/30 sm:flex-row"><span>© 2026 Codeforge by Pranam</span><span>Supported with intent by Tanish</span><span className="flex items-center gap-2"><Sparkles size={12} className="text-[#E8A23A]" /> build / learn / share</span></div></footer>
    </main>
  );
}
