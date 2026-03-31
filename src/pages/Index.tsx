import { Github, Linkedin, Mail, Globe, ChevronDown, ExternalLink, Cloud, Terminal, Code2, Braces, Rocket, LayoutTemplate, Smartphone, Cpu } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import ceoPhoto from "@/assets/ibrahim.png";

/* ── Typing Effect Hook ── */
const useTypingEffect = (text: string, speed = 50, delay = 0) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  return { displayed, done };
};

const Index = () => {
  const { displayed: nameText, done: nameDone } = useTypingEffect("Ibrahim Issa", 80, 400);
  const { displayed: titleText } = useTypingEffect(
    'Expert Software Developer • Founder & CEO of Wilson Cloud LTD',
    30,
    1500
  );

  return (
    <div className="snap-container">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--neon-green)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--neon-green)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <MatrixRain />
      <FloatingParticles />

      {/* ===== SECTION 1: HERO ===== */}
      <section className="snap-section flex-col gap-6 px-4 z-10 scanlines">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Photo */}
          <div className="relative group flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48">
            <div
              className="absolute inset-0 photo-ring flex items-center justify-center"
              style={{ animation: "rotate-ring 8s linear infinite" }}
            >
              <div className="w-full h-full rounded-full bg-background" />
            </div>
            <img
              src={ceoPhoto}
              alt="Ibrahim Issa — CEO of Wilson Cloud LTD"
              className="absolute inset-[4px] w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
            />
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow:
                  "0 0 40px 10px hsla(var(--neon-green) / 0.3), 0 0 80px 20px hsla(var(--neon-purple) / 0.1)",
              }}
            />
          </div>

          {/* Terminal-style name */}
          <div className="text-center space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <Terminal size={12} className="text-primary" />
              <span className="code-comment">// who am i</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {nameText}
              {!nameDone && <span className="blink-cursor" />}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground font-mono leading-relaxed">
              <span className="code-keyword">const</span>{" "}
              <span className="code-function">role</span>{" "}
              <span className="text-muted-foreground">=</span>{" "}
              <span className="code-string">"{titleText}"</span>
              <span className="blink-cursor" />
            </p>
          </div>

          {/* Contact — styled as terminal command */}
          <a
            href="mailto:ibrahim@cloudwilson.com"
            className="glass-card glass-card-hover flex items-center gap-3 px-5 py-3 rounded-lg text-sm transition-all duration-300 font-mono group"
          >
            <span className="text-primary">$</span>
            <span className="text-muted-foreground">mail</span>
            <span className="text-foreground">ibrahim@cloudwilson.com</span>
            <ExternalLink size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-8 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ===== SECTION 2: WIDGETS as IDE Tabs / Terminal Cards ===== */}
      <section className="snap-section flex-col gap-6 px-4 z-10 scanlines">
        <motion.div
          className="flex items-center gap-2 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Code2 size={16} className="text-primary" />
          <span className="code-comment">// social_links.config</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
          {/* GitHub */}
          <TiltCard index={0} className="h-full min-h-[140px] flex flex-col justify-between group" href="https://github.com" glowColor="var(--neon-green)">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-background/50 border border-primary/20 text-primary">
                <Github size={24} />
              </div>
              <HoverArrow />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-lg tracking-wide group-hover:text-primary transition-colors">GitHub</h3>
              <p className="text-muted-foreground text-sm font-mono mt-1 opacity-80">Open source & code</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-all duration-500" />
          </TiltCard>

          {/* LinkedIn */}
          <TiltCard index={1} className="h-full min-h-[140px] flex flex-col justify-between group" href="https://linkedin.com" glowColor="var(--neon-blue)">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-background/50 border border-[hsl(var(--neon-blue))]/20" style={{ color: "hsl(var(--neon-blue))" }}>
                <Linkedin size={24} />
              </div>
              <HoverArrow />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-lg tracking-wide transition-colors" style={{ color: "inherit" }}>
                <span className="group-hover:text-[hsl(var(--neon-blue))] transition-colors">LinkedIn</span>
              </h3>
              <p className="text-muted-foreground text-sm font-mono mt-1 opacity-80">Professional network</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-all duration-500" style={{ backgroundColor: "hsla(var(--neon-blue) / 0.05)" }} />
          </TiltCard>

          {/* Email */}
          <TiltCard index={2} className="h-full min-h-[140px] flex flex-col justify-between group" href="mailto:ibrahim@cloudwilson.com" glowColor="var(--neon-purple)">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-background/50 border border-[hsl(var(--neon-purple))]/20" style={{ color: "hsl(var(--neon-purple))" }}>
                <Mail size={24} />
              </div>
              <HoverArrow />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-lg tracking-wide transition-colors">
                <span className="group-hover:text-[hsl(var(--neon-purple))] transition-colors">Email</span>
              </h3>
              <p className="text-muted-foreground text-sm font-mono mt-1 opacity-80 truncate">Drop a message</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-all duration-500" style={{ backgroundColor: "hsla(var(--neon-purple) / 0.05)" }} />
          </TiltCard>

          {/* Mostaql */}
          <TiltCard index={3} className="h-full min-h-[140px] flex flex-col justify-between group" href="https://mostaql.com" glowColor="var(--neon-yellow)">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-background/50 border border-[hsl(var(--neon-yellow))]/20" style={{ color: "hsl(var(--neon-yellow))" }}>
                <Globe size={24} />
              </div>
              <HoverArrow />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-lg tracking-wide transition-colors">
                <span className="group-hover:text-[hsl(var(--neon-yellow))] transition-colors">Mostaql</span>
              </h3>
              <p className="text-muted-foreground text-sm font-mono mt-1 opacity-80">Freelance work</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-all duration-500" style={{ backgroundColor: "hsla(var(--neon-yellow) / 0.05)" }} />
          </TiltCard>
        </div>

        <motion.div
          className="absolute bottom-8 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ===== SECTION 3: WILSON CLOUD ===== */}
      <section className="snap-section flex-col gap-8 px-4 z-10 scanlines">
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-card neon-glow rounded-xl overflow-hidden relative">
            {/* IDE title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
              <div className="terminal-dots">
                <span /><span /><span />
              </div>
              <span className="text-xs text-muted-foreground font-mono">wilson-cloud.ts</span>
              <Braces size={14} className="text-muted-foreground" />
            </div>

            <div className="p-6 sm:p-10 text-center space-y-6 relative">
              {/* Shimmer */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, hsla(var(--neon-green) / 0.4) 45%, hsla(var(--neon-cyan) / 0.4) 55%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 5s ease-in-out infinite",
                }}
              />

              <div className="flex items-center justify-center gap-3 relative">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Cloud size={40} className="text-primary" />
                </motion.div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                  Wilson Cloud
                </h2>
              </div>

              {/* Code-style description */}
              <div className="text-left max-w-md mx-auto font-mono text-sm space-y-1 relative">
                <p>
                  <span className="code-comment">{"/**"}</span>
                </p>
                <p>
                  <span className="code-comment">{" * Building innovative cloud solutions"}</span>
                </p>
                <p>
                  <span className="code-comment">{" * that empower businesses to scale,"}</span>
                </p>
                <p>
                  <span className="code-comment">{" * transform, and thrive in the digital era."}</span>
                </p>
                <p>
                  <span className="code-comment">{" */"}</span>
                </p>
              </div>

              <motion.a
                href="https://cloudwilson.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 px-6 py-3 rounded-lg font-mono font-semibold text-sm overflow-hidden border border-primary/30"
                style={{
                  background: "hsla(var(--neon-green) / 0.1)",
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 30px hsla(var(--neon-green) / 0.3)",
                  borderColor: "hsla(var(--neon-green) / 0.6)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-primary">$</span>
                <span className="text-foreground">open</span>
                <span className="code-string">cloudwilson.com</span>
                <ExternalLink size={14} className="text-muted-foreground" />
              </motion.a>
            </div>
          </div>
        </motion.div>

      </section>

      {/* ===== SECTION 4: SKILLS & TECH STACK ===== */}
      <section className="snap-section flex-col gap-8 px-4 z-10 scanlines">
        <motion.div
          className="flex items-center gap-2 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Cpu size={16} className="text-primary" />
          <span className="code-comment">// tech_stack.json</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          {/* Frontend */}
          <motion.div 
            className="glass-card rounded-xl p-6 relative overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <LayoutTemplate size={20} />
              </div>
              <h3 className="font-display font-bold text-xl">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Vue', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Alpine.js'].map((skill, i) => (
                <span key={i} className="px-3 py-1 text-xs font-mono rounded-full border border-primary/20 bg-background/50 text-foreground/80 group-hover:border-primary/40 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
          </motion.div>

          {/* Backend */}
          <motion.div 
            className="glass-card rounded-xl p-6 relative overflow-hidden group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[hsl(var(--neon-purple))]/10 text-[hsl(var(--neon-purple))]">
                <Terminal size={20} />
              </div>
              <h3 className="font-display font-bold text-xl">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['PHP', 'Laravel', 'Node.js', 'Express', 'MySQL', 'PostgreSQL', 'Redis', 'Docker'].map((skill, i) => (
                <span key={i} className="px-3 py-1 text-xs font-mono rounded-full border border-[hsl(var(--neon-purple))]/20 bg-background/50 text-foreground/80 group-hover:border-[hsl(var(--neon-purple))]/40 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500" style={{ backgroundColor: "hsla(var(--neon-purple) / 0.05)" }} />
          </motion.div>

          {/* Business & Mobile */}
          <motion.div 
            className="glass-card rounded-xl p-6 relative overflow-hidden group md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[hsl(var(--neon-yellow))]/10 text-[hsl(var(--neon-yellow))]">
                  <Smartphone size={20} />
                </div>
                <h3 className="font-display font-bold text-xl">Business & Strategy</h3>
              </div>
              <Rocket size={20} className="text-muted-foreground opacity-50 group-hover:text-[hsl(var(--neon-yellow))] group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                  <motion.div className="h-full bg-[hsl(var(--neon-yellow))]" initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ duration: 1, delay: 0.5 }} />
                </div>
                <p className="text-xs font-mono text-muted-foreground">Project Mgmt</p>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                  <motion.div className="h-full bg-[hsl(var(--neon-cyan))]" initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1, delay: 0.6 }} />
                </div>
                <p className="text-xs font-mono text-muted-foreground">System Design</p>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                  <motion.div className="h-full bg-primary" initial={{ width: 0 }} whileInView={{ width: "90%" }} transition={{ duration: 1, delay: 0.7 }} />
                </div>
                <p className="text-xs font-mono text-muted-foreground">Leadership</p>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                  <motion.div className="h-full bg-[hsl(var(--neon-purple))]" initial={{ width: 0 }} whileInView={{ width: "80%" }} transition={{ duration: 1, delay: 0.8 }} />
                </div>
                <p className="text-xs font-mono text-muted-foreground">Agile / Scrum</p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full blur-[100px] transition-all duration-500 opacity-0 group-hover:opacity-100" style={{ backgroundImage: "radial-gradient(circle, hsla(var(--neon-yellow) / 0.05), transparent 70%)" }} />
          </motion.div>
        </div>

        <p className="absolute bottom-6 text-xs text-muted-foreground font-mono">
          <span className="code-comment">
            {"// "}© {new Date().getFullYear()} Ibrahim Issa — Wilson Cloud LTD
          </span>
        </p>
      </section>
    </div>
  );
};

/* ── Terminal Widget Wrapper ── */
const TerminalWidget = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full">
    <div className="terminal-dots" style={{ marginBottom: 8 }}>
      <span style={{ width: 7, height: 7 }} />
      <span style={{ width: 7, height: 7 }} />
      <span style={{ width: 7, height: 7 }} />
    </div>
    {children}
  </div>
);

