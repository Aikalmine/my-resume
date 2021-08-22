import Education from "./Education";
import Experience from "./Experience";
import Language from "./Language";
import Skills from "./Skills";
import Summary from "./Summary";
import Intrest from "./Intrest";

function Main(){
    return (
        <div class="resume-body p-5">
            <Summary/>
            <div class="row">
                <Experience/>
                <div class="col-lg-3">
                    <Skills/>
                    <Education/>
                    <Language/>
                    <Intrest/>
                </div>
            </div>
        </div>
    );
}

export default Main;