import React from 'react';

interface ArchitectureNodeProps {
  name: string;
  type: 'backend' | 'frontend' | 'database' | 'service';
  connections: string[];
  status: 'active' | 'inactive' | 'degraded';
  metrics?: {
    requests?: string;
    latency?: string;
  };
}

const ArchitectureNode: React.FC<ArchitectureNodeProps> = ({
  name,
  type,
  connections,
  status,
  metrics,
}) => {
  return (
    <div className={`architecture-node ${type} ${status}`}>
      <h3>{name}</h3>
      <p>Connections: {connections.join(', ')}</p>
      {metrics && (
        <div className="metrics">
          {metrics.requests && <p>Requests: {metrics.requests}</p>}
          {metrics.latency && <p>Latency: {metrics.latency}</p>}
        </div>
      )}
    </div>
  );
};

export default ArchitectureNode;
