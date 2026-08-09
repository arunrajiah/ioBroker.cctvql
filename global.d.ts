export {};

declare global {
    namespace ioBroker {
        interface AdapterConfig {
            host: string;
            port: number;
            protocol: 'http' | 'https';
            apiKey: string;
            pollingInterval: number;
        }
    }
}
