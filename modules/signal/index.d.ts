declare class Connection {
	public readonly Connected: boolean;

	public Disconnect(): void;
}

export default class Signal {
	public constructor();

	public static Wrap(rbxScriptSignal: RBXScriptSignal): Signal;

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	public static Is(obj: any): boolean;

	public Connect(fn: Callback): Connection;

	public ConnectOnce(fn: Callback): Connection;

	public GetConnections(): Array<Connection>;

	public DisconnectAll(): void;

	public Fire(...args: Array<any>): void;

	public FireDeferred(...args: Array<any>): void;

	public Wait(): void;

	public Destroy(): void;
}
