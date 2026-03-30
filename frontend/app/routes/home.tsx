import type { Route } from "./+types/home";
import { useState } from "react";
import Index from "../pages/User/Index";
import Flower from "../pages/User/Flower";
import Dekore from "../pages/User/Dekore";
import Esentials from "../pages/User/Esentials";
import Kerko from "../pages/User/Kerko";
import Customize from "../pages/User/Customize";
import Signin from "../pages/User/Signin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Digital-Floral-Marketplace" },
    { name: "description", content: "Digital Floral Marketplace" },
  ];
}

type PageKey = "index" | "flower" | "dekore" | "esentials" | "kerko" | "customize" | "signin";

export default function Home() {
  const [active, setActive] = useState<PageKey>("index");

  const renderActive = () => {
    switch (active) {
      case "flower":
        return <Flower />;
      case "dekore":
        return <Dekore />;
      case "esentials":
        return <Esentials />;
      case "kerko":
        return <Kerko />;
      case "customize":
        return <Customize />;
      case "signin":
        return <Signin />;
      case "index":
      default:
        return <Index />;
    }
  };

  return (
    <div>
      <div className="route-selector" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: 16 }}>
        <button onClick={() => setActive("index")} className={active === "index" ? "active" : ""}>Index</button>
        <button onClick={() => setActive("flower")} className={active === "flower" ? "active" : ""}>Flower</button>
        <button onClick={() => setActive("dekore")} className={active === "dekore" ? "active" : ""}>Dekore</button>
        <button onClick={() => setActive("esentials")} className={active === "esentials" ? "active" : ""}>Esentials</button>
        <button onClick={() => setActive("kerko")} className={active === "kerko" ? "active" : ""}>Kerko</button>
        <button onClick={() => setActive("customize")} className={active === "customize" ? "active" : ""}>Customize</button>
        <button onClick={() => setActive("signin")} className={active === "signin" ? "active" : ""}>Signin</button>
      </div>
      {renderActive()}
    </div>
  );
}
