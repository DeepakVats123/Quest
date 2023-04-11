import React from 'react'

const BmiCalculator = () => {
  return (
    <div>
        <h1>BmiCalculator</h1>
        <div>
            <label>Age: </label>
            <input placeholder='Age' type='number' min="2" max="200" />
        </div>
        <div>
            <label>Gender: </label>
            <select name="Select Gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <div>
            <label>Height: </label>
            <input placeholder='Height' type='number' min="24" max="96" />
        </div>

        <div>
            <label>Weight: </label>
            <input placeholder='Weight' type='number' min="1" max="150" />
        </div>

        <div>
            <button>Calculate</button>
        </div>

        
    </div>
  )
}

export default BmiCalculator