import './style.css';
import HassleFree from '../../../assets/hassle-free.png';
import Battery from '../../../assets/battery-assurance.png';
import NoQAsked from '../../../assets/no-questions.png';

export default function Sub_Plans() {
    return (
        <div className="sub_plan">
            <p>Complete Care for Your Birdie</p>
            <div className="fake_button">
                <p>Birdie Care Plan</p>
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