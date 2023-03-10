
const cardTpl = (title, image, timeRead, level , price, priced, authorThumb, authorName, first = false) =>`
                <div class="carousel-item ${ first ? 'active' : '' }">
                    <div class="col-3">
                        <div class="card rounded shadow-sm border-0">
                            <img src="assets/images/${image}" class="card-img-top">
                            <div class="card-body">
                                <h6 class="card-title">${title}</h6>
                                <p class="card-text text-secondary pt-1">
                                    <i class="bi bi-clock text-secondary"></i> ${timeRead} 
                                    <i class="bi bi-bar-chart-fill text-primary"></i> ${level} 
                                </p>
                                <div class="d-flex">
                                    <ul class="list-inline small text-warning">
                                        <li class="list-inline-item m-0 "><i class="bi bi-star-fill"></i></li>
                                        <li class="list-inline-item m-0"><i class="bi bi-star-fill"></i></li>
                                        <li class="list-inline-item m-0"><i class="bi bi-star-half"></i></i></li>
                                        <li class="list-inline-item m-0"><i class="bi bi-star"></i></li>
                                        <li class="list-inline-item m-0"><i class="bi bi-star"></i></li>
                                    </ul>
                                    <p class="text-warning fw-semibold ps-2">2.5</p>
                                    <p class="text-secondary ps-1">(1,500)</p>
                                    </div>
                                    <div class="d-flex">
                                        <strong>€${price}</strong>
                                        <span class="text-decoration-line-through text-secondary ps-1">€${priced}</>
                                    </div>
                            </div>
                            <div class="d-flex p-3 align-items-center border-top">
                                <a href="#" class="text-decoration-none flex-grow-1 text-secondary flex-shrink">
                                    <img class="img-fluid rounded-circle "src="assets/images/${authorThumb}" width="30px" height="30px">
                                    <span>${authorName}</span> 
                                </a>
                                <hr class="p-0">
                                <a href="#"><i class="bi bi-bookmark text-secondary"></i></a>
                            </div>                                
                        </div>
                    </div>
                </div>`
