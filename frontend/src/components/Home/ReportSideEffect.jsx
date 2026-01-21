import SectionWrapper from "./SectionWrapper";
import "./ReportSideEffect.css";
import reportsaefi from "../../assets/reports-aefi.svg";

export default function ReportSideEffect() {
    return (
        <SectionWrapper bg>
            <div className="col-md-6 text-center">
                <img
                    src={reportsaefi}
                    className="hero-img report-img"
                    alt="Report Side Effect"
                />
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center">


                <h3 className="section-title mb-2 fw-bold text-start">
                    Report Side Effect
                </h3>


                <p className="text-muted mb-3">
                    If you experienced any side effect after COVID‑19 vaccination, you can
                    securely report it using your registered mobile number and basic visit details.
                </p>

                <ul className="list-unstyled report-list mb-3">
                    <li>
                        <i className="bi bi-exclamation-circle me-2 text-teal"></i>
                        Report symptoms like fever, rash, breathing difficulty, chest pain, or anything unusual.
                    </li>
                    <li>
                        <i className="bi bi-shield-lock me-2 text-teal"></i>
                        Your report is confidential and helps improve vaccine safety monitoring.
                    </li>
                    <li>
                        <i className="bi bi-clock-history me-2 text-teal"></i>
                        Ideally report within 7 days of vaccination or as soon as symptoms appear.
                    </li>
                </ul>

                <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-teal rounded-pill px-4">
                        Report Now
                    </button>
                    <button className="btn  rounded-pill px-4 secondary-btn">
                        View Common Side Effects
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
}
