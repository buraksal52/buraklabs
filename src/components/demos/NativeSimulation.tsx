import React, { useState } from 'react';

type Props = { demoId: 'ghostellar-lifecycle' | 'physim-mastery' | 'lucidui-review' | 'miv-patterns'; locale: 'en' | 'tr' };

const copy = {
  en: {
    label: 'Interactive Simulation · example data',
    ghostellar: { title: 'Offline payment lifecycle', offline: 'Offline draft', pending: 'Pending sync', verified: 'Online verification step', create: 'Create offline payment', sync: 'Simulate reconnect', reset: 'Reset', note: 'This demonstrates a state transition only. It does not sign or submit a real Stellar transaction.' },
    physim: { title: 'Mastery and review signal', mastery: 'Example mastery', correct: 'Answer correctly', review: 'Needs review', reset: 'Reset', note: 'This uses illustrative values to show a learning-state transition. It is not a validated learning outcome.' },
    lucidui: { title: 'Rule-based UI review', checks: ['Hierarchy', 'Readable labels', 'Contrast', 'Action clarity'], reset: 'Reset', note: 'Illustrative checklist only. It does not evaluate a real interface or produce a research metric.' },
    miv: { title: 'Transaction pattern explorer', patterns: ['Transfer', 'Contract call', 'Spam-like pattern'], select: 'Inspect pattern', note: 'Mock events only. No live blockchain data or detection accuracy is represented.' }
  },
  tr: {
    label: 'Interactive Simulation · örnek veri',
    ghostellar: { title: 'Offline ödeme yaşam döngüsü', offline: 'Offline taslak', pending: 'Senkronizasyon bekliyor', verified: 'Çevrim içi doğrulama adımı', create: 'Offline ödeme oluştur', sync: 'Bağlantıyı simüle et', reset: 'Sıfırla', note: 'Bu yalnızca durum geçişini gösterir. Gerçek Stellar işlemi imzalanmaz veya gönderilmez.' },
    physim: { title: 'Mastery ve tekrar sinyali', mastery: 'Örnek mastery', correct: 'Doğru cevap', review: 'Tekrar gerekli', reset: 'Sıfırla', note: 'Bu simülasyon öğrenme durumu geçişini göstermek için örnek değerler kullanır. Doğrulanmış öğrenme sonucu değildir.' },
    lucidui: { title: 'Kural tabanlı UI incelemesi', checks: ['Hiyerarşi', 'Okunabilir etiketler', 'Kontrast', 'Eylem açıklığı'], reset: 'Sıfırla', note: 'Yalnızca örnek checklist’tir. Gerçek arayüzü değerlendirmez ve araştırma metriği üretmez.' },
    miv: { title: 'İşlem örüntüsü gezgini', patterns: ['Transfer', 'Contract çağrısı', 'Spam benzeri örüntü'], select: 'Örüntüyü incele', note: 'Yalnızca mock olaylardır. Canlı blockchain verisi veya tespit doğruluğu gösterilmez.' }
  }
} as const;

export default function NativeSimulation({ demoId, locale }: Props) {
  const text = copy[locale];
  const [phase, setPhase] = useState<'offline' | 'pending' | 'verified'>('offline');
  const [mastery, setMastery] = useState(42);
  const [checks, setChecks] = useState<boolean[]>([false, false, false, false]);
  const [pattern, setPattern] = useState(0);
  const ghostellar = demoId === 'ghostellar-lifecycle';

  if (ghostellar) {
    const phaseLabel = { offline: text.ghostellar.offline, pending: text.ghostellar.pending, verified: text.ghostellar.verified }[phase];
    return <section className="simulation" aria-labelledby="ghostellar-simulation-title">
      <p className="eyebrow">{text.label}</p><h2 id="ghostellar-simulation-title">{text.ghostellar.title}</h2>
      <div className="simulation-status" aria-live="polite"><span className={`simulation-dot ${phase}`}></span><strong>{phaseLabel}</strong></div>
      <div className="simulation-actions">
        <button type="button" onClick={() => setPhase('pending')} disabled={phase !== 'offline'}>{text.ghostellar.create}</button>
        <button type="button" onClick={() => setPhase('verified')} disabled={phase !== 'pending'}>{text.ghostellar.sync}</button>
        <button type="button" onClick={() => setPhase('offline')}>{text.ghostellar.reset}</button>
      </div>
      <p className="simulation-note">{text.ghostellar.note}</p>
    </section>;
  }

  if (demoId === 'lucidui-review') return <section className="simulation" aria-labelledby="lucidui-simulation-title">
    <p className="eyebrow">{text.label}</p><h2 id="lucidui-simulation-title">{text.lucidui.title}</h2>
    <div className="check-list">{text.lucidui.checks.map((check, index) => <label><input type="checkbox" checked={checks[index] ?? false} onChange={() => setChecks((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value))} /> {check}</label>)}</div>
    <p aria-live="polite"><strong>{checks.filter(Boolean).length}/4</strong> illustrative checks selected.</p>
    <div className="simulation-actions"><button type="button" onClick={() => setChecks([false, false, false, false])}>{text.lucidui.reset}</button></div>
    <p className="simulation-note">{text.lucidui.note}</p>
  </section>;

  if (demoId === 'miv-patterns') return <section className="simulation" aria-labelledby="miv-simulation-title">
    <p className="eyebrow">{text.label}</p><h2 id="miv-simulation-title">{text.miv.title}</h2>
    <div className="pattern-tabs" role="tablist">{text.miv.patterns.map((item, index) => <button type="button" role="tab" aria-selected={pattern === index} onClick={() => setPattern(index)}>{item}</button>)}</div>
    <p className="simulation-status" aria-live="polite"><strong>{text.miv.select}:</strong>&nbsp; {text.miv.patterns[pattern]}</p>
    <p className="simulation-note">{text.miv.note}</p>
  </section>;

  return <section className="simulation" aria-labelledby="physim-simulation-title">
    <p className="eyebrow">{text.label}</p><h2 id="physim-simulation-title">{text.physim.title}</h2>
    <div className="mastery-meter"><div style={{ width: `${mastery}%` }}></div></div><p aria-live="polite"><strong>{text.physim.mastery}:</strong> {mastery}%</p>
    <div className="simulation-actions"><button type="button" onClick={() => setMastery((value) => Math.min(100, value + 12))}>{text.physim.correct}</button><button type="button" onClick={() => setMastery((value) => Math.max(0, value - 4))}>{text.physim.review}</button><button type="button" onClick={() => setMastery(42)}>{text.physim.reset}</button></div>
    <p className="simulation-note">{text.physim.note}</p>
  </section>;
}
