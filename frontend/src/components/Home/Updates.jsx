import "./Updates.css";
export default function Updates() {
    const items = [
        {
            title: "Precaution Dose Launched",
            text: "Government has started administering precaution doses for all eligible citizens.",
            icon: "bi-capsule",
            tag: "Announcement",
        },
        {
            title: "New Vaccination Centers Added",
            text: "More vaccination centers opened across multiple districts.",
            icon: "bi-geo-alt-fill",
            tag: "Coverage Boost",
        },
        {
            title: "Children Vaccination Updated",
            text: "Now vaccination available for age groups 5-12 years.",
            icon: "bi-people-fill",
            tag: "For Children",
        },
    ];

    return (
        <div className="container my-5">
            
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h3 className="fw-bold mb-1">What’s New</h3>
                    <p className="text-muted mb-0">
                        Latest platform and policy updates around vaccination.
                    </p>
                </div>
            </div>

            <div className="row g-3">
                {items.map((item, idx) => (
                    <div className="col-md-4" key={idx}>
                        <div className="update-card h-100 p-3 rounded-4">
                            <div className="d-flex align-items-center mb-2">
                                <div className="update-icon me-2">
                                    <i className={`bi ${item.icon}`}></i>
                                </div>
                                <span className="badge bg-update-tag text-teal fw-semibold">
                                    {item.tag}
                                </span>
                            </div>
                            <h5 className="fw-semibold mb-2">{item.title}</h5>
                            <p className="card-text text-muted mb-0">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
