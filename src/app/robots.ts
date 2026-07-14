import type { MetadataRoute } from 'next';
import { STORY } from '@/config/variables';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const origin = new URL(STORY.url).origin;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
