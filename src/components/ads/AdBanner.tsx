import { useEffect } from 'react';

interface AdBannerProps {
  id: string;
  className?: string;
  format?: 'horizontal' | 'vertical' | 'rectangle';
}

export function AdBanner({ id, className = '', format = 'horizontal' }: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div id={id} className={`flex items-center justify-center ${className}`}>
      {/* Replace with actual AdSense code after approval */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot="YOUR_AD_SLOT"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <div className="text-muted-foreground text-xs">Advertisement</div>
    </div>
  );
}
