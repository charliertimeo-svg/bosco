type Props = {
  caption: string;
};

export function PhoneMock({ caption }: Props) {
  return (
    <div className="phone-mock" aria-hidden="true">
      <div className="phone-mock__frame">
        <div className="phone-mock__notch" />
        <div className="phone-mock__screen">
          <div className="phone-mock__row phone-mock__row--title">bosco</div>
          <div className="phone-mock__row phone-mock__row--muted">impulseur VP · 150 h</div>
          <div className="phone-mock__card">
            <div className="phone-mock__dot" />
            <div>
              <div className="phone-mock__row">pas de débit raw water</div>
              <div className="phone-mock__row phone-mock__row--muted">
                1) impulseur · 2) crépine · 3) joint
              </div>
            </div>
          </div>
          <div className="phone-mock__cta">voir les étapes</div>
        </div>
      </div>
      <p className="phone-mock__caption">{caption}</p>
      <style>{`
        .phone-mock { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .phone-mock__frame {
          width: 220px; height: 440px;
          border-radius: 36px;
          background: var(--paper);
          border: 1px solid var(--rule-strong);
          box-shadow: 0 20px 40px -20px rgba(13,43,62,0.25);
          padding: 10px;
          position: relative;
        }
        .phone-mock__notch {
          width: 60px; height: 16px; border-radius: 999px;
          background: var(--ink); opacity: 0.9;
          margin: 0 auto 8px;
        }
        .phone-mock__screen {
          background: var(--sea-shallow);
          border-radius: 24px;
          height: calc(100% - 24px);
          padding: 14px 12px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .phone-mock__row { font-size: 13px; }
        .phone-mock__row--title { font-weight: 500; font-size: 14px; }
        .phone-mock__row--muted { color: var(--ink-soft); font-size: 11px; }
        .phone-mock__card {
          display: flex; gap: 10px;
          background: var(--paper);
          border: 1px solid var(--rule);
          border-radius: 12px;
          padding: 10px;
        }
        .phone-mock__dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--signal); flex: 0 0 auto; margin-top: 4px;
        }
        .phone-mock__cta {
          margin-top: auto;
          text-align: center;
          background: var(--signal); color: var(--signal-ink);
          padding: 10px; border-radius: 10px; font-size: 13px; font-weight: 500;
        }
        .phone-mock__caption {
          font-size: 12px; color: var(--ink-soft); margin: 0; text-align: center;
        }
      `}</style>
    </div>
  );
}
