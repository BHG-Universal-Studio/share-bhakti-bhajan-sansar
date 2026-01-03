const player = document.getElementById("player");
const thumbnail = document.getElementById("thumbnail");
const loader = document.getElementById("loader");

function getVideoIdFromPath() {
  const path = window.location.pathname.replace("/", "").trim();
  return path || null;
}

const videoId = getVideoIdFromPath();

if (!videoId) {
  loader.style.display = "none";
  alert("वीडियो नहीं मिला");
} else {
  // Thumbnail (UI only)
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  thumbnail.style.backgroundImage = `url(${thumbUrl})`;

  // 🔒 MAXIMUM RESTRICTION YOUTUBE EMBED
  player.src =
    `https://www.youtube.com/embed/${videoId}` +
    `?autoplay=0` +
    `&mute=0` +
    `&playsinline=1` +
    `&controls=0` +
    `&rel=0` +
    `&modestbranding=1` +
    `&iv_load_policy=3` +   // hide annotations
    `&fs=0` +               // disable fullscreen
    `&disablekb=1`;         // disable keyboard shortcuts

  player.onload = () => {
    loader.style.display = "none";
    thumbnail.style.display = "none";
  };
}

/* External credit (policy safe) */
function openInYouTube() {
  window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
}

function openInApp() {
  window.location.href = `bhaktibhajan://video/${videoId}`;
}
