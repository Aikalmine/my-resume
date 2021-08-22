import { React } from "react";
import Header from './includes/Header';
import Footer from './includes/Footer';
import Main from './Main';

function Home(){
    return (
        <div>
            <article class="resume-wrapper text-center position-relative">
                <div class="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
                    <Header/>
                    <Main/>
                </div>
            </article>
            <Footer/>
        </div>
    );
}

export default Home;