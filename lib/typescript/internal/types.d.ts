export declare type DeviceType = 'Handset' | 'Tablet' | 'Tv' | 'unknown';
export declare type BatteryState = 'unknown' | 'unplugged' | 'charging' | 'full';
export interface PowerState {
    batteryLevel: number;
    batteryState: BatteryState;
    lowPowerMode: boolean;
    [key: string]: any;
}
export interface LocationProviderInfo {
    [key: string]: boolean;
}
export interface AsyncHookResult<T> {
    loading: boolean;
    result: T | -1 | false | 'unknown';
}
