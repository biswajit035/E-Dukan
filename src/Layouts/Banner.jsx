import React from 'react'

export const Banner = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://cdn.staticans.com/image/catalog/brandstore/purehomeandliving/484-2023_01_04-EOSS_Furniture_Banner_website_mobile.jpg"class="d-block w-100 h-50" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://kalidas365itsolutions.files.wordpress.com/2014/06/banner6.jpg" class="d-block w-100 h-50" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.liqo.in/wp-content/uploads/2021/09/Website-banner-2.jpg" class="d-block w-100 h-50" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <br />
        </div>
    )
}
