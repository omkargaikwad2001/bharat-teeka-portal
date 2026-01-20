import "./Faq.css";

export default function Faq() {
    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title text-center mb-4 fw-bold">Frequently Asked Questions</h2>

                <div className="accordion" id="faqAccordion">
                    {/* FAQ 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading1">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq1"
                                aria-expanded="true"
                                aria-controls="faq1"
                            >
                                How to download vaccination certificate?
                            </button>
                        </h2>
                        <div
                            id="faq1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                You can download your vaccination certificate using your registered mobile number through the official portal or app. Enter your mobile number, verify with OTP, and select the download option.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading2">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq2"
                                aria-expanded="false"
                                aria-controls="faq2"
                            >
                                Can I update my date of birth?
                            </button>
                        </h2>
                        <div
                            id="faq2"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading2"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Yes, you can update your date of birth through the "Raise an Issue" section in your profile. Submit the required documents for verification, and the update will be processed within 7-10 working days.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading3">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq3"
                                aria-expanded="false"
                                aria-controls="faq3"
                            >
                                How do I book a vaccination slot?
                            </button>
                        </h2>
                        <div
                            id="faq3"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading3"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Visit the vaccination portal, register/login with your mobile number, search for available centers by location and date, select your preferred slot, and confirm the booking with OTP verification.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading4">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq4"
                                aria-expanded="false"
                                aria-controls="faq4"
                            >
                                What documents are required for registration?
                            </button>
                        </h2>
                        <div
                            id="faq4"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading4"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                You need a valid mobile number, Aadhaar number or other government ID, and basic personal details. Photo ID proof may be required at the vaccination center for verification.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading5">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq5"
                                aria-expanded="false"
                                aria-controls="faq5"
                            >
                                Can I reschedule my vaccination appointment?
                            </button>
                        </h2>
                        <div
                            id="faq5"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading5"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Yes, you can reschedule your appointment up to 24 hours before the scheduled time. Go to "Manage Appointment" section, select reschedule option, and choose a new available slot.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 6 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading6">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq6"
                                aria-expanded="false"
                                aria-controls="faq6"
                            >
                                How to check vaccination status?
                            </button>
                        </h2>
                        <div
                            id="faq6"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading6"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Log in to the portal with your credentials, navigate to "Vaccination History" or "Beneficiary Details" section to view your complete vaccination status and certificate details.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
