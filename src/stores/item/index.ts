import { action, computed, observable } from 'mobx';
import Item from './itemModel';

class ItemStore {
	@observable public itemList: Item[] = [
		{
			description: 'New show for men',
			isNew: true,
			price: 79,
			quantity: 30,
			title: 'Cat Transform',
		},
		{
			description: 'New show for men',
			isNew: true,
			price: 73,
			quantity: 30,
			title: 'Cat Waterproof',
		},
	];

	@computed get totalItems() {
		return this.itemList.length;
	}

	@action.bound public addItem(item: Item) {
		this.itemList.push(item);
	}
}

export default new ItemStore();
