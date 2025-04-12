import React, { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null); 

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz";

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*():><[]{}";

    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numAllowed, passwordGenerator])

  return (
    <div className="container">
      <div className="password-container">
        <h1>Password Generator</h1>
        
        <div className="input-group">
          <input 
            type="text" 
            value={password}
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button onClick={copyPassword}>Copy</button>
        </div>
        
        <div className="controls">
          <div className="control-group">
            <input 
              type="range" 
              min={8}
              max={20}
              value={length}
              id="lengthSlider"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="lengthSlider">Length: {length}</label>
          </div>
          
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input 
                type="checkbox" 
                id="numbersCheck"
                checked={numAllowed}
                onChange={() => setNumAllowed(prev => !prev)}
              />
              <label htmlFor="numbersCheck">Numbers</label>
            </div>
            
            <div className="checkbox-item">
              <input 
                type="checkbox" 
                id="charsCheck"
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
              />
              <label htmlFor="charsCheck">Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App