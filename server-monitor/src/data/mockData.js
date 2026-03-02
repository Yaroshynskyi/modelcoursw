export const MOCK_SERVERS = [
  {
    id: 1,
    name: "Alpha-Node-01",
    ip: "192.168.1.10",
    region: "Kyiv-DC",
    status: "online", 
    cpu: 45,
    ram: 60,
    temp: 58,
    uptime: "14d 2h"
  },
  {
    id: 2,
    name: "Beta-DB-Cluster",
    ip: "192.168.1.15",
    region: "Lviv-DC",
    status: "critical",
    cpu: 98,
    ram: 92,
    temp: 89,
    uptime: "45d 12h"
  },
  {
    id: 3,
    name: "Gamma-Storage",
    ip: "192.168.1.20",
    region: "Kyiv-DC",
    status: "online",
    cpu: 12,
    ram: 34,
    temp: 42,
    uptime: "2d 5h"
  },
  {
    id: 4,
    name: "Delta-Proxy-01",
    ip: "10.0.0.5",
    region: "AWS-Frankfurt",
    status: "offline",
    cpu: 0,
    ram: 0,
    temp: 0,
    uptime: "0m"
  }
  
];

export const MOCK_INCIDENTS = [
  { id: 101, server: "Beta-DB-Cluster", type: "High CPU Load", severity: "critical", time: "10:42 AM", status: "Open" },
  { id: 102, server: "Delta-Proxy-01", type: "Connection Timeout", severity: "critical", time: "09:15 AM", status: "Open" },
  { id: 103, server: "Alpha-Node-01", type: "Disk Space Low", severity: "warning", time: "Yesterday", status: "Resolved" },
  { id: 104, server: "Gamma-Storage", type: "High Latency", severity: "warning", time: "Yesterday", status: "Resolved" },
];

export const MOCK_LOGS = [
  { id: 1, time: "2023-10-25 10:45:01", level: "INFO", source: "AuthService", message: "User 'admin' logged in successfully." },
  { id: 2, time: "2023-10-25 10:44:55", level: "WARN", source: "MetricIngest", message: "High latency detected from agent-02 (250ms)." },
  { id: 3, time: "2023-10-25 10:42:12", level: "ERROR", source: "HealthCheck", message: "Beta-DB-Cluster CPU usage > 95% threshold exceeded." },
  { id: 4, time: "2023-10-25 10:40:00", level: "INFO", source: "System", message: "Scheduled backup completed successfully." },
  { id: 5, time: "2023-10-25 10:38:11", level: "DEBUG", source: "NetworkLayer", message: "Packet loss 0.1% on interface eth0." },
  { id: 6, time: "2023-10-25 10:35:22", level: "INFO", source: "System", message: "Service 'nginx' restarted." },
];