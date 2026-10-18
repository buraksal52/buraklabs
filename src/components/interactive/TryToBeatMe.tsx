import { useEffect, useRef, useState } from 'react';

type Locale = 'en' | 'tr';
type LinkItem = { label: string; href: string };
type GameStatus = 'idle' | 'playing' | 'lost';

type Props = {
  locale: Locale;
  links: LinkItem[];
};

const copy = {
  en: {
    eyebrow: '06 / A small challenge',
    title: 'Try to beat me.',
    intro: 'A quiet little game at the end of the record. The longer you last, the faster it gets.',
    start: 'Try to beat me',
    retry: 'Try again',
    controls: 'Move your paddle with your pointer, touch or arrow keys.',
    gameOver: 'Game over',
    lost: 'Good try. The ball had other plans.',
    thirdLoss: 'Nice try… want to look around the other links, then try again?',
    visit: 'Take a look',
    you: 'You',
    burak: 'Burak',
    ready: 'Ready when you are.',
  },
  tr: {
    eyebrow: '06 / Küçük bir meydan okuma',
    title: 'Try to beat me.',
    intro: 'Kayıtların sonunda küçük bir oyun. Ne kadar dayanırsan, top o kadar hızlanır.',
    start: 'Beni yenmeyi dene',
    retry: 'Tekrar dene',
    controls: 'Raketi pointer, dokunma veya ok tuşlarıyla hareket ettir.',
    gameOver: 'Oyun bitti',
    lost: 'Güzel deneme. Topun başka planları vardı.',
    thirdLoss: 'Güzel deneme… istersen diğer linklere bak, sonra tekrar dene.',
    visit: 'Bir göz at',
    you: 'Sen',
    burak: 'Burak',
    ready: 'Hazırsan başlayalım.',
  },
} as const;

const WIDTH = 960;
const HEIGHT = 520;
const PLAYER_X = 42;
const AI_X = WIDTH - 42;
const PLAYER_PADDLE = 82;
const AI_PADDLE = 112;

