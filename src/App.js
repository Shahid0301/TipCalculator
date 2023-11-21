import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [service, setServiceBill] = useState(0);
  const [friend, setFriend] = useState(0);
  function resetAll() {
    setBill("");
    setFriend(0);
    setServiceBill(0);
  }
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Service service={service} setServiceBill={setServiceBill} />
      <Friend friend={friend} setFriend={setFriend} />
      {bill > 0 && (
        <>
          <Output
            bill={bill}
            service={service}
            friend={friend}
            resetAll={resetAll}
          />
        </>
      )}
    </div>
  );
}
function Bill({ bill, setBill }) {
  return (
    <div>
      How much was the bill?
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}
function Service({ service, setServiceBill }) {
  return (
    <div>
      How did you like the servie?
      <select
        value={service}
        onChange={(e) => setServiceBill(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Okay(5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}
function Friend({ friend, setFriend }) {
  return (
    <div>
      How did your friend like this service?
      <select
        value={friend}
        onChange={(e) => setFriend(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Okay(5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, friend, service, resetAll }) {
  const tip = bill * ((friend + service) / 100);
  return (
    <div>
      you pay {+bill + tip} (${bill}+${tip}Tip)
      <br />
      <button onClick={resetAll}>reset</button>
    </div>
  );
}
