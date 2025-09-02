import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodReview = () => {
    setGood(good + 1)
  }
  const neutralReview = () => {
    setNeutral(neutral + 1)
  }
  const badReview = () => {
    setBad(bad + 1)
  }
  

  return (
    <div>
      <h2>feedback buttons</h2>
      <Button onClick={goodReview} text = {"good"}/>
      <Button onClick={neutralReview} text = {"neutral"}/>
      <Button onClick={badReview} text = {"bad"}/>
      <h2>statistics</h2>
      
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

const Statistics = (props) => {
  console.log(props)
  if (props.good + props.neutral + props.bad === 0) {
    return (
    <div>no feedback given</div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text= {"Good"} value = {props.good}/>
        <StatisticsLine text= {"Neutral"} value = {props.neutral}/>
        <StatisticsLine text= {"Bad"} value = {props.bad}/>
        <StatisticsLine text= {"All"} value = {props.good + props.neutral + props.bad}/>
        <StatisticsLine text= {"Average"} value = {(props.good-props.bad)/(props.good+props.bad+props.neutral)}/>
        <StatisticsLine text= {"Positive"} value = {(props.good)/(props.good+props.bad+props.neutral)*100 + " %"}/>
      </tbody>
    </table>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>
    {props.text}
    </button>
  )
}

export default App