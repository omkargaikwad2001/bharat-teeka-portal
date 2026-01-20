import SectionWrapper from "./SectionWrapper";
import "./DateCorrection.css";

import DateCorrectionimg from "../../assets/Date_Correction.svg";

export default function DateCorrection() {
    return (
        <SectionWrapper bg>

            <div className="col-md-6 text-center order-md-1">
                <img
                    src={DateCorrectionimg}
                    className="hero-img date-img"
                    alt="Date Correction"
                />
            </div>


            <div className="col-md-6 d-flex flex-column justify-content-center order-md-2">

                <h2 className="section-title mb-2 fw-bold text-start">Vaccination Date Correction</h2>

                <p className="text-muted mb-3">
                    Fix incorrect dates printed on your vaccination certificate.
                    Update your records accurately for travel, jobs, or official verification.
                </p>

                <div className="correction-steps mb-4">
                    <div className="step-item">
                        <div className="step-number">1</div>
                        <div>
                            <h6 className="fw-semibold mb-1">Login to CoWIN</h6>
                            <p className="small text-muted mb-0">Use registered mobile number</p>
                        </div>
                    </div>

                    <div className="step-item">
                        <div className="step-number">2</div>
                        <div>
                            <h6 className="fw-semibold mb-1">Upload Proof</h6>
                            <p className="small text-muted mb-0">Attach vaccination center certificate</p>
                        </div>
                    </div>

                    <div className="step-item">
                        <div className="step-number">3</div>
                        <div>
                            <h6 className="fw-semibold mb-1">Get Updated Certificate</h6>
                            <p className="small text-muted mb-0">Download corrected version (3-7 days)</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-teal rounded-pill px-4">
                        Update Date
                    </button>
                    <button className="btn rounded-pill px-4 secondary-btn">
                        View FAQ
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
}
