import { useState } from 'react';
import './style.css';

export default function Sub_Plans() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className={`sub_plan ${isChecked ? "active" : ""}`}>
            <p>Complete Care for Your Birdie</p>
            <div className="fake_button">
                <div>
                    <label class="switch">
                        <input onChange={handleCheckboxChange} id="checkbox" type="checkbox" />
                        <span class="switch-slider round"></span>
                    </label>
                    <p>Birdie Care Plan</p>
                </div>
                <p>$7.99</p>
            </div>
            <div className="lower">
                <ul>
                    <li><img src='assets/hassle-free.png' alt='' /><p>Hassle-Free Replacement</p></li>
                    <li><img src='assets/battery-assurance.png' alt='' /><p>Battery Assurance</p></li>
                    <li><img src='assets/no-questions.png' alt='' /><p>No Questions Asked</p></li>
                </ul>
            </div>
        </div>
    )
}