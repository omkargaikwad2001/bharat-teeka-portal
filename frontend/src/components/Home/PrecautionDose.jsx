import SectionWrapper from "./SectionWrapper";
import "./PrecautionDose.css";
import Precaution_dose from "../../assets/Precaution_dose.svg";

export default function PrecautionDose() {
    return (
        <SectionWrapper bg>
            <div className="col-md-6 d-flex flex-column justify-content-center">

                <h2 className="section-title mb-2 fw-bold text-start">
                    Free COVID Precaution Dose
                </h2>


                <p className="text-muted mt-2 mb-3">
                    Citizens aged 18–59 can now receive a precaution (booster) dose
                    at government vaccination centers at no cost, strengthening
                    protection against new variants.
                </p>

                <ul className="list-unstyled mb-3 precaution-list">
                    <li>
                        <i className="bi bi-shield-check me-2 text-teal"></i>
                        Extra protection after your primary doses
                    </li>
                    <li>
                        <i className="bi bi-geo-alt me-2 text-teal"></i>
                        Available at nearby government centers
                    </li>
                    <li>
                        <i className="bi bi-phone me-2 text-teal"></i>
                        Digital certificate updated instantly on CoWIN
                    </li>
                </ul>

                <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-teal rounded-pill px-4">
                        Book Your Slot
                    </button>
                    <button class="btn  rounded-pill px-4 secondary-btn">
                        Check Eligibility
                    </button>

                </div>
            </div>

            <div className="col-md-6 text-center">
                <img
                    src={Precaution_dose}
                    className="hero-img precaution-img"
                    alt="Precaution Dose"
                />
            </div>
        </SectionWrapper>
    );
}
