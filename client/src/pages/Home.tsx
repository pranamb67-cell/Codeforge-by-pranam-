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
    <main className="min-h-screen overflow-hidden bg-[#080B0D] text-[#EEF5ED] selection:bg-[#B7FF5A] selection:text-[#080B0D]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080B0D]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <button onClick={() => scrollToId("top")} className="group flex items-center gap-3 text-left" aria-label="Back to top">
            <img src={markImage} alt="Codeforge mark" className="h-9 w-9 rounded-sm object-cover" />
            <span className="font-display text-lg font-bold tracking-[-0.04em]">code<span className="text-[#B7FF5A]">/</span>forge</span>
          </button>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
            <button className="nav-link" onClick={() => scrollToId("workbench")}>Workbench</button>
            <button className="nav-link" onClick={() => scrollToId("principles")}>Principles</button>
            <button className="nav-link" onClick={() => scrollToId("about")}>About the build</button>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-white/15 p-2 text-[#B7FF5A] transition hover:border-[#B7FF5A] md:hidden" aria-label="Toggle navigation">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          <button onClick={() => scrollToId("about")} className="hidden items-center gap-2 border-b border-[#B7FF5A] pb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#B7FF5A] transition hover:text-white md:flex">
            Meet the makers <ArrowUpRight size={14} />
          </button>
        </div>
        {menuOpen && <div className="border-t border-white/10 bg-[#080B0D] px-5 py-5 md:hidden"><div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.16em] text-white/65"><button onClick={() => { scrollToId("workbench"); setMenuOpen(false); }}>Workbench</button><button onClick={() => { scrollToId("principles"); setMenuOpen(false); }}>Principles</button><button onClick={() => { scrollToId("about"); setMenuOpen(false); }}>About the build</button></div></div>}
      </header>

      <section id="top" className="relative min-h-[760px] border-b border-white/10 pt-[74px]">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B0D] via-[#080B0D]/90 to-[#080B0D]/30" />
        <div className="relative mx-auto grid min-h-[686px] max-w-[1440px] grid-cols-1 items-end gap-10 px-5 pb-16 md:grid-cols-[1.1fr_.9fr] md:px-10 md:pb-24">
          <div className="max-w-[760px]">
            <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#B7FF5A]"><span className="h-px w-9 bg-[#B7FF5A]" />[ build log / 001 ]</div>
            <h1 className="font-display text-[clamp(4rem,10vw,9.2rem)] font-bold leading-[0.84] tracking-[-0.08em] text-[#F5F1E8]">Make it<br /><span className="ml-[8vw] text-[#B7FF5A]">make sense.</span></h1>
            <p className="mt-10 max-w-[500px] text-lg leading-relaxed text-white/65 md:ml-[8vw]">A focused corner of the internet for programmers and ethical hackers who care about the invisible part: the systems, exploits, and craft behind useful software.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4 md:ml-[8vw]"><button onClick={() => scrollToId("workbench")} className="group flex items-center gap-4 bg-[#B7FF5A] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#080B0D] transition hover:bg-white active:scale-[.98]">Open the workbench <ArrowDownRight size={16} className="transition group-hover:translate-x-1 group-hover:translate-y-1" /></button><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">Owner: Pranam</span></div>
          </div>
          <div className="mb-3 justify-self-start md:justify-self-end">
            <div className="w-[260px] border border-white/20 bg-[#080B0D]/75 p-4 font-mono text-[11px] leading-6 text-white/50 backdrop-blur-md md:w-[300px]"><div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 text-[#B7FF5A]"><span>current_focus</span><span className="h-2 w-2 animate-pulse bg-[#B7FF5A]" /></div><div><span className="text-white/30">01</span> mapping attack surfaces</div><div><span className="text-white/30">02</span> breaking weak assumptions</div><div><span className="text-white/30">03</span> building safer systems</div><div className="mt-3 border-t border-white/10 pt-3 text-white/30">status: <span className="text-[#B7FF5A]">in progress_</span></div></div>
          </div>
        </div>
      </section>

      <section id="workbench" className="relative border-b border-[#B7FF5A]/30 bg-[#11181B] text-[#EEF5ED]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-[180px_1fr]">
          <div className="border-b border-[#B7FF5A]/20 p-5 font-mono text-[10px] uppercase tracking-[0.18em] md:border-b-0 md:border-r md:p-8"><span className="block text-white/45">[ 02 / 04 ]</span><span className="mt-2 block">The workbench</span></div>
          <div className="grid gap-10 p-6 md:grid-cols-[1fr_1.2fr] md:p-14 lg:p-20">
            <div><p className="font-mono text-xs uppercase tracking-[0.16em] text-white/45">[ tools / for / deliberate-builders ]</p><h2 className="mt-5 max-w-[480px] font-display text-4xl font-bold leading-[.95] tracking-[-.06em] md:text-6xl">A place to think like a builder—and test like an attacker.</h2></div>
            <div className="flex flex-col justify-between gap-10"><p className="max-w-[560px] text-lg leading-relaxed text-white/60">Codeforge collects field notes, sharp experiments, and practical tools for moving from “it works” to “I know where it breaks.”</p><button onClick={() => toast.info("The workbench is being stocked with new builds.")} className="flex w-fit items-center gap-3 border-b border-[#B7FF5A] pb-2 font-mono text-xs uppercase tracking-[0.16em] transition hover:gap-5">Inspect the build notes <ChevronRight size={15} /></button></div>
          </div>
        </div>
      </section>

      <section id="principles" className="border-b border-white/10 bg-[#EEF5ED] text-[#080B0D]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-[180px_1fr]">
          <div className="border-b border-black/15 p-5 font-mono text-[10px] uppercase tracking-[0.18em] md:border-b-0 md:border-r md:p-8"><span className="block text-black/40">[ 03 / 04 ]</span><span className="mt-2 block">Principles</span></div>
          <div className="grid gap-10 p-6 md:grid-cols-2 md:p-14 lg:p-20"><div><p className="font-mono text-xs uppercase tracking-[0.16em] text-black/45">The operating system</p><h2 className="mt-5 font-display text-4xl font-bold leading-[.95] tracking-[-.06em] md:text-6xl">Small details.<br /><span className="text-[#6EA83A]">Strong signal.</span></h2><img src={detailImage} alt="Editorial workbench detail" className="mt-12 h-44 w-full object-cover grayscale contrast-125 md:h-60" /></div><div className="divide-y divide-black/15 border-t border-black/15">{[{n:"01",t:"Clarity is a feature",d:"Naming, structure, and intent are part of the product—not documentation left for later."},{n:"02",t:"Make the invisible visible",d:"Share the trade-offs, rough edges, and mental models behind the finished interface."},{n:"03",t:"Leave a better trail",d:"The best build is one another person can enter, understand, and carry forward."}].map(item => <div key={item.n} className="py-7"><div className="flex gap-6"><span className="font-mono text-xs text-[#6EA83A]">{item.n}</span><div><h3 className="font-display text-2xl font-semibold tracking-[-.03em]">{item.t}</h3><p className="mt-3 max-w-[410px] leading-relaxed text-black/55">{item.d}</p></div></div></div>)}</div></div>
        </div>
      </section>

      <section id="about" className="bg-[#080B0D]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <div className="mb-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#B7FF5A]"><span className="h-px w-9 bg-[#B7FF5A]" />[ the people behind the build ]</div>
          <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-end">
            <div><h2 className="max-w-[720px] font-display text-5xl font-bold leading-[.9] tracking-[-.07em] md:text-8xl">Good software<br /><span className="text-white/35">has a point of view.</span></h2><p className="mt-8 max-w-[540px] text-lg leading-relaxed text-white/60">Codeforge is a focused security workshop for programmers and ethical hackers, shaped by one owner and strengthened by one steady supporter.</p></div>
            <div className="border-l border-[#B7FF5A] pl-6"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">A note from the makers</div><p className="mt-4 font-display text-2xl leading-tight text-white/85">“Build the part you’ll still understand six months from now.”</p></div>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <article className="group border border-white/15 bg-[#11181B] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#B7FF5A]/70 md:p-8"><div className="flex items-start justify-between"><div><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B7FF5A]">01 / Owner</div><h3 className="mt-5 font-display text-4xl font-bold tracking-[-0.06em] text-white">Pranam</h3></div><div className="grid h-12 w-12 place-items-center border border-[#B7FF5A]/50 font-display text-xl text-[#B7FF5A]">P<span className="sr-only">Pranam</span></div></div><p className="mt-8 max-w-[420px] leading-relaxed text-white/60">The builder behind Codeforge—setting the direction, shaping the systems, and turning complex ideas into useful software.</p><div className="mt-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35"><Terminal size={14} className="text-[#B7FF5A]" /> direction / craft / code</div></article>
            <article className="group border border-white/15 bg-[#EEF5ED] p-6 text-[#080B0D] transition duration-200 hover:-translate-y-1 hover:border-[#B7FF5A] md:mt-10 md:p-8"><div className="flex items-start justify-between"><div><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6EA83A]">02 / Supporter</div><h3 className="mt-5 font-display text-4xl font-bold tracking-[-0.06em]">Tanish</h3></div><div className="grid h-12 w-12 place-items-center border border-[#6EA83A]/50 font-display text-xl text-[#6EA83A]">T<span className="sr-only">Tanish</span></div></div><p className="mt-8 max-w-[420px] leading-relaxed text-black/60">The steady force behind the work—keeping the signal clear, the momentum real, and the best ideas moving forward.</p><div className="mt-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-black/40"><Sparkles size={14} className="text-[#6EA83A]" /> support / clarity / momentum</div></article>
          </div>

        </div>
      </section>

      <section id="contact" className="border-t border-[#B7FF5A]/20 bg-[#0D1416]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-24"><div className="grid gap-10"><div><div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#B7FF5A]"><span className="h-px w-9 bg-[#B7FF5A]" />[ contact us ]</div><h2 className="max-w-[520px] font-display text-5xl font-bold leading-[.9] tracking-[-.07em] text-white md:text-7xl">Pick your<br /><span className="text-[#B7FF5A]">signal.</span></h2><p className="mt-6 max-w-[360px] leading-relaxed text-white/55">Reach the Codeforge team through the channel that fits the conversation. Choose one signal below.</p></div><div><div className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">[ available channels ]</div><div className="grid gap-4 sm:grid-cols-3"><a href="https://www.instagram.com/not_your_pranam/" target="_blank" rel="noreferrer" className="group flex min-h-[170px] flex-col justify-between border border-[#B7FF5A]/70 bg-[#B7FF5A] p-6 text-[#080B0D] transition hover:-translate-y-1 hover:bg-white md:p-8"><div className="flex items-start justify-between"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#080B0D]/55">Pranam / Instagram</div><Instagram size={28} strokeWidth={1.5} className="transition group-hover:rotate-12" /></div><div><div className="font-display text-2xl font-bold tracking-[-0.05em]">@not_your_pranam</div><div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#080B0D]/60">Open the conversation ↗</div></div></a><a href="mailto:pranamb67@gmail.com" className="group flex min-h-[170px] flex-col justify-between border border-white/20 bg-[#11181B] p-6 text-white transition hover:-translate-y-1 hover:border-[#B7FF5A] md:p-8"><div className="flex items-start justify-between"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B7FF5A]">Pranam / Email</div><Mail size={28} strokeWidth={1.5} className="text-[#B7FF5A] transition group-hover:-rotate-12" /></div><div><div className="break-all font-display text-xl font-bold tracking-[-0.05em] md:text-2xl">pranamb67@gmail.com</div><div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">Send a message ↗</div></div></a><a href="https://www.instagram.com/maybe.tanishh/" target="_blank" rel="noreferrer" className="group flex min-h-[170px] flex-col justify-between border border-white/15 bg-[#EEF5ED] p-6 text-[#080B0D] transition hover:-translate-y-1 hover:border-[#B7FF5A] md:p-8"><div className="flex items-start justify-between"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6EA83A]">Tanish / Instagram</div><Instagram size={28} strokeWidth={1.5} className="text-[#6EA83A] transition group-hover:rotate-12" /></div><div><div className="font-display text-2xl font-bold tracking-[-0.05em]">@maybe.tanishh</div><div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-black/45">Message Tanish ↗</div></div></a></div></div></div></div>
      </section>

      <footer className="border-t border-white/10 bg-[#050708] px-5 py-6 md:px-10"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/30 sm:flex-row"><span>© 2026 Codeforge by Pranam</span><span>Supported with intent by Tanish</span><span className="flex items-center gap-2"><Sparkles size={12} className="text-[#B7FF5A]" /> build / learn / share</span></div></footer>
    </main>
  );
}
