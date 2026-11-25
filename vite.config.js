import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Com VITE_SITE_URL definido (ex.: https://www.meusite.com.br), o build acrescenta
// canonical, og:url, og:image absoluto e gera o sitemap.xml. Sem ele, nada disso é inserido.
function siteUrlPlugin(siteUrl) {
  const base = siteUrl.replace(/\/+$/, '');
  return {
    name: 'site-url',
    transformIndexHtml(html) {
      if (!base) return html;
      return html
        .replace('/images/og-image.jpg', `${base}/images/og-image.jpg`)
        .replace(
          '<meta property="og:type"',
          `<link rel="canonical" href="${base}/" />\n    <meta property="og:url" content="${base}/" />\n    <meta property="og:type"`,
        );
    },
    generateBundle() {
      if (!base) return;
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${base}/</loc></url>\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return { plugins: [react(), siteUrlPlugin(env.VITE_SITE_URL || '')] };
});
