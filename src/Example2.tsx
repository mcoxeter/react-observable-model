import React from 'react';
import { Model1 } from './model1';

export interface Example2Props {
  model: Model1;
}

export class Example2 extends React.Component<Example2Props> {
  disposer = () => {};
  render() {
    return (
      <div>
        <span>Exmaple2's Age </span>
        <span>{this.props.model.age}</span>
      </div>
    );
  }

  componentDidMount() {
    /**
     * A component can 'observe' a property by subscribing to updates
     * to the model.
     *
     * React classes have a helper method 'forceUpdate'
     * that will re-render the component.
     *
     * subscribe also return a method, that when called will remove
     * the callback from its subscriptions.
     */
    this.disposer = this.props.model.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.disposer();
  }
}
