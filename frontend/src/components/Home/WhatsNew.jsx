import "./WhatsNew.css";
import whatnew from "../../assets/what's_new_on_cowin.svg";
export default function WhatsNew() {
    const items = [
        {
            text: 'New feature to report side effects after COVID-19 vaccination.',
        },
        {
            text: 'Early administration of a precaution dose of COVID-19 vaccine prior to the prescribed time interval.',
        },
        {
            text: 'HCW/FLW and citizens in 60+ age group can now avail precaution dose.',
        },
        {
            text: 'Vaccine available for age group 15-18 years.',
        },
    ];
    return (
        <section className="section-padding bg-light py-5">
            <div className="container">
                <h2 className="section-title text-center mb-4 fw-bold text-teal">
                    What’s New On Co-WIN?
                </h2>
                <div className="row gy-4 align-items-center">
                    <div className="col-md-7">
                        <div className="row g-4">
                            {items.map((item, i) => (
                                <div className="col-12" key={i}>
                                    <div className="whatsnew-card card shadow-sm h-100 p-3 flex-row align-items-center">
                                        <div
                                            className="rounded-circle whatsnew-number d-flex flex-column justify-content-center align-items-center me-3"
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                        <div>
                                            <p className="card-text mb-0 fw-medium">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-5 d-none d-md-flex align-items-center justify-content-center">
                        <img src={whatnew} alt="New Features" style={{ maxWidth: 300, borderRadius: 24 }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
