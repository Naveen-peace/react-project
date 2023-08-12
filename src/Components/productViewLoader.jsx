import React from 'react'

function ProductViewLoader() {
    return (
        <div>
            <section >
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                        </div>
                        <div className="col-md-6">
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <button className="btn btn-dark disabled placeholder col-2" type="button"></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductViewLoader