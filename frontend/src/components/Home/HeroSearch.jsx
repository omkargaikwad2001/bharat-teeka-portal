import SectionWrapper from "./SectionWrapper";
import "./HeroSearch.css";

export default function HeroSearch() {
    return (
        <SectionWrapper>
            <div className="col-12">
                <div className="hero-search-card w-100 bg-white shadow-lg rounded-4 p-4 p-md-5">
                    <h1 className="section-title mb-3 text-center fw-bold">
                        Search Your Nearest Vaccination Center
                    </h1>

                    <p className="text-muted mb-4 mx-auto text-center hero-subtitle">
                        Get a preview list of nearest centers and check availability of
                        vaccination slots.
                    </p>

                    <ul className="nav nav-tabs custom-tabs justify-content-center mt-3 mb-4">
                        <li className="nav-item">
                            <button className="nav-link active px-4">By District</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link px-4">By PIN</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link px-4">On the Map</button>
                        </li>
                    </ul>

                    <div className="row g-3 align-items-center justify-content-center mt-1">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <select className="form-select form-select-lg rounded-3">
                                <option>Select State</option>
                            </select>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <select className="form-select form-select-lg rounded-3">
                                <option>Select District</option>
                            </select>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-8">
                            <button className="btn btn-teal btn-lg w-100 rounded-pill shadow-sm">
                                Search Centers
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
}
