export async function onRequest(context) {
  const url = new URL(context.request.url);
  const videoId = url.pathname.replace("/", "").trim();

  const image = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : "https://bhakti-bhajan-sansar.pages.dev/logo.png";

  const html = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <title>भक्ति भजन संसार</title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- ✅ SERVER SIDE OG (WHATSAPP SAFE) -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="भक्ति भजन संसार" />
  <meta property="og:title" content="भक्ति भजन देखें" />
  <meta property="og:description"
        content="लाइव भजन, आरती, मंत्र और आध्यात्मिक वीडियो देखें — भक्ति भजन संसार" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1280" />
  <meta property="og:image:height" content="720" />
  <meta property="og:url" content="${url.href}" />

  <meta name="twitter:card" content="summary_large_image" />

  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="app"></div>
  <script src="/app.js"></script>
</body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=UTF-8" }
  });
}
