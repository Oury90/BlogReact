import "./band.css";


function Band(){
    return (
        <div className="container-band">
            <div className="band">
                <h1>We Have</h1>
                <div className="band-product">
                    <div className="content">
                        <span>476</span>
                        <p>Cliens</p>
                    </div>

                    <div className="content">
                        <span>15</span>
                        <p>Employees</p>
                    </div>

                    <div className="content">
                        <span>20</span>
                        <p>Years of experience</p>
                    </div>

                    <div className="content">
                        <span>35</span>
                        <p>Awards</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Band;