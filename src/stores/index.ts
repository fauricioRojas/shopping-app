import { configure } from 'mobx';
import itemStore from './item';

// only methods decorated with @action can modify your state
configure({ enforceActions: 'observed' });

export default {
	itemStore,
};
