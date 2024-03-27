import './../styles-sass/general.scss';
import './../styles-sass/modal.scss';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Modal() {
    const [isVisible, setIsVisible] = useState(false);

    var body = document.body;
    useEffect(() => {
        window.addEventListener("scroll", openModal);
        function openModal() {
            if (window.scrollY > 800) {
                setIsVisible(true);
                body.classList.add('stopScroll');
                window.removeEventListener("scroll", openModal);
            };
        };
    }, [])

    function Close() {
        setIsVisible(false);
        body.classList.remove('stopScroll');
    }

    return (
        <>
            {isVisible && (
                <div id="mymodal" className="mymodal" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <span id="close"
                                onClick={Close}
                            >×</span>
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
            )}
        </>
    );

}