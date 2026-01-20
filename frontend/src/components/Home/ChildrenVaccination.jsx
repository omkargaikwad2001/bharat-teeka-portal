import SectionWrapper from "./SectionWrapper";
import "./ChildrenVaccination.css";

import ChildrenVaccinationimg from "../../assets/Children_Vaccination.svg";

export default function ChildrenVaccination() {
    return (
        <SectionWrapper>
            <div className="col-md-6 d-flex flex-column justify-content-center">

                <h2 className="section-title mb-2 fw-bold text-start">Children Vaccination</h2>

                <p className="text-muted mb-3">
                    Government-approved vaccines now available for children to provide
                    safe protection against COVID-19 variants.
                </p>

                <div className="vaccine-grid mb-4">
                    <div className="vaccine-card">
                        <div className="vaccine-icon">
                            <i className="bi bi-shield-check"></i>
                        </div>
                        <h6 className="fw-semibold mb-1">Covovax</h6>
                        <p className="small text-muted mb-0">12+ years</p>
                    </div>

                    <div className="vaccine-card">
                        <div className="vaccine-icon">
                            <i className="bi bi-shield-check"></i>
                        </div>
                        <h6 className="fw-semibold mb-1">Corbevax</h6>
                        <p className="small text-muted mb-0">12–14 years</p>
                    </div>

                    <div className="vaccine-card">
                        <div className="vaccine-icon">
                            <i className="bi bi-shield-check"></i>
                        </div>
                        <h6 className="fw-semibold mb-1">Covaxin</h6>
                        <p className="small text-muted mb-0">15+ years</p>
                    </div>
                </div>

                <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-teal rounded-pill px-4">
                        Book Your Slot
                    </button>
                    <button className="btn rounded-pill px-4 secondary-btn">
                        Find Nearby Centers
                    </button>
                </div>
            </div>

            <div className="col-md-6 text-center">
                <img
                    src={ChildrenVaccinationimg}
                    className="hero-img children-img"
                    alt="Children Vaccination"
                />
            </div>
        </SectionWrapper>
    );
}
