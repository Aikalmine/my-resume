import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Summary from "./Summary";

function Main(){
    return (
        <div class="resume-body p-5">
            <Summary/>
            <div class="row">
                <Experience/>
                <div class="col-lg-3">
                    <Skills/>
                    <Education/>
                </div>
            </div>
        </div>
    );
}

export default Main;