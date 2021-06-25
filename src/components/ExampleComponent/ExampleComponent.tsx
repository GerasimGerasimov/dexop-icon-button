/**
 * @class ExampleComponent
 */

 import * as React from 'react';

 import './ExampleComponent.css';
 
 export interface IExampleComponentProps {
    /**
     * Simple text prop
     **/
    text: string;
 }
 
 /** My First component */
 export class ExampleComponent extends React.Component<IExampleComponentProps> {
    render() {
       const { text } = this.props;
 
       return (
          <div className="test">
             Example Component: {text}
             <p>Coool!</p>
          </div>
       );
    }
 }