/* ── Code Line ── */
const CodeLine = ({ lineNum, children }: { lineNum: number; children: React.ReactNode }) => (
  <div className="flex items-center gap-2 text-xs font-mono">
    <span className="line-number">{lineNum}</span>
    <span>{children}</span>
  </div>
);

/* ── 3D Tilt Card ── */
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  glowColor: string;
  index: number;
}

const TiltCard = ({ children, className = "", href, glowColor, index }: TiltCardProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovered(false);
  };

  const glowHsl = `hsl(${glowColor})`;

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={`glass-card rounded-xl p-4 cursor-pointer group relative overflow-hidden ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]: number[]) =>
              `radial-gradient(250px circle at ${(x as number) * 100}% ${(y as number) * 100}%, ${glowHsl.replace(")", " / 0.12)")}, transparent 60%)`
          ),
        }}
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              boxShadow: `0 0 15px ${glowHsl.replace(")", " / 0.25)")}, inset 0 0 15px ${glowHsl.replace(")", " / 0.04)")}`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 h-full">{children}</div>
    </motion.a>
  );
};

/* ── Hover Arrow ── */
const HoverArrow = () => (
  <div className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
    <ExternalLink size={12} />
  </div>
);

/* ── Matrix Rain ── */
const MatrixRain = () => {
  const columns = useMemo(() => {
    const chars = "01{}[]<>/\\;:=+*&|!?#@$%^~`アイウエオカキクケコ";
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      text: Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("\n"),
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 20,
      opacity: Math.random() * 0.15 + 0.03,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {columns.map((col) => (
        <motion.div
          key={col.id}
          className="matrix-char whitespace-pre"
          style={{ left: `${col.x}%`, top: "-10%", opacity: col.opacity }}
          animate={{ y: ["0vh", "110vh"], opacity: [0, col.opacity, col.opacity, 0] }}
          transition={{
            duration: col.duration,
            repeat: Infinity,
            delay: col.delay,
            ease: "linear",
          }}
        >
          {col.text}
        </motion.div>
      ))}
    </div>
  );
};

/* ── Floating Particles ── */
const FloatingParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "hsl(var(--neon-green))",
            opacity: 0.15,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 15 - 7, 0],
            opacity: [0.05, 0.3, 0.05],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Index;
