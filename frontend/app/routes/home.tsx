import type { Route } from "./+types/home";
import Index from "../pages/Index"; //fillon ketu

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Digital-Floral-Marketplace" },
    { name: "description", content: "Welcome to the Digital Floral Marketplace 🌸" },
  ];
}

export default function Home() {
  
  return (
    <div>
      <Index />
    </div>
  );
}