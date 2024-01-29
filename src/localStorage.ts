export class useLocalStrogage {
	constructor (key: string) {
		this.key: string = key;
		this.lenght;
	}

	getItem (): any {
		const item: string | null = localStorage.getItem(this.key);
		
		if ((item !== null) && item.length !== 0) {
			return JSON.parse(item);
		}

		return null;
	}

	setItem (value: any): boolean {
		const item: string = JSON.stringify(value);

		if (item !== null && item.length !== 0) {
			localStorage.setItem(this.key, item);

			return true;
		}

		return false;
	}

	clear(): void {
		localStorage.clear(this.key);
	}
}