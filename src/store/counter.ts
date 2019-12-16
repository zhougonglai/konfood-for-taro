import { observable, action } from 'mobx';

class CounterStore {
	@observable
	counter = 0;

	@action
	increment() {
		this.counter++;
	}

	@action decrement() {
		this.counter--;
	}

	@action incrementAsync() {
		queueMicrotask(() => {
			this.counter++;
		});
	}
}

export default new CounterStore();
