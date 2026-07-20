import { mergeMargins } from '@/config/layout';

interface SpotifyEmbedProps {
  /** URL Spotify complète (piste, album, playlist...) — l'id et le type sont extraits automatiquement */
  url: string;
  caption?: string | null;
  className?: string;
}

const SPOTIFY_URL_RE = /open\.spotify\.com\/(track|album|playlist|artist|episode|show)\/([a-zA-Z0-9]+)/;

/**
 * Embed Spotify officiel (iframe), au format compact.
 * Centré dans la colonne de lecture, avec le même habillage (coins arrondis,
 * ombre) que les autres médias intégrés de la story.
 */
export function SpotifyEmbed({ url, caption, className = "" }: SpotifyEmbedProps) {
  const match = url.match(SPOTIFY_URL_RE);
  if (!match) return null;
  const [, type, id] = match;
  const embedSrc = `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`;

  return (
    <figure className={`${mergeMargins("mt-12 mb-6 md:mb-12", className)} w-full max-w-md mx-auto`}>
      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <iframe
          src={embedSrc}
          width="100%"
          height="152"
          style={{ border: 0 }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Lecteur Spotify"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs text-black text-left font-light leading-snug">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
