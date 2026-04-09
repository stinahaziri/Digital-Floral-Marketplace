import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Faqja kryesore
  route("kerko", "pages/Kerko.tsx"),
  route("personalizo", "pages/Personalizo.tsx"),
  route("hyr", "pages/Hyr.tsx"),
  route("regjistrohu", "pages/Regjistrohu.tsx"),
  route("lulet", "pages/Lulet.tsx"),
  route("esentials", "pages/Esentials.tsx"),
  route("dekore", "pages/Dekore.tsx"),

  // Admin routes
  route("admin", "pages/admin/AdminPasqyra.tsx"),
  route("admin/porosite", "pages/admin/AdminPorosite.tsx"),
  route("admin/produktet", "pages/admin/AdminProduktet.tsx"),
 
] satisfies RouteConfig;