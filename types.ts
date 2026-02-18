
export interface Metric {
  label: string;
  target: string;
  value: number; // For visualization
  unit: '%' | 'hours' | 'score' | 'win-rate';
  description: string;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: string[];
  type: 'intro' | 'grid' | 'comparison' | 'metrics' | 'vision' | 'closing' | 'dos-donts';
  metrics?: Metric[];
  highlight?: string;
  columns?: { title: string; items: string[]; question: string }[];
  dos?: string[];
  donts?: string[];
}
