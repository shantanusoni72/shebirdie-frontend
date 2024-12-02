import { useState } from 'react';
import './style.css';
import HassleFree from '../../../assets/hassle-free.png';
import Battery from '../../../assets/battery-assurance.png';
import NoQAsked from '../../../assets/no-questions.png';

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
                    <li><img src={HassleFree} alt='' /><p>Hassle-Free Replacement</p></li>
                    <li><img src={Battery} alt='' /><p>Battery Assurance</p></li>
                    <li><img src={NoQAsked} alt='' /><p>No Questions Asked</p></li>
                </ul>
            </div>
        </div>
    )
}