export interface IAdvancedStats {
  cpu: { value: string; time: string }[];
  disk: { value: string; time: string }[];
  memory: { value: string; time: string }[];
  network: { value: { input: number; output: number }; time: string }[];
}

export interface IDockerTaskStats {
  [key: string]: {
    actual: number;
    desired: number;
  };
}

export interface ISystemStats {
  uptime: number;
  memInfo: {
    totalMemMb: number;
    usedMemMb: number;
    freeMemMb: number;
    usedMemPercentage: number;
    freeMemPercentage: number;
  };
  diskInfo: {
    totalGb: string;
    usedGb: string;
    freeGb: string;
    usedPercentage: string;
    freePercentage: string;
  };
  cpuInfo: {
    usedPercentage: number;
    count: number;
    loadavg: number[];
  };
  network: {
    inputMb: number;
    outputMb: number;
  };
}

export interface IContainerStats {
  id: string;
  stats: {
    cpu: {
      percent: number;
    };
    memory: {
      usage: number;
      percent: number;
    };
    network: {
      in: number;
      out: number;
    };
  };
  projectName: string;
  serviceName: string;
  containerName: string;
}
