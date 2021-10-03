function Header(){
    return(
        <header class="resume-header pt-4 pt-md-0">
            <div class="row">
                <div class="col-block col-md-auto resume-picture-holder text-center text-md-start">
                    <img class="picture" src="assets/images/profile.jpg" alt=""/>
                </div>
                <div class="col">
                    <div class="row p-4 justify-content-center justify-content-md-between">
                        <div class="primary-info col-auto">
                            <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">Muhammad Ali</h1>
                            <div class="title mb-3">Full Stack Developer</div>
                            <ul class="list-unstyled">
                                <li class="mb-2"><a class="text-link" href="#"><i class="far fa-envelope fa-fw me-2" data-fa-transform="grow-3"></i>aikalmine@gmail.com</a></li>
                                <li><a class="text-link" href="#"><i class="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"></i>0344-5949436</a></li>
                            </ul>
                        </div>
                        <div class="secondary-info col-auto mt-2">
                            <ul class="resume-social list-unstyled">
                                <li class="mb-3"><a rel="noreferrer" target="_blank"  class="text-link" href="https://www.linkedin.com/in/dev-mali"><span class="fa-container text-center me-2"><i class="fab fa-linkedin-in fa-fw"></i></span>www.linkedin.com/in/dev-mali</a></li>
                                <li class="mb-3"><a rel="noreferrer" target="_blank"  class="text-link" href="https://github.com/Aikalmine"><span class="fa-container text-center me-2"><i class="fab fa-github-alt fa-fw"></i></span>github.com/Aikalmine</a></li>
                                <li class="mb-3"><a rel="noreferrer" target="_blank"  class="text-link" href="https://stackoverflow.com/users/12098590/muhammad-ali"><span class="fa-container text-center me-2"><i class="fab fa-stack-overflow"></i></span>users/12098590/muhammad-ali</a></li>
                                <li><a rel="noreferrer" target="_blank"  class="text-link" href="https://mali-dev.com/"><span class="fa-container text-center me-2"><i class="fas fa-globe"></i></span>mali-dev.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;