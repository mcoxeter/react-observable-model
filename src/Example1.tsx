/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useReducer } from 'react';
import { Model1 } from './model1';
import { Model2 } from './model2';

export interface OneProps {
  model1: Model1;
  model2: Model2;
}
export const Example1: FC<OneProps> = (props) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  /**
   * A component can 'observe' a property by subscribing to updates
   * to the model.
   */
  useEffect(() => {
    const unsub1 = props.model1.subscribe(forceUpdate);
    const unsub2 = props.model2.subscribe(forceUpdate);
    return () => {
      unsub1();
      unsub2();
    };
  }, []);

  const click = () => props.model1.clickCount++;

  return (
    <>
      <div>Example1's Age {props.model1.age}</div>
      <div onClick={click}>
        Example1's Click count {props.model1.clickCount}
      </div>
      <div>Example1's Id {props.model2.id}</div>
    </>
  );
};
