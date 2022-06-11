type EnumItems = Array<string>;

export default class EnumList {
	public constructor(name: string, enums: EnumItems);

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	public BelongsTo(obj: any): boolean;

	public GetEnumItems(): EnumItems;

	public GetName(): string;
}
