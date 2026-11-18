import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'

const Home = () => {
  const navigator = useNavigate()
  const name = 'MANOJ H'
  const panelText = 'I turn curiosity into things worth building.'
  const panelBoxRef = useRef(null)
  const panelCharRefs = useRef([])
  const panelState = useRef({ items: [], hovered: false, ready: false, raf: 0 })

  const [offsets] = useState(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const make = (yRange, rRange) =>
      isMobile
        ? { x: 0, y: 0, r: 0 }
        : {
            x: 0,
            y: (Math.random() - 0.5) * yRange,
            r: (Math.random() - 0.5) * rRange,
          }

    return {
      chars: name.split('').map(() => make(22, 12)),
      dot: make(12, 8),
      isMobile,
    }
  })

  useEffect(() => {
    if (offsets.isMobile) return undefined
    const box = panelBoxRef.current
    if (!box) return undefined

    const chars = panelCharRefs.current.filter(Boolean)
    if (!chars.length) return undefined

    // measure home positions with no transform
    chars.forEach((el) => {
      el.style.transform = 'translate(0px, 0px) rotate(0deg)'
      el.style.transition = 'none'
    })

    const boxRect = box.getBoundingClientRect()
    const items = chars.map((el) => {
      const r = el.getBoundingClientRect()
      const w = r.width || 8
      const h = r.height || 16
      const homeX = r.left - boxRect.left
      const homeY = r.top - boxRect.top
      const maxX = Math.max(0, boxRect.width - w)
      const maxY = Math.max(0, boxRect.height - h)
      const x = Math.random() * maxX
      const y = Math.random() * maxY
      const speed = 18 + Math.random() * 28
      const ang = Math.random() * Math.PI * 2
      return {
        el,
        w,
        h,
        homeX,
        homeY,
        x: x - homeX,
        y: y - homeY,
        vx: Math.cos(ang) * speed,
        vy: Math.sin(ang) * speed,
        rot: (Math.random() - 0.5) * 50,
        vr: (Math.random() - 0.5) * 25,
      }
    })

    const state = panelState.current
    state.items = items
    state.ready = true
    state.wasHovered = false

    let last = performance.now()
    const step = (now) => {
      const state = panelState.current
      const dt = Math.min(0.032, (now - last) / 1000 || 0.016)
      last = now
      const b = box.getBoundingClientRect()
      const hovered = state.hovered

      if (!hovered && state.wasHovered) {
        // re-energize when leaving hover so letters float away again
        for (let i = 0; i < state.items.length; i++) {
          const it = state.items[i]
          const speed = 20 + Math.random() * 30
          const ang = Math.random() * Math.PI * 2
          it.vx = Math.cos(ang) * speed
          it.vy = Math.sin(ang) * speed
          it.vr = (Math.random() - 0.5) * 25
        }
      }
      state.wasHovered = hovered

      for (let i = 0; i < state.items.length; i++) {
        const it = state.items[i]
        if (hovered) {
          // ease back to correct (home) position
          const ease = 1 - Math.pow(0.001, dt)
          it.x += (0 - it.x) * ease
          it.y += (0 - it.y) * ease
          it.rot += (0 - it.rot) * ease
          it.vx *= Math.pow(0.05, dt)
          it.vy *= Math.pow(0.05, dt)
        } else {
          it.x += it.vx * dt
          it.y += it.vy * dt
          it.rot += it.vr * dt

          const minX = -it.homeX
          const maxX = b.width - it.w - it.homeX
          const minY = -it.homeY
          const maxY = b.height - it.h - it.homeY

          if (it.x < minX) {
            it.x = minX
            it.vx = Math.abs(it.vx)
          } else if (it.x > maxX) {
            it.x = maxX
            it.vx = -Math.abs(it.vx)
          }
          if (it.y < minY) {
            it.y = minY
            it.vy = Math.abs(it.vy)
          } else if (it.y > maxY) {
            it.y = maxY
            it.vy = -Math.abs(it.vy)
          }
        }
      }

      if (!hovered) {
        // simple pairwise collision / rebound
        for (let i = 0; i < state.items.length; i++) {
          for (let j = i + 1; j < state.items.length; j++) {
            const a = state.items[i]
            const bItem = state.items[j]
            const ax = a.homeX + a.x
            const ay = a.homeY + a.y
            const bx = bItem.homeX + bItem.x
            const by = bItem.homeY + bItem.y
            const overlapX = (a.w + bItem.w) / 2 - Math.abs(ax + a.w / 2 - (bx + bItem.w / 2))
            const overlapY = (a.h + bItem.h) / 2 - Math.abs(ay + a.h / 2 - (by + bItem.h / 2))
            if (overlapX > 0 && overlapY > 0) {
              if (overlapX < overlapY) {
                const dir = ax + a.w / 2 < bx + bItem.w / 2 ? -1 : 1
                a.x += (dir * overlapX) / 2
                bItem.x -= (dir * overlapX) / 2
                const avx = a.vx
                a.vx = bItem.vx
                bItem.vx = avx
              } else {
                const dir = ay + a.h / 2 < by + bItem.h / 2 ? -1 : 1
                a.y += (dir * overlapY) / 2
                bItem.y -= (dir * overlapY) / 2
                const avy = a.vy
                a.vy = bItem.vy
                bItem.vy = avy
              }
            }
          }
        }
      }

      for (let i = 0; i < state.items.length; i++) {
        const it = state.items[i]
        it.el.style.transform = `translate(${it.x}px, ${it.y}px) rotate(${it.rot}deg)`
      }

      state.raf = requestAnimationFrame(step)
    }

    state.raf = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(state.raf)
      state.ready = false
      state.items = []
    }
  }, [offsets.isMobile])

  return (
    <div className="bg-paper text-ink">
      {/* ================= HERO SECTION ================= */}
      <section className="wrap pt-[140px] pb-10 md:pt-[160px] md:pb-14">
        <div className="grid items-end gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="m flex items-center gap-2">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-accent" />
              Portfolio · Davangere, India
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.18em] text-muted">
              Hi, I&apos;m
            </p>

            <h1 className="mt-4 text-[clamp(52px,8vw,108px)] font-light leading-[0.96] uppercase tracking-[-0.01em]">
              <span className="hero-name inline-block">
                {name.split('').map((char, i) => (
                  <span
                    key={`${char}-${i}`}
                    className="hero-char inline-block cursor-default"
                    style={{
                      '--tx': `${offsets.chars[i].x}px`,
                      '--ty': `${offsets.chars[i].y}px`,
                      '--tr': `${offsets.chars[i].r}deg`,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
                <span
                  className="hero-char inline-block cursor-default text-accent"
                  style={{
                    '--tx': `${offsets.dot.x}px`,
                    '--ty': `${offsets.dot.y}px`,
                    '--tr': `${offsets.dot.r}deg`,
                  }}
                >
                  .
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-2xl font-light leading-snug text-body sm:text-3xl md:text-[38px]">
              Aspiring Full Stack Developer
            </p>

            <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-body-muted">
              I enjoy exploring technology by building with it — turning ideas into
              projects, solving problems along the way, and learning by making things real.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => navigator('/projects')} className="pillb solid w-full sm:w-auto">
                View Projects <span className="arr" />
              </button>
              <button onClick={() => navigator('/contact')} className="pillb w-full sm:w-auto">
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE PANEL */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div
              ref={panelBoxRef}
              className="vf hero-float-box mx-auto aspect-[4/5] w-full max-w-md overflow-hidden"
              onMouseEnter={() => {
                panelState.current.hovered = true
              }}
              onMouseLeave={() => {
                panelState.current.hovered = false
              }}
            >
              <span className="c tl" />
              <span className="c tr" />
              <span className="c bl" />
              <span className="c br" />
              <div className="absolute left-0 right-0 top-0 z-[2] flex items-center justify-between px-8 py-4">
                <span className="m">Fig. 01</span>
                <span className="m text-accent">● Note</span>
              </div>
              <div className="flex h-full w-full items-center justify-center px-8 py-16">
                <p className="max-w-xs text-center text-[clamp(24px,3vw,34px)] font-light leading-snug uppercase tracking-[0.04em] text-ink">
                  {(() => {
                    const segments = []
                    let idx = 0
                    while (idx < panelText.length) {
                      if (panelText[idx] === ' ') {
                        segments.push({ type: 'space', index: idx })
                        idx += 1
                      } else {
                        let end = idx
                        while (end < panelText.length && panelText[end] !== ' ') end += 1
                        segments.push({ type: 'word', start: idx, end })
                        idx = end
                      }
                    }

                    return segments.map((seg) => {
                      if (seg.type === 'space') {
                        return (
                          <span
                            key={`space-${seg.index}`}
                            ref={(el) => {
                              panelCharRefs.current[seg.index] = el
                            }}
                            className="inline-block cursor-default"
                          >
                            {'\u00A0'}
                          </span>
                        )
                      }

                      const wordChars = []
                      for (let k = seg.start; k < seg.end; k++) {
                        const c = panelText[k]
                        wordChars.push(
                          <span
                            key={`${c}-${k}`}
                            ref={(el) => {
                              panelCharRefs.current[k] = el
                            }}
                            className="inline-block cursor-default"
                          >
                            {c}
                          </span>
                        )
                      }
                      return (
                        <span key={`word-${seg.start}`} className="inline-block whitespace-nowrap">
                          {wordChars}
                        </span>
                      )
                    })
                  })()}
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-[2] flex items-center justify-center px-8 py-4">
                <span className="m text-[13px]">Hover into the box</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ME SECTION ================= */}
      <section className="border-t border-ink">
        <div className="wrap pt-24 pb-12 md:pt-28 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="m">01 · About Me</p>
            <h2 className="mt-4 text-[clamp(40px,5.2vw,72px)] font-light leading-[1.02] uppercase tracking-[-0.005em]">
              Who am I<span className="text-accent">?</span>
            </h2>
            <p className="mt-8 max-w-2xl text-[19px] leading-[1.7] text-body">
              I&apos;m someone who enjoys exploring technology by building with it.
              Rather than just learning concepts, I like turning ideas into
              projects, solving problems along the way, and continuously
              discovering what I can create next.
            </p>
            <button
              onClick={() => navigator('/about')}
              className="mt-10 pillb"
            >
              More About Me <span className="arr" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home