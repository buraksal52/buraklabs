import React, { useState } from 'react';

type Props = { demoId: 'ghostellar-lifecycle' | 'physim-mastery'; locale: 'en' | 'tr' };

const copy = {
  en: {
    label: 'Interactive Simulation · example data',
    ghostellar: { title: 'Offline payment lifecycle', offline: 'Offline draft', pending: 'Pending sync', verified: 'Online verification step', create: 'Create offline payment', sync: 'Simulate reconnect', reset: 'Reset', note: 'This demonstrates a state transition only. It does not sign or submit a real Stellar transaction.' },
    physim: { title: 'Mastery and review signal', mastery: 'Example mastery', correct: 'Answer correctly', review: 'Needs review', reset: 'Reset', note: 'This uses illustrative values to show a learning-state transition. It is not a validated learning outcome.' }
  },
  tr: {
    label: 'Interactive Simulation · örnek veri',
    ghostellar: { title: 'Offline ödeme yaşam döngüsü', offline: 'Offline taslak', pending: 'Senkronizasyon bekliyor', verified: 'Çevrim içi doğrulama adımı', create: 'Offline ödeme oluştur', sync: 'Bağlantıyı simüle et', reset: 'Sıfırla', note: 'Bu yalnızca durum geçişini gösterir. Gerçek Stellar işlemi imzalanmaz veya gönderilmez.' },
    physim: { title: 'Mastery ve tekrar sinyali', mastery: 'Örnek mastery', correct: 'Doğru cevap', review: 'Tekrar gerekli', reset: 'Sıfırla', note: 'Bu simülasyon öğrenme durumu geçişini göstermek için örnek değerler kullanır. Doğrulanmış öğrenme sonucu değildir.' }
  }
} as const;

export default function NativeSimulation({ demoId, locale }: Props) {
  const text = copy[locale];
  const [phase, setPhase] = useState<'offline' | 'pending' | 'verified'>('offline');
  const [mastery, setMastery] = useState(42);
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

  return <section className="simulation" aria-labelledby="physim-simulation-title">
    <p className="eyebrow">{text.label}</p><h2 id="physim-simulation-title">{text.physim.title}</h2>
    <div className="mastery-meter"><div style={{ width: `${mastery}%` }}></div></div><p aria-live="polite"><strong>{text.physim.mastery}:</strong> {mastery}%</p>
    <div className="simulation-actions"><button type="button" onClick={() => setMastery((value) => Math.min(100, value + 12))}>{text.physim.correct}</button><button type="button" onClick={() => setMastery((value) => Math.max(0, value - 4))}>{text.physim.review}</button><button type="button" onClick={() => setMastery(42)}>{text.physim.reset}</button></div>
    <p className="simulation-note">{text.physim.note}</p>
  </section>;
}
