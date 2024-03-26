import './../styles-sass/general.scss';
import './../styles-sass/modal.scss';

/*POP-UP / MODAL*/
var body = document.body;
window.addEventListener("scroll", openModal);
function openModal() {
    if (window.scrollY > 800) {
        document.getElementById("mymodal").style.visibility = 'visible';
        body.classList.add('stopScroll');
        window.removeEventListener("scroll", openModal);
    };
};

function Close() {
    document.getElementById("mymodal").style.display = "none";
    body.classList.remove('stopScroll');
}

export default function Modal() {
    return (
        <>
            <div id="mymodal" className="mymodal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span id="close" onClick={Close}>×</span>
                        <h2>Cookie Policy</h2>
                    </div>
                    <div className="modal-body">
                        <p>
                            This website uses cookies to give our users the best experience. <br />
                            By using our website, you agree to the use of cookies.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}