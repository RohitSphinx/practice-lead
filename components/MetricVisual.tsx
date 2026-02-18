
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { Metric } from '../types';

interface MetricVisualProps {
  metric: Metric;
}

export const MetricVisual: React.FC<MetricVisualProps> = ({ metric }) => {
  if (metric.unit === '%' || metric.unit === 'win-rate') {
    const data = [
      { name: 'Current', value: metric.value },
      { name: 'Remaining', value: Math.max(0, 100 - metric.value) },
    ];
    // Blue for primary, soft gray for empty
    const COLORS = ['#2563eb', '#f1f5f9'];

    return (
      <div className="h-24 w-24">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={25}
              outerRadius={40}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // Bar style for others
  const data = [{ name: metric.label, value: metric.value }];
  
  return (
    <div className="h-24 w-full pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <XAxis type="number" hide domain={[0, Math.max(metric.value * 1.5, 10)]} />
          <YAxis dataKey="name" type="category" hide />
          <Bar dataKey="value" fill="#2563eb" radius={[0, 4, 4, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
