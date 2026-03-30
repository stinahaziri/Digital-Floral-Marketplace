import { useState, useEffect } from "react";
import "../css/Customize.css";
import"../css/style.css"

export default function Customize() {
  const [flower, setFlower] = useState({
    type: "rose",
    emoji: "🌹",
    price: 3.5,
  });

  const [qty, setQty] = useState(7);
  const [fColor, setFColor] = useState("#e63946");
  const [wColor, setWColor] = useState("#fff8dc");

  const [decor, setDecor] = useState([true, false, true, false]);
  const [total, setTotal] = useState(0);

  const decPrices = [1.5, 2.0, 1.0, 3.0];

  useEffect(() => {
    calcTotal();
  }, [flower, qty, decor]);

  const calcTotal = () => {
    const decCost = decor.reduce(
      (sum, d, i) => sum + (d ? decPrices[i] : 0),
      0
    );

    const t = flower.price * qty + decCost + 1.5;
    setTotal(Math.round(t * 100) / 100);
  };

  const toggleDecor = (i: number) => {
    setDecor((prev) =>
      prev.map((d, idx) => (idx === i ? !d : d))
    );
  };

  const chgQty = (d:number) => {
    setQty((q) => Math.max(1, Math.min(12, q + d)));
  };

  return (
    <div className="cust-layout">

      {/* LEFT */}
      <div className="cust-left">

        <h2>Ndërtues 3D</h2>

        {/* FLOWERS */}
        <div className="cs">
          <div className="cs-title">Zgjedh lulen</div>

          <div className="flowers-grid">
            <div
              className={`fo ${flower.type === "rose" ? "sel" : ""}`}
              onClick={() =>
                setFlower({ type: "rose", emoji: "🌹", price: 3.5 })
              }
            >
              🌹 Trëndafil
            </div>

            <div
              className={`fo ${flower.type === "tulip" ? "sel" : ""}`}
              onClick={() =>
                setFlower({ type: "tulip", emoji: "🌷", price: 2.8 })
              }
            >
              🌷 Tulipan
            </div>
          </div>
        </div>

        {/* QTY */}
        <div className="cs">
          <div className="cs-title">Sasia</div>

          <div className="qty-row">
            <button onClick={() => chgQty(-1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => chgQty(1)}>+</button>
          </div>
        </div>

        {/* DECOR */}
        <div className="cs">
          <div className="cs-title">Dekorime</div>

          {["🎀", "🤍", "🌿", "💎"].map((d, i) => (
            <label key={i}>
              <input
                type="checkbox"
                checked={decor[i]}
                onChange={() => toggleDecor(i)}
              />
              {d}
            </label>
          ))}
        </div>
      </div>

      {/* CENTER SVG */}
      <div className="canvas-area">
        <svg width="300" height="380">
          <polygon
            points="150,300 55,380 245,380"
            fill={wColor}
          />

          {Array.from({ length: qty }).map((_, i) => {
            const x = 150 + (i - qty / 2) * 15;
            const y = 150 + (i % 3) * 20;

            return (
              <text key={i} x={x} y={y} fontSize="30">
                {flower.emoji}
              </text>
            );
          })}
        </svg>
      </div>

      {/* RIGHT */}
      <div className="cust-right">
        <h3>Total: €{total}</h3>

        <button className="btn btn-primary">
          💾 Ruaj
        </button>

        <button className="btn btn-dark">
          🛒 Porosit
        </button>
      </div>

    </div>
  );
}