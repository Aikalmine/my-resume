import Experience from "./Experience";
import Summary from "./Summary";

function Main(){
    return (
        <div class="resume-body p-5">
            <Summary/>
            <div class="row">
                <Experience/>
            </div>
        </div>
    );
}

export default Main;