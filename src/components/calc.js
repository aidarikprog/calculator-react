import { useState } from 'react'
import './calc.scss'

export default function Calc(){

      const [val, setVal] = useState("")

      function clear(){
            try{
                  setVal(val.slice(0, -100000000000))
            }catch(error){
                  setVal('')
            }
      }
      const result = () =>{
            try{
                  setVal(eval(val))
            }catch(error){
                  setVal('Ошибка')
            }

      }
      return(
            <article class="calc">
                  <input onChange={(e) =>setVal(e.target.value)} value={val} type='text' class="calc__result" id="result"></input>

                  <button onClick={(e) =>setVal(val + e.target.value)} value='7' type="button" class="btn">7</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='8' type="button" class="btn">8</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='9' type="button" class="btn">9</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='+' type="button" class="btn calc__btn_operator">+</button>

                  <button onClick={(e) =>setVal(val + e.target.value)} value='4' type="button" class="btn">4</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='5' type="button" class="btn">5</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='6' type="button" class="btn">6</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='-' type="button" class="btn calc__btn_operator" >-</button>

                  <button onClick={(e) =>setVal(val + e.target.value)} value='1' type="button" class="btn">1</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='2' type="button" class="btn">2</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='3' type="button" class="btn">3</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='*' type="button" class="btn calc__btn_operator">*</button>

                  <button onClick={(e) =>setVal(val + e.target.value)} value='0' type="button" class="btn">0</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='.' type="button" class="btn">.</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='00' type="button" class="btn">00</button>
                  <button onClick={(e) =>setVal(val + e.target.value)} value='/' type="button" class="btn calc__btn_operator">/</button>

                  <button onClick={()=>{clear()}} type="button" class="btn calc__btn_reset">c</button>
                  <button onClick={(e) =>result(val + e.target.value)} value='=' type="button" class="btn calc__btn_equal">=</button>
            </article>
      )
}