import { AnalyticsBrowser } from '@segment/analytics-next';

const keySegment: string = process.env.NEXT_PUBLIC_KEY_SEGMENT!;
export const analytics = AnalyticsBrowser.load({ writeKey: keySegment });