export default function TryToBeatMe({ locale, links }: Props) {
  const text = copy[locale];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | undefined>(undefined);
  const playerYRef = useRef(HEIGHT / 2);
  const [status, setStatus] = useState<GameStatus>('idle');
  const [losses, setLosses] = useState(0);
  const [recommendation, setRecommendation] = useState<LinkItem | null>(null);

  const chooseLink = () => links[Math.floor(Math.random() * links.length)] ?? null;

  const finishGame = () => {
    const nextLosses = losses + 1;
    setStatus('lost');
    setLosses(nextLosses);
    if (nextLosses >= 3) setRecommendation(chooseLink());
  };

  useEffect(() => {
    if (status !== 'playing') return undefined;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return undefined;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = WIDTH * dpr;
    canvas.height = HEIGHT * dpr;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const state = {
      ball: { x: WIDTH / 2, y: HEIGHT / 2, vx: -7.2, vy: 2.1, speed: 7.5 },
      aiY: HEIGHT / 2,
      rallies: 0,
      lastTime: performance.now(),
      running: true,
    };

    const draw = () => {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      context.fillStyle = '#191919';
      context.fillRect(0, 0, WIDTH, HEIGHT);

      const table = [
        [124, 34],
        [836, 34],
        [900, 486],
        [60, 486],
      ] as const;
      context.beginPath();
      context.moveTo(table[0][0], table[0][1]);
      table.slice(1).forEach(([x, y]) => context.lineTo(x, y));
      context.closePath();
      context.fillStyle = '#232323';
      context.fill();
      context.strokeStyle = 'rgba(245, 243, 239, .32)';
      context.lineWidth = 2;
      context.stroke();

      context.strokeStyle = 'rgba(245, 243, 239, .16)';
      context.setLineDash([10, 16]);
      context.beginPath();
      context.moveTo(WIDTH / 2, 20);
      context.lineTo(WIDTH / 2, HEIGHT - 20);
      context.stroke();
      context.setLineDash([]);

      context.strokeStyle = 'rgba(196, 168, 132, .5)';
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(124, 34);
      context.lineTo(60, 486);
      context.moveTo(836, 34);
      context.lineTo(900, 486);
      context.stroke();

      context.fillStyle = '#f5f3ef';
      context.fillRect(PLAYER_X, playerYRef.current - PLAYER_PADDLE / 2, 14, PLAYER_PADDLE);
      context.fillRect(AI_X - 14, state.aiY - AI_PADDLE / 2, 14, AI_PADDLE);
      context.fillStyle = '#c4a884';
      context.beginPath();
      context.arc(state.ball.x, state.ball.y, 8, 0, Math.PI * 2);
      context.fill();
    };

    const loop = (time: number) => {
      if (!state.running) return;
      const delta = Math.min((time - state.lastTime) / 16.67, 2);
      state.lastTime = time;
      state.ball.x += state.ball.vx * delta;
      state.ball.y += state.ball.vy * delta;

      if (state.ball.y < 28 || state.ball.y > HEIGHT - 28) {
        state.ball.vy *= -1;
        state.ball.y = Math.max(28, Math.min(HEIGHT - 28, state.ball.y));
      }

      const aiTarget = state.ball.y + state.ball.vy * 7;
      state.aiY += (aiTarget - state.aiY) * Math.min(.34 * delta, 1);
      state.aiY = Math.max(AI_PADDLE / 2 + 20, Math.min(HEIGHT - AI_PADDLE / 2 - 20, state.aiY));

      if (state.ball.vx < 0 && state.ball.x <= PLAYER_X + 18 && Math.abs(state.ball.y - playerYRef.current) < PLAYER_PADDLE / 2 + 10) {
        state.ball.x = PLAYER_X + 18;
        state.ball.vx = Math.abs(state.ball.vx) * 1.055;
        state.ball.speed = Math.min(state.ball.speed * 1.055, 27);
        state.ball.vy += (state.ball.y - playerYRef.current) * .045;
      }

      if (state.ball.vx > 0 && state.ball.x >= AI_X - 18 && Math.abs(state.ball.y - state.aiY) < AI_PADDLE / 2 + 12) {
        state.ball.x = AI_X - 18;
        state.ball.vx = -Math.abs(state.ball.vx) * 1.06;
        state.ball.speed = Math.min(state.ball.speed * 1.06, 31);
        state.ball.vy += (state.ball.y - state.aiY) * .035;
        state.rallies += 1;
        if (state.rallies >= 18) state.ball.vx *= 1.08;
      }

      if (state.ball.x < -30 || state.rallies >= 20) {
        state.running = false;
        finishGame();
        return;
      }
      if (state.ball.x > WIDTH + 30) {
        state.running = false;
        finishGame();
        return;
      }

      draw();
      frameRef.current = requestAnimationFrame(loop);
    };

    draw();
    frameRef.current = requestAnimationFrame(loop);
    return () => {
      state.running = false;
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [status]);

  const movePlayer = (clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ratio = HEIGHT / rect.height;
    const nextY = (clientY - rect.top) * ratio;
    playerYRef.current = Math.max(PLAYER_PADDLE / 2 + 20, Math.min(HEIGHT - PLAYER_PADDLE / 2 - 20, nextY));
  };

  const startGame = () => {
    setRecommendation(null);
    playerYRef.current = HEIGHT / 2;
    setStatus('playing');
  };

  return (
    <section className="try-to-beat" aria-labelledby="try-to-beat-title">
      <div className="try-to-beat-intro">
        <p className="eyebrow">{text.eyebrow}</p>
        <h2 id="try-to-beat-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>
      <div className="try-to-beat-stage">
        {status === 'idle' && (
          <div className="try-to-beat-preview" aria-label={text.ready}>
            <svg className="try-to-beat-table" viewBox="0 0 960 520" role="img" aria-label={text.ready}>
              <polygon className="try-to-beat-table-surface" points="124,34 836,34 900,486 60,486" />
              <path className="try-to-beat-table-center" d="M480 34V486" />
              <path className="try-to-beat-table-edge" d="M124 34 60 486M836 34 900 486" />
              <path className="try-to-beat-table-paddle try-to-beat-table-paddle-player" d="M124 244v84" />
              <path className="try-to-beat-table-paddle try-to-beat-table-paddle-ai" d="M836 214v108" />
              <circle className="try-to-beat-table-ball" cx="352" cy="284" r="9" />
            </svg>
            <p>{text.ready}</p>
          </div>
        )}
        {status !== 'idle' && (
          <div className="try-to-beat-game">
            <canvas
              ref={canvasRef}
              tabIndex={0}
              aria-label={text.controls}
              onPointerMove={(event) => movePlayer(event.clientY)}
              onKeyDown={(event) => {
                if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
                event.preventDefault();
                const canvas = canvasRef.current;
                if (!canvas) return;
                const rect = canvas.getBoundingClientRect();
                const step = 48 * (HEIGHT / rect.height);
                playerYRef.current = Math.max(PLAYER_PADDLE / 2 + 20, Math.min(HEIGHT - PLAYER_PADDLE / 2 - 20, playerYRef.current + (event.key === 'ArrowUp' ? -step : step)));
              }}
            />
            {status === 'lost' && (
              <div className="try-to-beat-result" role="status" aria-live="polite">
                <p className="eyebrow">{losses >= 3 ? '03 / ' : ''}{text.gameOver}</p>
                <p>{losses >= 3 ? text.thirdLoss : text.lost}</p>
                {recommendation && <a className="button-link" href={recommendation.href}>{text.visit}: {recommendation.label} ↗</a>}
                <button type="button" onClick={startGame}>{text.retry}</button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="try-to-beat-footer">
        {status === 'idle' ? <button type="button" className="button-link" onClick={startGame}>{text.start} ↗</button> : <p>{text.controls}</p>}
        {status === 'playing' && <span className="try-to-beat-score" aria-hidden="true">{text.you} × {text.burak}</span>}
      </div>
    </section>
  );
}
