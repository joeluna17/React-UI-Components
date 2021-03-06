import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from "./components/ButtonComponents/ActionButton";


// const App = () => {
//   const numberList = ['0','1','2','3','4','5','6','7','8','9', 'clear']
//   const mathFunctionList=["÷",'×','−',"+", "="]
//   return (
//     <div className="app-container">

//       <CalculatorDisplay mathCalcNumber="0" />
//       <div className="action-button-container">
//       <div className="numberspad-container">
//           {numberList.map(number => {
            
//                    if ( number === "0" || number === "clear") {
//                         if (number === "clear"){
//                             return <NumberButton buttonStyles={"long-button-text"} numberList= {number} key={number} />
//                             } else {
//                                 return <NumberButton buttonStyles={"long-button"} numberList= {number} key={number}/>
//                         }
//                   } else {
//                       return <NumberButton numberList= {number} key={number}/>
//                   }

//            }).reverse()}
//        </div>

//        <div className="arithmatic-buttons-wrapper">
//           { mathFunctionList.map( calcfunc => {
//               return <ActionButton textLabel = {calcfunc}/>
//           }
//           )}
//        </div>
//        </div>
//     </div>
//      )};


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      numberList:['0','1','2','3','4','5','6','7','8','9', 'clear'],
      mathFunctionList:["÷",'×','−',"+", "="],
      displayTotal: 0,
      totalNum: 0
    };

    this.numberButtonClicked = this.numberButtonClicked.bind(this);
        
  }

  numberButtonClicked(e){

   this.totalNum = `${this.totalNum + e.target.textContent}`
   this.setState({
        displayTotal: this.totalNum
   })
 
  }

  clearFunction(e){
    this.setState({
      displayTotal: 0,
      
    })
    this.totalNum = '';
  }


render(){
        
  return (
      
      <div className="app-container">
      <CalculatorDisplay mathCalcNumber={this.state.displayTotal} />
      <div className="action-button-container">
      <div className="numberspad-container">
          {this.state.numberList.map(number => {
            
                   if ( number === "0" || number === "clear") {
                        if (number === "clear"){
                            return <NumberButton clicked={(e) => this.clearFunction(e)}   buttonStyles={"long-button-text"} numberList= {number} key={number} />
                            } else {
                                return <NumberButton  clicked={(e)=> this.numberButtonClicked(e)} buttonStyles={"long-button"} numberList= {number} key={number}/>
                        }
                  } else {
                      return <NumberButton clicked={(e)=> this.numberButtonClicked(e)} numberList= {number} key={number}/>
                  }

           }).reverse()}
       </div>

       <div className="arithmatic-buttons-wrapper">
          { this.state.mathFunctionList.map( calcfunc => {
              return <ActionButton textLabel = {calcfunc} key= {calcfunc}/>
          }
          )}
       </div>
       </div>
    </div>
  )}

}


export default App;

