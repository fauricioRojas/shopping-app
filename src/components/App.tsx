import { inject, observer } from 'mobx-react';
import * as React from 'react';

interface IProps {
	itemStore: any;
}

@inject('itemStore')
@observer
class App extends React.Component<IProps, {}> {
	public render() {
		console.log(this.props.itemStore.itemList.map((item) => item.title));
		console.log(this.props.itemStore.totalItems);
		return (
			<section className="app-wrapper">
				<h1>Welcome to React with Typescript</h1>
			</section>
		);
	}
}

export default App;
