import { useState, useEffect } from "react";
import "./home.css";
import { IoCopyOutline } from "react-icons/io5";
import formula_icon from "./assets/kapsul.png";
import { TbZoomMoney } from "react-icons/tb";
import { FaUserSecret } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { RiTwitterXFill } from "react-icons/ri";
import { formulas } from "./context/data";

// DEGEN FORMULA COMPONENT
export const App = () => {
  const [formula, setFormula] = useState({
    rx: 597700,
    base: "Liquidity Extract",
    solvent: "VC Funding Residue",
    dosage: "APY^2",
  });
  const [activeUsers, setActiveUsers] = useState(2300);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => {
        const change =
          Math.random() < 0.6
            ? Math.floor(Math.random() * 5 + 4)
            : -Math.floor(Math.random() * 3 + 2);
        return Math.max(prev + change, 0);
      });
    }, 3000); // 3 saniyede bir güncelle

    return () => clearInterval(interval);
  }, []);

  const generateFormula = () => {
    const rx = Math.floor(Math.random() * 999999);
    const selected = formulas[Math.floor(Math.random() * formulas.length)];
    setFormula({
      rx,
      ...selected,
    });
  };

  return (
    <div className="df fdc aic wrapper">
      <div className="w100 df fdc aic gap-10 content box header">
        <h1>DEGEN FORMULA</h1>
        <p>
          Engineered for the next generation of traders. Synthesized for the
          future of finance.
        </p>
        <p>Join the revolution and unlock the power of AI-driven trading.</p>
      </div>
      <div className="w100 df aic gap-20 box content">
        <div className="f1 df fdc token-info gap-5">
          <h2>Formula</h2>
          <p style={{ lineHeight: "1.5" }}>
            1 part Jeet Tears,
            <br /> 2 parts Exit Liquidity,
            <br /> 5 parts Hopium Concentrate,
            <br /> a sprinkle of Rug-Resistant Copium™
          </p>
        </div>
        <img src={formula_icon} alt="Formula" className="formula-img" />
      </div>

      <div className="w100 df fdc aic gap-10 box content generate-formula">
        <h1>Generate Your Own Formula</h1>
        <p>Unleash your creativity unique formula for trading success.</p>
        <div className="w100 df fdc aic gap-10 content result-formula">
          <h3>PRESCRIPTION #RX-{formula.rx}</h3>
          <p className="w100 df">
            <span>Base:</span>
            <i className="f1"></i>
            <span>{formula.base}</span>
          </p>
          <p className="w100 df">
            <span>Solvent:</span>
            <i className="f1"></i>
            <span>{formula.solvent}</span>
          </p>
          <p className="w100 df">
            <span>Dosage:</span>
            <i className="f1"></i>
            <span>{formula.dosage}</span>
          </p>
          <span>Expire date: When token goes to zero</span>
        </div>
        <button className="w100" onClick={generateFormula}>
          Generate
        </button>
      </div>

      <div className="w100 df fw gap-20 side-effect">
        <h1 className="w100 df jcc">Side Effects</h1>
        <div className="df fdc gap-10 box content">
          <div className="w100 df aic gap-20">
            <GiBrain size={44} />
            <h3>INFINITE ZOOMING</h3>
          </div>
          <p className="desc">
            Experience the thrill of zooming in on your trades, but beware of
            the dizzying effects. Side effects may include loss of perspective
            and an overwhelming desire to buy the dip.
          </p>
        </div>
        <div className="df fdc gap-10 box content">
          <div className="w100 df aic gap-20">
            <FaUserSecret size={44} />
            <h3>RUG-INDUCED TRUST ISSUES</h3>
          </div>
          <p className="desc">
            Trust no one, not even your own reflection. Side effects may include
            paranoia and a sudden urge to check the contract address.
          </p>
        </div>
        <div className="df fdc gap-10 box content">
          <div className="w100 df aic gap-20">
            <TbZoomMoney size={44} />
            <h3>LOSS BLINDNESS</h3>
          </div>
          <p className="desc">
            A rare condition where traders become blind to their losses. Side
            effects may include excessive optimism and a complete disregard for
            reality.
          </p>
        </div>
        <div className="df fdc gap-10 box content">
          <div className="w100 df aic gap-20">
            <GiPayMoney size={44} />
            <h3>BRAIN FOR (SOL EDITION)</h3>
          </div>
          <p className="desc">
            A unique condition where traders develop an insatiable appetite for
            SOL. Side effects may include excessive trading and a sudden urge to
            buy the dip.
          </p>
        </div>
      </div>

      <div className="w100 df fdc aic gap-20 box content users">
        <h2>ACTIVE DEGENS CURRENTLY OVERDOSED</h2>
        <p className="df aic fdc gap-10">
          <h1 className="users-count" data-text={activeUsers}>
            {activeUsers}
          </h1>
          <span>DEGENS</span>
        </p>
        <p style={{ textAlign: "center" }}>
          Join the ranks of the most dedicated traders in the game. Are you
          ready to take the plunge?
        </p>
        <div className="w100 df aic gap-20">
          <button className="f1">Join the DEGENS</button>
          <button className="f1 df aic jcc gap-20">
            Follow Us on <RiTwitterXFill />
          </button>
        </div>
      </div>

      <p className="w100 df fdc gap-10 box content disclaimer">
        <span>WARNING:</span> Side effects include uncontrollable FOMO, sudden
        chart addiction, and hallucinations of financial freedom.
      </p>

      <div className="w100 df aic jcc content box footer">
        <p>© 2025 DEGEN FORMULA - All rights reserved</p>
      </div>
    </div>
  );
};
