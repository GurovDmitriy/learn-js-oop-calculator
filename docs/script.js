!function(){"use strict";class t{constructor(){this.numA="",this.numB=""}get numA(){return this._numA}set numA(t){t||(this._numA=""),this._checkValue(t)&&(this._numA=t)}get numB(){return this._numB}set numB(t){t||(this._numB=""),this._checkValue(t)&&(this._numB=t)}reset(){this.numA="",this.numB=""}_checkValue(t){if(t.length>9)throw new Error("invalid length number");return!0}}class e{constructor(){this.numA=null,this.numB=null,this.result=null}get numA(){return this._numA}set numA(t){this._numA=t||0===t?t:null}get numB(){return this._numB}set numB(t){this._checkValue(t)?this._numB=null:this._numB=t}get result(){return this._result}set result(t){this._checkValue(t)?this._result=null:this._result=t}check(t,e){return this.numA===t&&this.numB===e}update(t,e,s){this.numA=t,this.numB=e,this.result=s}reset(){this.numA=null,this.numB=null,this.result=null}_checkValue(t){return!t&&0!==t}}class s{constructor(){this.cache=new e}plus(t,e){if(this.cache.check(t,e))return this.cache.result;const s=t+e;return this._result(t,e,s)}minus(t,e){if(this.cache.check(t,e))return this.cache.result;const s=t-e;return this._result(t,e,s)}multiple(t,e){if(this.cache.check(t,e))return this.cache.result;const s=t*e;return this._result(t,e,s)}divide(t,e){if(this.cache.check(t,e))return this.cache.result;const s=t/e;return this._result(t,e,s)}_result(t,e,s){const i=this._formatResult(s);return this._checkResult(i)&&this.cache.update(t,e,i),i}_formatResult(t){return Number.isInteger(t)?t:t.toFixed(4)}_checkResult(t){if(String(t).length>9)throw new Error("invalid length number");return!0}}class i{constructor(){this.action="",this.isCalculateResult=!1,this.numbers=new t,this.operation=new s}get action(){return this._action}set action(t){this._action=t}get isCalculateResult(){return this._isCalculateResult}set isCalculateResult(t){this._isCalculateResult=t}setNum(t){this.action?this.numbers.numB+=t:this.numbers.numA+=t}reset(){this.action="",this.numbers.numA="",this.numbers.numB="",this.isCalculateResult=!1}result(){const t=Number(this.numbers.numA),e=Number(this.numbers.numB);return this.operation[this.action](t,e)}}new class{constructor(){this.calculator=new i,this._initBtnNum(),this._initBtnOperation(),this._initBtnClear(),this._initBtnDot(),this._initBtnResult(),this._initKeyup(),this._initDisplay=this._initDisplay()}_initKeyup(){document.addEventListener("keyup",(t=>{const e=t.key,s={"+":"plus","-":"minus","*":"multiple","/":"divide"};switch(e){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":this._pushBtnNum(Number(e));break;case"+":case"-":case"/":case"*":this._pushBtnOperation(s[e]);break;case"=":this._pushBtnResult();break;case"Backspace":case"Delete":this._pushBtnClear();break;case".":this._pushBtnDot()}}))}_initBtnNum(){for(let t=0;t<=9;t++){const e=`num-${t}`;document.getElementById(e).addEventListener("click",(()=>{this._pushBtnNum(t)}))}}_initBtnOperation(){["plus","minus","multiple","divide"].forEach((t=>{document.getElementById(t).addEventListener("click",(()=>{this._pushBtnOperation(t)}))}))}_initBtnResult(){document.getElementById("result").addEventListener("click",(()=>{this._pushBtnResult()}))}_initBtnClear(){document.getElementById("clear").addEventListener("click",(()=>{this._pushBtnClear()}))}_initBtnDot(){document.getElementById("dot").addEventListener("click",(()=>{this._pushBtnDot()}))}_initDisplay(){return{operation:document.querySelector(".calculator__operations"),result:document.querySelector(".calculator__result"),error:document.querySelector(".calculator__error")}}_pushBtnNum(t){try{this._initDisplay.error.textContent="no error",this._checkBtnNum()&&this.calculator.reset(),this.calculator.setNum(t),this.calculator.action?(this._initDisplay.result.textContent=this.calculator.numbers.numB,this._setDisplayOperation()):(this._initDisplay.result.textContent=this.calculator.numbers.numA,this._setDisplayOperation())}catch(t){this._initDisplay.error.textContent=t.message}}_pushBtnOperation(t){try{this._initDisplay.error.textContent="no error";const e={plus:"+",minus:"-",divide:"/",multiple:"*"};this._checkBtnOperation()&&(this.calculator.action=t,this._initDisplay.result.textContent=e[this.calculator.action],this._setDisplayOperation())}catch(t){this._initDisplay.error.textContent=t.message}}_pushBtnResult(){try{if(this._initDisplay.error.textContent="no error",this._checkBtnResult()){this.calculator.isCalculateResult=!0;const t=this.calculator.result();this._initDisplay.result.textContent=t,this._initDisplay.operation.textContent+=` = ${t}`}}catch(t){this._initDisplay.error.textContent=t.message}}_pushBtnClear(){try{this._initDisplay.error.textContent="no error",this.calculator.numbers.reset(),this._initDisplay.result.textContent=0,this._initDisplay.operation.textContent="history"}catch(t){this._initDisplay.error.textContent=t.message}}_pushBtnDot(){try{if(!this._checkBtnDot())return!1;this.calculator.setNum("."),this.calculator.action?(this._initDisplay.result.textContent=this.calculator.numbers.numB,this._setDisplayOperation()):(this._initDisplay.result.textContent=this.calculator.numbers.numA,this._setDisplayOperation())}catch(t){this._initDisplay.error.textContent=t.message}}_setDisplayOperation(){const t=this.calculator.numbers.numA,e=this.calculator.numbers.numB,s=this.calculator.action?{plus:"+",minus:"-",divide:"/",multiple:"*"}[this.calculator.action]:"";this._initDisplay.operation.textContent=`${t} ${s} ${e}`}_checkBtnResult(){if(!this.calculator.numbers.numA)throw new Error("numA is required");if(!this.calculator.numbers.numB)throw new Error("numB is required");if(!this.calculator.action)throw new Error("action is required");return!this.calculator._isCalculateResult}_checkBtnOperation(){if(!this.calculator.numbers.numA)throw new Error("numA is required");return!0}_checkBtnNum(){return!!this.calculator.isCalculateResult}_checkBtnDot(){const t=this.calculator.numbers.numA,e=this.calculator.numbers.numB;return!(!t||!e&&t.includes(".")||e&&e.includes(".")||this.calculator._isCalculateResult)}}}();