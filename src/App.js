import "./App.css";

function App() {
  const number = document.querySelector(".number");
  const time = document.getElementById("time");
  const interval = document.getElementById("interval");
  let sum = 0;
  function Increment() {
    let inter = interval.value;
    let tim=time.value
    if(inter.length==0)
    return alert('Interval kiriting !')
    else{
      if(tim>0){
        setTimeout(()=>{
          sum+=+inter;
          number.innerHTML=sum;
        },tim*1000)
   }else{
    sum+=+inter;
    number.innerHTML=sum;
   }
  }}
  function Decrement() {
    let inter = interval.value;
    let tim=time.value
    if(inter.length==0)
    return alert('Interval kiriting !')
    else{
      if(tim>0){
        setTimeout(()=>{
          sum+=-(+inter);
          number.innerHTML=sum;
        },tim*1000)
      } else{
    sum+=-(+inter);
    number.innerHTML=sum;}
  }}
  return (
    <div className='App'>
      <h1 className='number'>0</h1>
      <div className='btns'>
        <button onClick={Decrement} className='decrement'>Decrement</button>
        <button onClick={Increment} className='increment'>
          Increment
        </button>
      </div>
      <div className='labels'>
        <label htmlFor='time'>Time</label>
        <label htmlFor='interval'>Interval</label>
      </div>

      <div className='inpts'>
        <input id='time' placeholder='Time' type='number' />
        <input id='interval' placeholder='Interval' type='number' />
      </div>
    </div>
  );
}

export default App;
